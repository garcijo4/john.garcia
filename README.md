# John Garcia - Faculty Portfolio

**Live Site:** [https://garcijo4.github.io/john.garcia/](https://garcijo4.github.io/john.garcia/)

This is the source code for the personal portfolio website of John Garcia.
Built using semantic HTML5 and vanilla CSS.

## Project Files
- `index.html`: The main landing page including the profile, bio, contact links, and a preview of selected research/projects.
- `styles.css`: The shared stylesheet defining layout, typography, and color palettes.
- `assets/`: Directory containing the profile picture (`profile.jpg`) and CV (`cv.pdf`).
- `README.md`: This file.

## How to Run Locally
There is no build process required. Simply open `index.html` in any modern web browser to view the site.
You can double-click the file or drag it into an open browser window.

## Customization Guide

### 1. Color Palettes
The site design is controlled by CSS variables located at the top of `styles.css`.
Currently, there are 3 proposed palettes:
1. **Classic Slate & Indigo** (Active by default)
2. **Modern Serif & Forest**
3. **Crisp Monotone & Tech Blue**

To switch palettes, simply comment out the active palette in `:root` and uncomment your preferred option.

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
- **Images/PDFs broken:** Ensure files are correctly named and located inside the `assets/` folder (`assets/profile.jpg`, `assets/cv.pdf`).
