---
title: The on-screen keyboard
description: Playing Aconite with the mouse and computer keys, and how a click's vertical position sets velocity.
---

A one-octave keyboard runs along the bottom of the window, in the **Keyboard** band
next to the pitch and mod wheels. It is there to audition a patch without reaching for
a controller: click the keys with the mouse, or play them from your computer keyboard,
and the notes go into the same path as any external MIDI, so everything (the
arpeggiator, the sequencer, the mod matrix) responds exactly as it would to hardware.

## Clicking a key sets velocity by height

When you click a key with the mouse, **where you click up or down the key sets how
loud the note is**. The key reads like a real keybed, hardest toward the tip:

- **Click low on the key**, toward the front edge nearest you, for a **hard, loud**
  note, up to full velocity at the very bottom.
- **Click high on the key**, toward the back, for a **soft, quiet** note.
- Anywhere in between scales smoothly between the two, so you can dial a note's
  loudness just by choosing how far down the key you click.

Both white and black keys work this way, each over its own length. It is an easy way
to play an expressive part with nothing but a mouse: walk your clicks down the keys for
accents and back up for the quiet notes.

This applies only to notes you play **with the mouse**. Notes from a MIDI controller,
an MPE surface, or the sequencer carry their own velocity and ignore the click rule.

## What the velocity feeds

The velocity a click produces is the same input velocity a controller sends, so it runs
through everything downstream: the [velocity curve](/performance/voice-and-play/) reshapes
it first, then it sets note loudness and drives every velocity-based modulation route, and
it feeds the arpeggiator and step sequencer. Clicking lower on a key is, in effect, the
mouse's way of striking harder.

## Shaded keys

The keyboard also colours its keys to show you what is happening. Keys light up as they
sound (including the notes the arpeggiator, chord lane, and sequencer are generating for
you), hover and press states pick up the current theme, and the
[probability filter](/performance/probability-filter/) can shade the keys by its response
so you can see, at a glance, which notes it is favouring.
