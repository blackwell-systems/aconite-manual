---
title: Saturation & drive
description: The whole family of ways to add warmth, grit, and drive in Aconite - where each stage sits, what it colors, and which one to reach for.
---

Analog character is not one knob in Aconite - it is a *family* of drive and saturation
stages spread along the whole signal path, from the mixer through the filter to the master
bus. Each one colors a different point, so you can dial in anything from a whisper of warmth
to overt distortion, and stack several gentle stages instead of pushing one hard (which is
usually how the best-sounding patches do it).

This page maps them all in one place. Every stage is covered in depth in its home chapter;
this is the "which one, and when" guide.

## The stages at a glance

Reading down roughly in signal order - where the sound is made, through the filter, out to
the master:

| Stage | Where it acts | What it does | Home |
|---|---|---|---|
| **Mix Drive** | the mixer, before the filter | Minimoog-style "mixer overload" - grit rises as you push the source mix hot, and the filter then shapes the saturated tone | [Mixer & Mix Drive](/aconite-manual/sources/mixer/) |
| **Filter Drive** | each filter's input | pushes a filter model into its own non-linearity; the character depends on the model | [The two filters](/aconite-manual/filters/the-two-filters/) |
| **Voicing (Analog) + Depth** | inside the filter resonance | Analog voicing adds per-stage clipping inside the Ladder/Diode resonance; Depth sets how hard | [The two filters](/aconite-manual/filters/the-two-filters/) |
| **FB Sat** | the filter feedback loops | warms and tames the resonant "bark"; only bites when a filter's Feedback is up | [Feedback & FB Sat](/aconite-manual/filters/feedback/) |
| **Global Sat** | the voice output | an always-on gentle warmth on the whole voice, regardless of patch | [The two filters](/aconite-manual/filters/the-two-filters/) |
| **Waveshaper** | before, between, or after the filters | a full drawable transfer-curve shaper - from subtle to overt, wherever you place it | [Effect by effect](/aconite-manual/effects/effect-by-effect/) |
| **Bus Glue + Warmth** | the master bus | gentle whole-mix "console glue"; Warmth shifts its harmonic character | [The Master band](/aconite-manual/master/master-band/) |
| **PSU Sag** | the master bus | not distortion but its sibling: loud chords duck then bloom back, like an analog power supply sagging under load | [The Master band](/aconite-manual/master/master-band/) |
| **Distortion / Tape / Bit-crusher / Compressor** | the effects rack | overt, characterful coloration - tube, fuzz, tape, lo-fi, or driven compression | [Effect by effect](/aconite-manual/effects/effect-by-effect/) |

## Which one do I reach for?

- **Per-note grit that reacts to how hard you play** → **Mix Drive** (before the filter) or
  **Filter Drive**. Both respond to the level hitting them, so dynamics translate into dirt.
- **Whole-voice warmth on any patch** → **Global Sat**. Set it once and every sound gets a
  gentle analog sheen.
- **Tame or color a screaming resonant filter** → **FB Sat** (with the filter's Feedback
  turned up). It rounds off a harsh self-oscillating peak into something more musical.
- **Mix cohesion and the "alive" polyphony bloom** → **Bus Glue** + **PSU Sag** on the
  master. Glue is the console-style paste; Sag adds the breathing movement of a stacked
  chord ducking and recovering.
- **A specific, obvious distortion voice** (tube, fuzz, tape, lo-fi) → the **effects rack**.
  This is where you go when you want the distortion to be a *sound*, not just a seasoning.
- **A bespoke, hand-drawn character** → the **Waveshaper**, which you can draw by hand and
  place before, between, or after the filters.

:::tip
These stages **stack**. A touch of Mix Drive, a little Global Sat, and a whisper of Bus Glue
will sound richer and more three-dimensional than any single stage pushed to the edge. Reach
for one strong effect only when you want it to be obvious.
:::

## Per-voice versus master

The stages split into two families, and the difference matters:

- **Per-voice** stages (Mix Drive, Filter Drive, Voicing, FB Sat, Global Sat, the
  Waveshaper) run *inside each voice*. A stacked chord therefore saturates
  three-dimensionally - every note has its own drive, so the voices don't smear together the
  way a single bus distortion would. These stages are the ones the
  [Quality](/aconite-manual/master/master-band/) setting cleans up: turning Quality higher
  keeps their driven high end smooth (see
  [The Aconite philosophy](/aconite-manual/getting-started/philosophy/)).
- **Master / bus** stages (Bus Glue, PSU Sag, and the effects rack) run *once on the whole
  mix* after the voices sum. Glue and Sag are kept deliberately gentle so they cohere the
  mix rather than smear it; the rack effects are where the heavier, more overt coloration
  lives.

A good instinct: shape *character* per-voice (down low in the path), and add *cohesion* on
the master (up at the top of the [Master band](/aconite-manual/master/master-band/)).
