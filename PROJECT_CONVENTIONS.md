# Project conventions

- Keep HTML, CSS, and JavaScript in separate files.
- Keep the entry HTML at the project root and application CSS/JavaScript in `src/`.
- Keep configuration files such as `vite.config.js` at the project root.
- Load JavaScript with ES modules and import application CSS from the JavaScript entry point so Vite includes it in the build.
- Install external JavaScript libraries with `npm install` and import them; do not use CDN scripts.
- Inspect existing files and settings before editing, and make only necessary changes.
- Before future code changes, consult this document.

## Netlify deployment

- Build command: `npm run build`
- Publish directory: `dist`
