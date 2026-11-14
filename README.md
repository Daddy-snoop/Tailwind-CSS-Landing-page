# Askmeidentity landing page

A responsive HTML and Tailwind CSS implementation of the supplied landing-page JPG. All images, fonts, and compiled styles are local.

## Preview

Open `public/index.html` directly in a browser. For an HTTP preview, run `python -m http.server 8000 --directory public` from this folder and visit `http://localhost:8000`.

## Project structure

- `public/index.html` contains the page content and responsive Tailwind utility classes.
- `public/assets/` contains the individual images from the supplied design.
- `public/fonts/` contains Righteous and Saira with their licenses.
- `public/app.js` handles navigation, course filtering, the in-memory basket, testimonials, and preview dialogs.
- `src/styles.css` contains Tailwind directives, gradient definitions, typography, and layout rules. The pale section gradient is the `--light` property. The separate radial highlight behind the portrait is in `.hero`.
- `tailwind.config.cjs` defines the files scanned by Tailwind.
- `public/styles.css` is the compiled production stylesheet.

## Edit and rebuild

Install Node.js and npm, then run:

```sh
npm install
npm run watch
```

For a one-time production build, use `npm run build`. The checked-in stylesheet allows the page to run without an installation step.

## Design preview scope

The JPG supplies a video poster and static artwork. Live video, account access, newsletter delivery, and external footer destinations require their respective content or services. The basket lasts for the current page session.

## Later deployment

Push the project folder to the chosen GitHub repository. For a manual Netlify deployment, upload the entire `public` folder. For a Git-connected deployment, import the repository, select `npm run build` as the build command and `public` as the publish directory.
