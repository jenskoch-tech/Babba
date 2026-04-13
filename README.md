# Peter Koch — Personal Website

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
├── gallery.html        ← Selected images  
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

## Images
Here’s a **clean, copy-paste README section** you can drop straight into your GitHub repo. It’s written so it’s easy for anyone (including your dad) to follow.

---

## Photo Upload Guidelines (Gallery)
To keep the gallery clean, fast, and visually consistent, please follow these simple steps when adding new images.
---
### Recommended Image Format

* **Aspect ratio:** 4:3 (important)
* **Resolution:** 1200–1600px width
* **File type:** `.jpg` (preferred) or `.webp`
* **File size:** ideally under 500KB

Example: `1600 × 1200 px`

---

### Easy Batch Processing (Recommended)

Use **XnConvert** (free tool) to prepare images:

**Steps:**

1. Load all images
2. Apply:

   * Resize → longest side = **1600px**
   * Crop → ratio = **4:3**
3. Output:

   * Format: JPG
   * Quality: 85–90%
4. Click **Convert**

Save as a preset for 1-click use next time

---

### File Naming

Use simple, clean names:

```
frankfurt-bridge.jpg
family-1965.jpg
eintracht-1959.jpg
```

Avoid:

* spaces (`my photo.jpg`)
* special characters (`ä ö ü ß`)
* very long names

---

### Where to Upload

Place images in this Github Repository:

```
/images/
```

---

### How to Add to the Gallery Page

In `gallery.html`, add a new block like this:

```html
<div class="photo">
  <img src="images/your-image.jpg" alt="Short description">
  <p>Your caption here</p>
</div>
```

---

### Tips for Best Results

* Use **landscape photos** where possible
* Avoid mixing very tall portrait images
* Keep captions short and meaningful
* Upload a few images at a time to test layout

---

### Goal

The aim is a **clean, consistent, and timeless gallery** that matches the tone of the stories.

---

If in doubt:
Resize → 4:3 → upload → done 


