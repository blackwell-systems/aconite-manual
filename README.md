# Aconite user manual

The documentation site for **Aconite**, a filters-forward analog-modeling
polysynth by **Alkaloid Audio**. Built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build).

This repository holds only user-facing material: the authored manual prose and
interface screenshots. It contains no synth source, no DSP, and no internal
tooling.

## Develop

Requires Node.js. Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

The site runs at `http://localhost:4321/aconite-manual/` (note the `base` path).

## Build

```sh
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  content/docs/       the manual, one Markdown/MDX file per page
  styles/custom.css   the Aconite theme (dark, warm-amber accent)
  assets/screenshots/ interface PNGs (see SCREENSHOTS.md)
astro.config.mjs      site config + sidebar (mirrors the manual outline)
.github/workflows/    GitHub Pages deploy
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to **GitHub Pages**. The site is served under the project
sub-path, so `astro.config.mjs` sets both `site` and `base: '/aconite-manual'`.

A custom domain (for example `docs.alkaloid.audio`) can be added later by
configuring the domain in the repository's Pages settings and adding a `CNAME`
file; at that point `base` can be dropped in favor of pointing `site` at the
domain.

## Screenshots

Interface images are PNGs exported from the running synth. See
[`SCREENSHOTS.md`](./SCREENSHOTS.md).
