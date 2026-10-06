# Inkkraft Tattoo Portfolio

A static, responsive multi-page tattoo artist portfolio. No runtime dependencies are required.

## Run locally

```sh
npm run dev
```

Open `http://127.0.0.1:4173`.

## Build

```sh
npm run build
```

The static site is written to `dist/`.

## Personalize before publishing

- Update the artist details, image URLs, portfolio cards, and journal dates in `src/content.js`.
- Replace the image placeholders with images you have permission to use. Portfolio and editorial imagery is labeled as illustrative.
- Replace placeholder contact and social links in `src/content.js`.
- Set the consultation and contact endpoints in `formEndpoints` near the end of `src/main.js` to connect a form service. Until configured, forms validate locally and clearly report that nothing was sent.
- Replace the example canonical domain in each HTML page before launch.

## Check JavaScript syntax

```sh
npm run check
```
