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

- Every parameter: oscillators, mixer, filter, envelopes, LFOs, modulation
  matrix routes and depths, FX rack settings, Master band settings, voice and
  performance controls.
- All **drawn shapes**: the LFO curves and their morph targets, the step
  sequencer pattern, the waveshaper transfer curve, the velocity curve, the
  Performer curve, and all six drawable envelope contours, the four **Curve Lanes**,
  and the arp step lane.
- The **path to any user wavetable** you have loaded, the reference to the file, so
  Aconite can reload it when the preset is opened. (The wavetable data itself is not
  embedded; the file needs to be present on the machine where you load the preset.)
- Your active **colour theme**.
- **Both scenes.** When you use the scene layer, a preset captures Scene B's full state alongside
  Scene A's — its own patch, its own effects rack, and its own sequencer/arp/chord/probability stage
  (and its own drawn shapes) — so a two-scene layer or split recalls exactly as you built it. See
  [Scenes](/performance/scenes/).

When you save a preset and load it later, or share it with someone else, the sound
is exactly as you left it, including any shapes you drew by hand. The only things
a preset does not carry are MIDI-learn mappings (those belong to your hardware
setup, not the sound) and authorization state. See
[MPE & MIDI-learn](/master/mpe-midi-learn/) for why MIDI-learn
intentionally stays outside presets.

Presets are **forward-compatible**: if a preset was saved with an older version of
Aconite, parameters that did not exist at the time are silently ignored; parameters
that are absent fall back to their defaults. Old preset files and saved sessions
load without complaint; you will never get an error because a patch predates a new
feature.

## Keeping your sequence across presets

By default, loading a preset loads **everything** it captured, including its
sequence and generative layer. Sometimes you want the opposite: you have built a
groove you love — an arp pattern, a step sequence, a chord lane, a probability
setup, some curve lanes — and you want to **audition different sounds over it**
without each new preset wiping the part out.

Open the [Options gear](/interface/header/#options-gear-menu) and you will find a
toggle, **Presets replace the sequence**:

- **On** (the default): loading a preset replaces your current sequence with the
  preset's own. This is the normal behaviour, and how presets have always worked.
- **Off**: loading a preset **keeps your current sequence** and generative layer
  in place, and loads only the sound. The arp, step sequencer, chord lane,
  probability routes, and curve lanes you built stay exactly as they are while the
  patch underneath them changes.

Turn it off, get a phrase going, then step through the preset list: every sound you
land on plays your groove, so you can hear how each one sits in the part you are
writing. Turn it back on when you want presets to load whole again.

:::note
This is a session preference for how presets **load**; it does not change what a
preset **saves**. Every preset still captures its own full sequence, so the part
is always there when you want it.
:::

## The preset browser

Click the **preset name** in the [header](/interface/header/) and the browser
**slides out as a drawer from the left**, filling the left half of the window. The
[header](/interface/header/) stays lit and interactive above it, so the name button,
theme switcher, and transport keep working while you browse. The synth face dims to
the right so the browser has your focus without hiding the instrument.

**Close the browser** any of three ways: press **Escape**, click **anywhere outside
the drawer**, or click the **preset name** in the header a second time.

The drawer is a full two-pane browser:

- A **filter rail** down the left side: **All** and **Favourites** under Library;
  **Factory** and **User** under Bank; the **categories** (Bass, Lead, Pad, Keys,
  Perc, Seq, FX); and the most-used **tags** as clickable chips. Each shows a count.
- A **search box** at the top filters as you type, matching preset name, author,
  category, and tags at once.
- A **sort** row above the results: **Name**, **Category**, or **Author**.
- The **results list**, where each row shows the preset name, its author and
  category, up to three tags, a **Factory** or **User** badge, and a **favourite
  star**. Click a row to load it; the current preset is highlighted.

Along the bottom of the drawer sit the quick actions: **Save**, **Init** (load the
clean starting patch), **A / B** (flip the compare slots), **`<`** / **`>`** to step
through the filtered list, and **Random** to jump somewhere unexpected. The `<` and
`>` arrows also wrap at the ends, so you can audition quickly without opening the
list. The header's name display refreshes on any load: from the list, from the
arrows, or when your DAW restores a saved session.

## Saving a user preset

1. Shape the sound how you want it.
2. Click **Save** at the bottom of the browser.
3. Fill in the details: a **name**, and optionally a **category**, **tags**
   (comma-separated), an **author**, and a **favourite** flag.
4. Confirm.

The preset is written as a **.synthpreset** file to your user application-data
presets folder. It immediately appears in the **User** list and carries the full
patch state exactly as described above, along with the metadata you entered. That
folder is also where you go to back up your library or copy presets to share with
someone else; the files are portable.

## Managing user presets

**Right-click any user preset** in the list for its actions:

- **Rename** edits the name in place: type the new name and press Enter (Escape
  cancels). The file on disk is renamed with it.
- **Duplicate** makes a copy (named `<name> copy`) that you can then edit
  independently. Duplicating a factory preset gives you an editable **user** copy of
  it, a good way to start from a factory sound without altering the original.
- **Delete** removes the preset, behind a confirmation.

Rename and delete apply to your own user presets; factory presets are read-only.
**Toggle the favourite star** on any row to flag it, then use the **Favourites**
filter to pull up just the sounds you starred.

## The factory bank

Aconite ships with a curated factory bank spanning a wide range of sounds and
playing styles. The bank covers categories including Bass, Lead, Pad, Pluck, FX,
Keys, Brass, Chiptune, and Percussion, including some less common voice types
built on physical modelling (Handpan, Steel Drum, and modal drums), and hard-sync
leads designed around the Probability modulation and the oscillator sync system.

Two factory presets showcase oscillator sync at its most expressive: **Prophet Sync
Lead (Mono)** and **Prophet Sync Lead (Poly)**. Both use two sawtooth oscillators
with a 2→1 sync routing, and an envelope route from Env 3 to the slave oscillator's
Coarse tune — sweeping it a full three octaves so the sync timbre screams and snarls
as the note attacks. The Mono version locks to a single note for cutting lead work;
the Poly version opens the same patch to full polyphony for chords. These are good
patches to open up and study if you want to understand how the sync system and the
modulation matrix work together.

Each factory preset is a full-state capture authored by ear in the plugin, so
what you load is exactly what the preset's author heard. Factory presets carry
their own drawn shapes and modulation programming, not just the default starting
point.

One thing factory presets do not carry over: **loading a factory preset leaves
your current theme untouched.** Because themes are a personal aesthetic choice,
the sound bank does not override your look.

:::tip
The **Init** preset is always available. It resets every parameter and drawn shape
to the clean starting point: the right place to begin building a sound from
scratch.
:::

## Preset metadata

Presets can carry optional metadata: a **category**, free-form **tags**, an
**author** name, and a **favourite** flag. The factory bank is fully categorised
and tagged, so the browser can show you all the Pads or all the patches by a
particular author.

You can tag any user preset and flag it as a favourite without reloading the sound:
the metadata lives separately from the audio state, so browsing and tagging is
non-destructive.

## A/B compare

A/B compare is a workflow tool for the moment when you are deciding between two
versions of a patch. Rather than saving two separate presets and loading back and
forth, you can hold both states in memory and flip between them instantly.

The A/B controls live in the [header](/interface/header/).

**How it works:**

1. Get your patch to a state you like. That is your starting point; call it **A**.
2. Keep editing. Try a different filter setting, a new LFO shape, a different
   effect level.
3. When you want to compare, flip to **B**. Aconite restores the version you left
   in B (on first use, B starts as a copy of the same state, so the first flip is
   a no-op, there is nothing to compare yet until you copy your current work into
   one slot).
4. Use **Copy to other** to capture the current state into the inactive slot. Now
   flip back and forth to A/B by ear.

The flip is immediate. There is no load time, no disk access, no gap in the sound,
just the two states switching.

**What A/B does and does not carry:**

A/B captures the same payload as a preset: all parameters, drawn shapes, and your
theme. It does not carry MIDI-learn mappings (those never change on a flip, which
is exactly what you want: your hardware assignments stay put while you audition
the two sounds). It also does not carry authorization state.

A/B is session-scoped. The two slots live only in memory while the plugin is open
and are not written to disk. When you find the version you prefer, save it as a
user preset to keep it permanently.

## Presets and your DAW session

When you save your DAW project, Aconite's full state is saved with it: the same
complete snapshot a preset would capture. Reopen the project and the sound comes
back exactly as you left it, including any drawn shapes and your current theme.
MIDI-learn mappings come back too, through the host session rather than the preset
format. Authorization state is per-machine and does not travel with sessions;
see [Authorization](/getting-started/authorization/) for how to
move Aconite to a new machine.

For a walkthrough of loading your first sound, see the
[Quick start](/getting-started/quick-start/).
