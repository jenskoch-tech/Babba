# Peter Koch — Personal Literary Website

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


## How to Deploy to GitHub Pages

1. **Create a GitHub account** at https://github.com if you don't have one.
2. Click **"New repository"** and name it `yourdad-stories` (or anything you like).
3. Upload all the files from this folder to the repository.
4. Go to **Settings → Pages** in the repository.
5. Under **"Source"**, select `main` branch and `/ (root)` folder. Click Save.
6. After a minute, the site is live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`


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
