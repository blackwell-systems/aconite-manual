---
title: DX7 SysEx import
description: "Load classic Yamaha DX7 .syx patches into Aconite: a single voice into the FM oscillator, or a whole 32-voice bank into its own DX7 Imports preset collection."
---

The Yamaha DX7 has one of the largest patch libraries of any synthesizer ever made:
decades of banks, thousands of `.syx` files, and every classic FM sound you have
heard on record. Aconite's [FM oscillator](/sources/fm/) can load those patches
directly, so all of that history is available as a starting point for your own
sounds.

There are two ways in, depending on whether you want **one sound** or a **whole
bank**.

## What a DX7 `.syx` file is

A DX7 patch travels as a **SysEx** file, usually with a `.syx` extension. Two kinds
turn up in the wild, and Aconite reads both:

- A **single voice**: one DX7 patch on its own.
- A **32-voice bank**: the classic DX7 cartridge, thirty-two named patches in one
  file.

Aconite works out which kind a file is automatically, so you do not have to say in
advance.

## Import one voice into the FM oscillator

Use this when you want a single DX7 sound to build on inside the current patch.

1. Set an oscillator's **WAVE** to **FM** (see [FM oscillator](/sources/fm/)).
2. In the FM editor's header, click **Import DX7…**.
3. Choose a `.syx` file.

What happens next depends on the file:

- If it is a **single voice**, it loads straight into the current FM oscillator.
- If it is a **32-voice bank**, Aconite pops up a **list of the thirty-two patch
  names** so you can pick the one you want. Choose a name and that voice loads into
  the oscillator.

The import touches **only the current oscillator's FM structure**: the operators,
the matrix, the envelopes, the ratios. Your filter, effects, amp envelope, and
everything else in the patch are left exactly as they were, so you are dropping a
DX7 tone into *your* sound rather than replacing the whole thing. Once it is loaded,
every part of it is editable in the [FM editor](/sources/fm/) like any patch you
built by hand: sweep the matrix, redraw an operator envelope, add feedback.

## Import a whole bank into presets

Use this when you want to browse an entire cartridge as ready-to-play sounds.

1. Open the [preset browser](/master/presets/) (click the preset name in the header).
2. Click **Import DX7…** along the bottom of the browser.
3. Choose a `.syx` file.

Aconite imports **every voice in the file as its own preset** and files them under a
dedicated **"DX7 Imports"** collection. You will find that collection as its own
category in the browser's filter rail, and the browser jumps you straight to it after
the import so the new sounds are right there.

Keeping the imports in their own collection is deliberate: they stay **out of your
Factory and User lists** so a big cartridge full of patches never clutters the sounds
you have made yourself. Browse, audition, and favourite them exactly like any other
preset; each one is a complete patch you can then edit and re-save into your own User
library if you want to keep a tweaked version.

:::note
The bank import brings each DX7 voice in as a full Aconite patch (FM oscillator plus
Aconite's default filter, amp, and effects around it). A single-voice import into the
FM oscillator, by contrast, changes only that oscillator and leaves the rest of your
current patch alone. Reach for the bank import to *browse a cartridge*, and the
single import to *drop one sound into a patch you are building*.
:::

## What to expect: faithful, not a clone

Aconite's DX7 import is a **faithful** import, not a bit-exact DX7 emulation. The
goal is that a patch loads in **recognisable and musically right**: the algorithm,
the operator ratios and levels, the envelopes, feedback, velocity response, and the
way the tone changes across the keyboard all come across, so a bass sounds like that
bass and a bell sounds like that bell.

What it is **not** is a hardware-accurate reproduction of the original chip. Aconite
runs the imported voice through **its own** anti-aliasing, oversampling, and voicing,
and once it is loaded it lives in Aconite's world: you can send it through Aconite's
[filters](/filters/the-two-filters/), its [effects rack](/effects/using-the-rack/),
and its [modulation matrix](/modulation/matrix/), and reshape the FM structure freely.
That is the point, an imported DX7 patch is a **starting point inside Aconite**, not a
frozen copy of the original. If you specifically want a bit-exact DX7 emulation,
that is a job for a dedicated DX7 emulator; Aconite gives you the sound and then hands
you the whole instrument to take it further.

:::tip
A few DX7 files carry a slightly off internal checksum (common with older banks
shared online). Aconite imports them anyway and simply notes it, so you rarely need
to worry about it.
:::

## Where to find `.syx` banks

Aconite does not ship DX7 banks and does not point you at any particular set:
**where you get `.syx` files is up to you.** There are large collections of
freely-shared, user-made DX7 patches available online. Original Yamaha ROM cartridge
sets are a different matter: those are copyrighted, so sourcing them is your own
responsibility. Whatever `.syx` files you have, the import steps above are the same.

## See also

- [FM oscillator](/sources/fm/) — the 6-operator FM voice an imported patch loads
  into, and everything you can do to it afterwards.
- [Presets & A/B](/master/presets/) — the preset browser the bank import fills, and
  how to favourite and re-save imported sounds.
