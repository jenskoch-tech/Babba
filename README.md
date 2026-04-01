# Arthur J. Whitmore — Personal Literary Website

A clean, elegant personal website for sharing stories and a biography.
Ready to deploy on **GitHub Pages** with no build tools or server required.

---

## File Structure

```
dad-website/
├── index.html          ← Home / Welcome page
├── biography.html      ← Biography with photo placeholder
├── stories.html        ← Stories index (expandable + linked)
├── story-portugal.html ← Example of a full-page story (template)
├── guestbook.html      ← Guestbook with contact form
├── styles.css          ← All styles (edit variables at the top)
└── README.md           ← This file
```

---

## How to Deploy to GitHub Pages

1. **Create a GitHub account** at https://github.com if you don't have one.
2. Click **"New repository"** and name it `yourdad-stories` (or anything you like).
3. Upload all the files from this folder to the repository.
4. Go to **Settings → Pages** in the repository.
5. Under **"Source"**, select `main` branch and `/ (root)` folder. Click Save.
6. After a minute, the site is live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## Personalisation Checklist

Search for `<!-- EDIT:` comments throughout the HTML files — they mark
every place that needs your content.

### Global changes (every page)
- [ ] Replace `Arthur J. Whitmore` with your father's real name
- [ ] Update the `<title>` tag in the `<head>` of each file
- [ ] Update the footer copyright line

### index.html
- [ ] Update hero subtitle / tagline
- [ ] Rewrite the welcome paragraphs

### biography.html
- [ ] Add a real portrait photo:
  1. Create a folder called `images/` inside the project folder
  2. Save the photo as `images/portrait.jpg` (crop to portrait ratio, ~600px wide)
  3. Replace the placeholder `<div class="bio-photo-placeholder">` with:
     `<img src="images/portrait.jpg" alt="Portrait of [Name]" class="bio-photo" />`
- [ ] Rewrite all biography paragraphs
- [ ] Update birth year and place
- [ ] Update the pull quote / blockquote

### stories.html
- [ ] Replace the sample stories with real ones
- [ ] To add more stories: copy an `<article class="story-card">` block
- [ ] For long stories: duplicate `story-portugal.html`, rename it, fill it in

### story-portugal.html (template for individual story pages)
- [ ] Rename the file to match your story (e.g. `story-adventure.html`)
- [ ] Replace all story content
- [ ] Update the `<a href="...">` link in `stories.html` to match the filename

### guestbook.html
- [ ] Set up a free Formspree account (https://formspree.io) to receive messages
- [ ] Replace `action="#"` with your Formspree endpoint URL
- [ ] Remove or replace the three sample guestbook entries

---

## Colour Palette (edit in styles.css)

```css
--cream:        #FAF7F0;   /* Page background       */
--navy:         #1C2B4A;   /* Headings, nav bar      */
--gold:         #B8935A;   /* Accents, highlights    */
--charcoal:     #2C2C2C;   /* Body text              */
--gray:         #6B6560;   /* Muted / secondary text */
```

Change these values at the top of `styles.css` to retheme the whole site instantly.

---

## Fonts

The site uses **Google Fonts** (loaded automatically):
- **Playfair Display** — headings and titles
- **EB Garamond** — body text and paragraphs
- **Cormorant Garamond** — labels, captions, and accents

These load from the internet, so the site requires an internet connection
to display the correct fonts. (It degrades gracefully to Georgia if offline.)
