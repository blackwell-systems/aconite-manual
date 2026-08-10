---
title: Header & global controls
description: "The header strip: preset browser, A/B compare, theme switcher, MIDI-learn, PANIC, Options, and Quality."
---

The header runs across the top of the window and holds the controls you reach for
constantly, regardless of what you are editing below: the preset browser, A/B
compare, the theme switcher, the MIDI-learn arm, the always-visible **PANIC**
emergency stop, the Options (gear) menu, and the oversampling **Quality** control.

Everything here is global: it affects the whole instrument, not just one section.
Work left to right across the strip and you cover all of it in a few seconds.

## Preset browser

The current **preset name** sits at the left of the header, flanked by `<` and `>`
step arrows.

- **`<` / `>`**: step backward or forward through the list one patch at a time. Each
  press loads immediately, so you can audition quickly while playing.
- **Name button** (click the patch name itself): opens the **preset browser**, a
  drawer that slides out from the left half of the window with search, category and
  tag filters, favourites, sorting, and Save. Click the name again (or press Escape,
  or click outside the drawer) to close it.

The preset system, including the browser, saving, rename/duplicate, and A/B compare,
is covered in full in [Presets](/master/presets/).

## A/B compare

Next to the preset browser are the **A** and **B** buttons. These let you hold two
versions of a patch (your current settings and an alternative) and flip between
them instantly while playing.

- **A / B**: toggle the active slot. The currently active slot is highlighted.
- **Copy**: copies the active slot's state into the other, giving you a starting
  point to diverge from.

Use A/B whenever you want to compare a tweak against your starting point, or hold
two patch variants and let someone else choose.

## Theme switcher

The theme cluster shows the current theme name with `<` and `>` arrows. Stepping
through auditions each theme live: the whole instrument recolors the moment you
advance, with no separate load step. Around 40 curated themes ship with Aconite,
from dark industrial to light and inverted looks.

For deeper customization (editing colors, saving your own themes) see
[Theming](/interface/theming/).

## MIDI-learn arm

The **MIDI** button (or **Learn** button, depending on your theme) arms Aconite's
MIDI-learn mode. While armed, click any on-screen knob, slider, or button, then
move a physical controller: that CC is instantly mapped to that control. Click
the button again to disarm.

Existing mappings are shown visually when the mode is active; right-clicking a
learned control lets you clear its assignment. The full workflow is covered in
[MPE & MIDI-learn](/master/mpe-midi-learn/).

## PANIC

**PANIC** is the emergency stop. One click does all of this at once:

- Stops all active voices immediately and kills any that are stuck or hung.
- Sends MIDI All Notes Off, so it clears stuck notes in Aconite and any
  downstream MIDI-triggered devices.
- Clears arp hold and latch state, and resets any held note in mono modes, so a
  latched arp chord or a stubbornly held mono note releases completely.
- **Flushes the effect bus**, cutting ringing reverb tails, delay repeats, and any
  other time-based FX residue that would otherwise keep sounding after the voices
  stop.

Keep it in reach when you are performing live. A runaway patch, a note that will
not release, or a reverb that is out of control: PANIC clears it all in one press.

## Options (gear menu)

The **gear icon** opens the Options overlay, which holds settings that are not
part of a patch: window resizing, voice allocation preferences, and the optional
**Auto HQ on bounce** toggle that switches to maximum Quality automatically when
your host renders to disk, even if your live Quality is set low.

## Quality

**Quality** sets how hard the audio engine works to model the analog behavior
accurately. Higher settings reduce aliasing and sharpen the high-end detail of
driven and resonant patches, at the cost of more CPU.

| Setting | Use case |
|---------|----------|
| **1×** | Draft: cheapest, for arranging or light CPU budgets |
| **2×** | Default: a good live balance |
| **4×** | High: cleaner high end for exposed or heavily driven patches |
| **8×** | Offline: maximum fidelity for final renders |

The philosophy behind this control, and why it exists at all, is explained in
[The Aconite philosophy](/getting-started/philosophy/).
