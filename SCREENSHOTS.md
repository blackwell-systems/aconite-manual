# Screenshots

The interface images in this manual (the annotated hero shot, the per-panel
captures, the signal-flow diagram source frames) are **PNGs exported from the
running synth**. They are the only artifacts that cross from the build into this
public repo — no source, no code, no scripts.

## How the images are produced

Aconite's build has a screenshot capture hook (`SYNTH_SHOT`) that renders the
plugin's panels to PNG at a chosen scale. Panels are captured there, in the
private build, and the finished PNGs are dropped into this repo under
`src/assets/screenshots/`.

The full set of `panel-*.png` images is regenerated in one command by a capture
script in the private synth repo (`tools/capture-manual-shots.sh`): it shoots
every panel in a fixed, representative state and writes the PNGs straight into
`src/assets/screenshots/` here. After a GUI design change, re-running that script
and committing the updated PNGs is all it takes to keep the manual current.

## How to add one to a page

1. Capture the panel in the synth and export the PNG.
2. Copy the PNG into `src/assets/screenshots/` with a descriptive name
   (e.g. `interface-overview.png`, `filter-response.png`).
3. Reference it from the relevant `.md`/`.mdx` page with a normal Markdown image
   or Astro's image handling, replacing that page's `TODO: ... screenshot`
   placeholder.

## Conventions

- **Name by panel**, lowercase, hyphenated.
- **Prefer 2× (retina) captures** so the images stay crisp on high-density
  displays; Astro downsizes as needed.
- **Keep them current**: when a panel's layout changes in a release, recapture
  and replace the PNG so the manual never drifts from the UI.

No cross-repo tooling lives here. This repo only ever receives finished image
files.
