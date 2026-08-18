---
title: LFOs
description: "The drawable LFOs: waveforms with A/B morph, sync-aware rate, phase, bipolar, one-shot, and retrigger options."
---

Aconite has **six LFOs**, low-frequency oscillators that loop a shape continuously and
push whatever destination you route them to. They differ from
[envelopes](/envelopes/pool/) in one fundamental way: an envelope is
note-triggered and note-released, shaped around key presses. An LFO cycles on its own clock,
independently of the notes you play. That makes LFOs the right tool for slow evolving
movement, vibrato, tremolo, filter sweeps, and any other modulation that should not restart
with every note.

All six share the same ShapeLFO engine (rate, shape, A/B morph). **LFO 1 and 2** are the
**drawable** ones with the editor panels shown here; **LFO 3 through 6** run the same engine
but are **matrix-only** — you set them up from the [modulation matrix](/modulation/matrix/)
rather than drawing them.

## Starting from a waveform preset

Each LFO offers five **waveform presets** to start from: Sine, Triangle, Ramp (rises),
Saw (falls), and Square. Selecting a preset seeds the LFO's drawable shape with that
classic waveform, so you get a familiar starting point without having to draw anything.
From there you can leave it as-is or open the shape editor and modify it.

:::tip
If you want a clean triangle or sine LFO, just pick the preset and set the rate. The
drawable shape editor is there when you need it; it is never required.
:::

## The shape editor

Clicking into the LFO display opens the same **shape editor** used by
[drawable envelopes](/envelopes/drawable/):

- **Click** to add a breakpoint, **drag** to reposition it.
- **Drag the curve between points** to bend the segment: the handle is symmetric, easing
  the segment in or out. It adjusts curve tension across the full range from convex to
  concave; it is not a free midpoint pull.
- **Right-click a segment** to switch between Curve, Step, and Spline interpolation.
  Step mode turns the segment into a held level that jumps at the next point: this is how
  you turn an LFO into a simple step sequencer without leaving the LFO tab.
- **Value snapping** quantizes the output to a grid of discrete levels, giving a stepped
  staircase output. You can apply this to the whole shape or per individual segment, so part
  of the LFO cycle can staircase while the rest remains smooth.
- **Time grid** snaps breakpoint positions to equal divisions while you edit, making it
  easy to place points on a musical grid. This affects editing only; it does not quantize
  the LFO's output timing during playback.

Drawn shapes are shared across all voices and take effect immediately on any held note.
They save with the preset.

## A/B morph

Every LFO holds **two shapes, A and B**, and a **Morph** knob that crossfades between
them. At zero, the LFO plays shape A exactly. At one, it plays shape B. Anywhere between
is a blend of both.

This means you can draw a gentle sine as shape A and a sharp saw as shape B, then automate
or modulate the Morph knob to sweep the LFO's character in real time: routing velocity
or a macro to Morph, for instance, so harder playing sharpens the LFO shape.

The A/B editor shows both shapes at once: the active one bright with its handles, the
inactive one faintly behind it. Switch between them with the A / B toggle in the editor.

## Rate and tempo sync

The **Rate** knob sets how fast the LFO cycles. In free mode it is measured in Hz;
higher values are faster. With **Sync** turned on, the knob snaps to tempo divisions
(whole bars, half notes, quarter notes, eighths, sixteenths, and their dotted and triplet
variants). BPM comes from the host when a DAW is running, or from Aconite's own Tempo
control in standalone mode.

Each LFO has its own Sync toggle, so you can have one LFO running free at 0.3 Hz and
another locked to a dotted eighth note at the same time.

## Per-LFO options

Beyond rate and shape, each LFO has a set of playback controls:

- **Phase**: offsets the LFO's starting position in the cycle. Use it to stagger two
  LFOs running at the same rate so they do not move in lockstep.
- **Bipolar / Unipolar**: bipolar output swings from −1 to +1 (the default, giving equal
  movement above and below the destination's center). Unipolar output swings from 0 to +1,
  only ever adding to the destination.
- **Retrig / Free**: a per-LFO choice (on all six voice LFOs) for how the phase behaves
  across notes. In **Retrig** the LFO resets to its phase offset each time a note triggers,
  so the shape always starts at the same point on note-on, useful for plucks, stabs, or
  anything where predictable LFO position matters (this makes the LFO behave more like a
  very slow envelope). In **Free** the phase runs continuously across notes, the way the
  two bus LFOs always do, so held or overlapping notes catch the LFO wherever it happens
  to be.
- **One-shot**: the LFO traverses the shape once and then holds at the final value.
  Combine with retrigger for a slow, one-time sweep on each note.
- **Slew**: smooths the LFO output, rounding off sharp transitions. Useful when Step
  segments produce clicks or when you want a lazy lag on a fast shape.

## Routing LFOs

LFOs have no dedicated destination knobs. To route an LFO, either:

1. Right-click the knob you want to modulate and choose **Add modulation → LFO 1** (or
   whichever LFO you want).
2. Open the [modulation matrix](/modulation/matrix/), set the Source column
   to the LFO, and choose a destination.

Common LFO destinations include filter cutoff (a sweep), oscillator pitch (vibrato),
pan (auto-pan), waveshaper drive (tremolo-style grit), and LFO rates (modulating one
LFO's speed with another for evolving complexity). Any destination in the
[matrix](/modulation/matrix/) is available.

## Bus LFOs

Two additional **Bus LFOs** live in the last two tabs of the Modulators panel. They run
once for the whole mix (not per voice) and route exclusively to bus and master
destinations: reverb size, delay feedback, chorus depth, EQ, and master gain. They are
the right tool for mix-level movement that would be too expensive or unstable if it ran
separately inside every voice.

The bus LFOs share all the same shape, rate, and playback controls as the voice LFOs:
waveform presets, A/B morph, tempo sync, phase, bipolar/unipolar, one-shot, slew, and
retrigger. They are full LFOs routed to a different scope, not stripped-down versions.

See the [modulation matrix](/modulation/matrix/) for the full list of bus
destinations.
