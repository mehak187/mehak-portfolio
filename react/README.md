# mehak-portfolio (React)

Portfolio site of Mehak Amir, Senior Full Stack Developer. Built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files land in `dist/`.

## Where to edit things

| What | File |
|---|---|
| Name, phone, email, WhatsApp, stats | `src/data/site.js` |
| Projects and live links | `src/data/projects.js` |
| Services, process, FAQs | `src/data/content.js` |
| Design and layout | `src/styles.css` |
| Project screenshots | `public/img/` |

Adding a project means adding one object to `src/data/projects.js` and dropping its screenshot into `public/img`.

## Deploy

Netlify or Vercel: build command `npm run build`, publish directory `dist`.
