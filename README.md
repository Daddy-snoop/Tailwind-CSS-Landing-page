# Tailwind CSS landing page

A responsive HTML and Tailwind CSS implementation of the supplied landing-page JPG. All images, fonts, and compiled styles are local.


## Project structure

- `public/index.html` contains the page content and responsive Tailwind utility classes.
- `public/assets/` contains the individual images from the supplied design.
- `public/fonts/` contains Righteous and Saira with their licenses.
- `public/app.js` handles navigation, course filtering, the in-memory basket, testimonials, and preview dialogs.
- `src/styles.css` contains Tailwind directives, gradient definitions, typography, and layout rules. The pale section gradient is the `--light` property. The separate radial highlight behind the portrait is in `.hero`.
- `tailwind.config.cjs` defines the files scanned by Tailwind.
- `public/styles.css` is the compiled production stylesheet.

