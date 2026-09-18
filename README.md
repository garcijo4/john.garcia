# John Garcia - Faculty Portfolio

**Live Site:** [https://garcijo4.github.io/john.garcia/](https://garcijo4.github.io/john.garcia/)

This is the source code for the personal portfolio website of John Garcia.
Built using semantic HTML5 and vanilla CSS.

## Project Files
- `index.html`: The main landing page including the profile, bio, contact links, and a preview of selected research/projects.
- `styles.css`: The shared stylesheet defining layout, typography, and color palettes.
- `app.js`: Mobile navigation, active-section highlighting, and print handling.
- `assets/`: Profile photo (`profile-600/1200.webp|jpg`, a portrait crop of `profile.jpg`), social preview image (`og-image.jpg`), CV (`John_Garcia_CV.pdf`), and favicon.
- `README.md`: This file.

## How to Run Locally
There is no build process required. Simply open `index.html` in any modern web browser to view the site.
You can double-click the file or drag it into an open browser window.

## Customization Guide

### 1. Colors and type
The site uses a warm editorial theme: an off-white paper background, deep navy text, and a single rust accent. All colors are CSS variables at the top of `styles.css` (`:root`), with a dark-mode override further down (`@media (prefers-color-scheme: dark)`). Change the accent by editing `--primary`, `--primary-strong`, `--primary-soft`, and `--primary-ring` together.

Headings use Merriweather; body text uses Inter (both loaded from Google Fonts in `index.html`).

### Profile photo
`assets/profile.jpg` is the full-resolution original (16 MB) and is not loaded by the page. The hero uses the optimized crops `profile-600.*` and `profile-1200.*`; regenerate them from the original if you change the photo.

### 2. Updating Content
Open `index.html` in a text editor to update the placeholder values:
- Update `[Your Title]` and `[Your Department...]` under the `.profile-content` section.
- Replace the bio paragraph.
- Update the email link (`mailto:`) and social media URLs in the footer.
- The "Selected Research & Projects" section serves as a placeholder. You can edit the cards directly or duplicate them for more items.

### 3. Adding New Pages
If you choose a multi-page site map (e.g., adding a `research.html` page):
1. Duplicate `index.html`.
2. Delete the profile `<section>` and add your new content inside `<main>`.
3. Link to the new page in the `<nav>` section of **both** files.

## Common Issues
- **CSS not loading:** Ensure `styles.css` is in the same directory as `index.html` and that your browser hasn't cached an old version (try Hard Refresh: Ctrl+F5 or Cmd+Shift+R).
- **Images/PDFs broken:** Ensure files are correctly named and located inside the `assets/` folder (`assets/profile-600.jpg`, `assets/John_Garcia_CV.pdf`).
