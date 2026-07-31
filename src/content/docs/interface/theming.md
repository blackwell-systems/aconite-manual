---
title: Theming
description: Aconite's runtime theme system — the token model, the theme editor and browser, saving themes, and how a theme travels with a patch.
---

Aconite is fully themeable at runtime: one shared palette drives every color on
the face, so recoloring live-recolors the whole instrument. A theme is a small set
of tokens — neutral **chrome**, a **per-module accent**, and a **master tint** —
plus a spectral gradient shared by the frequency-aware visualizations. You can
**build your own theme from scratch — or edit any of the bundled ones — live in the
theme editor**, step through around 40 curated themes in the browser, save and load
your themes as `.labtheme` files to share or collect, and the active theme travels with the
patch and the saved project. The default look is **"Ultraviolet"** — Aconite's
signature deep-violet theme.

## How colors are organized

Rather than a flat list of color picker for every pixel, Aconite organizes its
color system into three layers. Change one layer and everything it governs updates
at once:

**Chrome** is the shared furniture — the neutral palette that applies to card
backgrounds and borders, section labels, value readouts, dividers, knob tracks,
waveform displays, grids, the on-screen keyboard keys, and scrollbars. Chrome
colors define the overall "temperature" of the interface: whether it reads warm,
cool, dark, or light.

**Per-module accents** give each section of the instrument a distinct signature
color. The oscillators, the filters, the envelopes, the effects — each has its
own accent, so at a glance you always know which module you are working in. Knobs
with multiple rings color those rings as stepped brightness variations of their
module's accent. You can adjust each module's accent individually in the theme
editor.

**Master tint** is one set of Hue, Saturation, and Brightness sliders that shift
all the module accents together at once, while keeping them distinct from one
another. Dragging the Hue slider re-skins every module in one move, giving you a
completely different mood without losing the per-module contrast.

## The spectral gradient

Each theme also carries a **spectral gradient** — a bass-to-treble color ramp that
washes the frequency-aware visualizations. This same gradient drives the filter
response graph, the live scopes, and the mixer lanes, so they always read
consistently with one another. You can choose between the theme's own colors or a
fixed visible-spectrum rainbow.

## Browsing and switching themes

The **theme cluster** in the header shows the current theme name with `<` and `>`
steppers. Clicking either arrow walks through the saved themes one at a time, and
the whole instrument recolors the instant you step — there is no separate load
click. Around 40 curated themes ship with Aconite, spanning dark industrial looks,
inverted light panels, and everything between.

The same `<` / `>` browser is also available **inside the theme editor overlay**,
so you can step through themes and fine-tune them in the same session — browse
until you find something close, then nudge the colors without closing the editor.

:::tip
Step through themes while a patch is playing. Color can change how you hear a sound
— a dark cold theme and a bright warm theme can make the same patch feel like two
different instruments.
:::

## The theme editor

For deeper customization, open the **theme editor** from the `<` / `>` cluster or
from the Options menu. It opens as a floating overlay on top of the instrument and
lets you:

- Pick any color token from a swatch grid and edit it in a full color picker.
- Drag the master **Hue / Saturation / Brightness** sliders to shift all module
  accents at once.
- Toggle the spectral gradient between Rainbow and Themed modes, and enable or
  disable the mixer-lane coloring.
- Preview your changes live — the whole synth recolors as you work, not just a
  small preview card.

When you are happy with a theme, you can save it to a `.labtheme` file for sharing
or archiving. The `.labtheme` format and the theme embedded in a preset are the
same format — they are fully interchangeable. A theme you author in the editor and
save as a file can be loaded back into any preset, and a theme carried inside a
preset can be exported as a standalone file. You can maintain a personal theme
library of `.labtheme` files and drop whichever one suits a project into any patch.

## Themes travel with patches

The active theme is part of your instrument's state. When you save a preset, the
theme is saved with it; when you load that preset, its look is restored along with
its sound. A patch you share with someone else will arrive in the same visual
context you designed it in.

If you load a preset that was saved without a theme — older patches, for example —
Aconite keeps whatever theme you currently have loaded. The default
**"Ultraviolet"** applies only when no theme information is present at all.
