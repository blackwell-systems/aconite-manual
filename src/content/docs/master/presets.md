---
title: Presets & A/B
description: The preset browser, categories, tags, favourites, the factory bank, saving and loading, and A/B compare.
---

Aconite saves everything a patch is doing in one shared format, so a saved preset
and a host session round-trip identically. The **browser** lets you step through
the combined factory and user lists, pick any preset directly, and save your own;
presets carry optional **category, tags, author, and favourite** metadata; a
factory bank ships bundled; and **A/B compare** lets you flip between two versions
of a sound while you dial it in.

## What a preset captures

A preset is a complete snapshot of the full patch state:

- Every parameter — oscillators, mixer, filter, envelopes, LFOs, modulation
  matrix routes and depths, FX rack settings, Master band settings, voice and
  performance controls.
- All **drawn shapes** — the LFO curves and their morph targets, the step
  sequencer pattern, the waveshaper transfer curve, the velocity curve, the
  Performer curve, and all six drawable envelope contours, the four **Curve Lanes**,
  and the arp step lane.
- The **path to any user wavetable** you have loaded — the reference to the file, so
  Aconite can reload it when the preset is opened. (The wavetable data itself is not
  embedded; the file needs to be present on the machine where you load the preset.)
- Your active **colour theme**.

When you save a preset and load it later, or share it with someone else, the sound
is exactly as you left it — including any shapes you drew by hand. The only things
a preset does not carry are MIDI-learn mappings (those belong to your hardware
setup, not the sound) and authorization state. See
[MPE & MIDI-learn](/aconite-manual/master/mpe-midi-learn/) for why MIDI-learn
intentionally stays outside presets.

Presets are **forward-compatible**: if a preset was saved with an older version of
Aconite, parameters that did not exist at the time are silently ignored; parameters
that are absent fall back to their defaults. Old preset files and saved sessions
load without complaint — you will never get an error because a patch predates a new
feature.

## The preset browser

The browser lives in the [header](/aconite-manual/interface/header/) as a compact
row:

- **`<` and `>` arrows** step to the previous or next preset in the list, wrapping
  at the ends. The list runs through the full factory bank first, then your user
  presets.
- **The name button** in the centre shows the current preset name. Click it to
  open a menu split into **Factory** and **User** sections — pick any preset
  directly from the list.
- **Save** stores the current sound as a user preset. Aconite will prompt you for
  a name.

The name display refreshes on any load — from the arrows, from the menu, or when
your DAW restores a saved session.

## Saving a user preset

1. Shape the sound how you want it.
2. Click **Save** in the browser.
3. Type a name and confirm.

That is it. The preset is written as a **.synthpreset** file to your user
application-data presets folder. It immediately appears in the **User** section of
the browser menu and carries the full patch state exactly as described above. That
folder is also where you go to back up your library or copy presets to share with
someone else — the files are portable.

To delete a user preset, select it in the menu and use the delete option.

## The factory bank

Aconite ships with a curated factory bank spanning a wide range of sounds and
playing styles. The bank covers categories including Bass, Lead, Pad, Pluck, FX,
Keys, Brass, Chiptune, and Percussion — including some less common voice types
built on physical modelling (Handpan, Steel Drum, and modal drums).

Each factory preset is a full-state capture authored by ear in the plugin, so
what you load is exactly what the preset's author heard. Factory presets carry
their own drawn shapes and modulation programming, not just the default starting
point.

One thing factory presets do not carry over: **loading a factory preset leaves
your current theme untouched.** Because themes are a personal aesthetic choice,
the sound bank does not override your look.

:::tip
The **Init** preset is always available. It resets every parameter and drawn shape
to the clean starting point — the right place to begin building a sound from
scratch.
:::

## Preset metadata

Presets can carry optional metadata: a **category**, free-form **tags**, an
**author** name, and a **favourite** flag. The factory bank is fully categorised
and tagged, so the browser can show you all the Pads or all the patches by a
particular author.

You can tag any user preset and flag it as a favourite without reloading the sound
— the metadata lives separately from the audio state, so browsing and tagging is
non-destructive.

## A/B compare

A/B compare is a workflow tool for the moment when you are deciding between two
versions of a patch. Rather than saving two separate presets and loading back and
forth, you can hold both states in memory and flip between them instantly.

The A/B controls live in the [header](/aconite-manual/interface/header/).

**How it works:**

1. Get your patch to a state you like. That is your starting point — call it **A**.
2. Keep editing. Try a different filter setting, a new LFO shape, a different
   effect level.
3. When you want to compare, flip to **B**. Aconite restores the version you left
   in B (on first use, B starts as a copy of the same state, so the first flip is
   a no-op — there is nothing to compare yet until you copy your current work into
   one slot).
4. Use **Copy to other** to capture the current state into the inactive slot. Now
   flip back and forth to A/B by ear.

The flip is immediate. There is no load time, no disk access, no gap in the sound
— just the two states switching.

**What A/B does and does not carry:**

A/B captures the same payload as a preset: all parameters, drawn shapes, and your
theme. It does not carry MIDI-learn mappings (those never change on a flip, which
is exactly what you want — your hardware assignments stay put while you audition
the two sounds). It also does not carry authorization state.

A/B is session-scoped. The two slots live only in memory while the plugin is open
and are not written to disk. When you find the version you prefer, save it as a
user preset to keep it permanently.

## Presets and your DAW session

When you save your DAW project, Aconite's full state is saved with it — the same
complete snapshot a preset would capture. Reopen the project and the sound comes
back exactly as you left it, including any drawn shapes and your current theme.
MIDI-learn mappings come back too, through the host session rather than the preset
format. Authorization state is per-machine and does not travel with sessions —
see [Authorization](/aconite-manual/getting-started/authorization/) for how to
move Aconite to a new machine.

For a walkthrough of loading your first sound, see the
[Quick start](/aconite-manual/getting-started/quick-start/).
