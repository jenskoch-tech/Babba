var FROM_EMAIL = "info@peters-stories.ch";
var TO_EMAIL   = "jens.koch1@googlemail.com";

export default {
  async fetch(request, env) {

    if (request.method === "OPTIONS") {
      return cors(null, 204);
    }
    if (request.method !== "POST") {
      return cors(JSON.stringify({ error: "Method not allowed" }), 405);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return cors(JSON.stringify({ error: "Invalid JSON" }), 400);
    }

    const { name, relation, email, message } = data;
    if (!name || !message) {
      return cors(JSON.stringify({ error: "Missing required fields" }), 400);
    }

    const c = (s) => String(s || "").replace(/<[^>]*>/g, "").trim().slice(0, 1000);
    const safeName     = c(name);
    const safeEmail    = c(email)    || "Not provided";
    const safeRelation = c(relation) || "Not specified";
    const safeMsg      = c(message);

    const htmlBody = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="font-family:Georgia,serif;background:#f5f0e8;padding:32px;margin:0;">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e0d8cc;">
  <div style="background:#1C2B4A;padding:24px 32px;">
    <p style="color:#B8935A;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 4px;">Peter Koch · Stories</p>
    <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0;font-style:italic;">New Guestbook Message</p>
  </div>
  <div style="padding:32px;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr style="border-bottom:1px solid #f0ebe0;">
        <td style="padding:10px 0;color:#999;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;width:130px;">Name</td>
        <td style="padding:10px 0;color:#1C2B4A;font-weight:600;">${safeName}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0ebe0;">
        <td style="padding:10px 0;color:#999;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Relation</td>
        <td style="padding:10px 0;color:#333;">${safeRelation}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0ebe0;">
        <td style="padding:10px 0;color:#999;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Email</td>
        <td style="padding:10px 0;"><a href="mailto:${safeEmail}" style="color:#B8935A;">${safeEmail}</a></td>
      </tr>
    </table>
    <div style="margin-top:24px;padding:20px;background:#faf7f0;border-left:3px solid #B8935A;">
      <p style="margin:0 0 8px;color:#999;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Message</p>
      <p style="margin:0;color:#333;font-size:15px;line-height:1.7;font-style:italic;">${safeMsg.replace(/\n/g, "<br>")}</p>
    </div>
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #f0ebe0;">
      <a href="mailto:${safeEmail}?subject=Re: Your message for Peter Koch"
         style="display:inline-block;background:#1C2B4A;color:#ffffff;padding:12px 24px;
                text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">
        Reply to ${safeName}
      </a>
    </div>
  </div>
  <div style="background:#f0ebe0;padding:14px 32px;">
    <p style="margin:0;color:#999;font-size:11px;">peters-stories.ch &nbsp;·&nbsp; Sent via the guestbook form</p>
  </div>
</div>
</body></html>`;

    const textBody = `New guestbook message\n─────────────────────\nName:     ${safeName}\nRelation: ${safeRelation}\nEmail:    ${safeEmail}\n\nMessage:\n${safeMsg}`;
    const boundary = `----PeterStories${Date.now()}`;
    const rawEmail = [
      `From: Peter's Stories Guestbook <${FROM_EMAIL}>`,
      `To: ${TO_EMAIL}`,
      `Reply-To: ${safeName} <${safeEmail}>`,
      `Subject: New guestbook message — ${safeName}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/plain; charset="UTF-8"`,
      ``,
      textBody,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset="UTF-8"`,
      ``,
      htmlBody,
      ``,
      `--${boundary}--`
    ].join("\r\n");

    try {
      const { EmailMessage } = await import("cloudflare:email");
      const msg = new EmailMessage(FROM_EMAIL, TO_EMAIL, rawEmail);
      await env.EMAIL.send(msg);
      return cors(JSON.stringify({ ok: true }), 200);
    } catch (err) {
      console.error("Send failed:", err.message);
      return cors(JSON.stringify({ error: "Send failed", detail: err.message }), 500);
    }
  }
};

function cors(body, status) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
