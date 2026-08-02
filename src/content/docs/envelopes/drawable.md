---
title: Drawable envelopes
description: "Draw mode: hand-drawn multi-segment envelope contours with sustain and loop markers."
---

Every envelope in the [pool](/aconite-manual/envelopes/pool/) can swap its four-knob ADSR
for a hand-drawn contour. Flip any envelope to **Draw mode** and the display becomes a canvas
where you place breakpoints, bend the segments between them, and mark exactly where the
envelope holds while the key is down. The result is a shape the four ADSR knobs could never
describe: a slow S-curve rise into a staircase decay, a multi-peak transient, a smooth ramp
that accelerates at the end.

Draw mode does not replace the envelope; it replaces its shape generator. Velocity, Key
Follow, Cycle, Restart, and routing all work exactly as they do on a standard
[envelope](/aconite-manual/envelopes/pool/).

## Drawing and editing the contour

When Draw mode is active, the display shows your contour as a connected line of **control
points**. Editing is direct:

- **Click an empty area** to add a new point.
- **Drag a point** to reposition it: horizontally to change its timing, vertically to change
  its level.
- **Drag the curve between two points** to bend the segment without moving either endpoint.
  The handle is symmetric; it eases the segment in or out, giving you the full range from
  convex to concave. It adjusts curve tension rather than pulling the midpoint freely to an
  arbitrary position.
- **Right-click a segment** to change its interpolation mode:
  - **Curve**: a tension-warped ramp, the default. One handle controls the whole shape of
    the segment.
  - **Step**: the envelope holds the start level across the segment, then jumps. Useful for
    gates, arpeggio-style triggers, or deliberate staircases.
  - **Spline**: a smooth curve that passes through every surrounding point. Works best for
    gentle, continuous contours where you want no visible corners.
- **Shift-click a point** to set it as the **sustain marker**: the position where the
  envelope pauses and holds while the key is down. Everything to the right of the sustain
  marker is the release.

Two additional controls shape the contour at a broader level:

- **Value quantization**: snaps the envelope output to N evenly spaced levels, producing a
  stepped staircase. You can apply quantization to the whole shape or per segment, so one
  section of the contour can staircase while the rest flows smoothly.
- **Time-grid snapping**: locks breakpoint positions to N equal divisions while you edit.
  This makes it easy to line up points on a musical grid as you draw. The snap affects
  editing only; it does not quantize the envelope's playback in real time.

When nothing is drawn yet and you flip an envelope to Draw mode, it starts from an
ADSR-shaped default so the transition feels natural. You can sculpt from there or replace
it entirely.

## The loop region

You can mark a sub-section of the drawn contour to repeat while the key is held. This
works together with the envelope's **Cycle** mode:

- In **Loop** mode, the entire pre-sustain portion repeats: the classic drawable-LFO
  behavior, a note-triggered periodic shape.
- With a **loop region** set, only that bracketed sub-section repeats, and the envelope
  plays into and out of the loop at its natural edges.

To set the region, use alt-click to place the loop start and alt-shift-click to place the
loop end. A colored bracket marks the active region. To clear it, drag the markers together
or toggle Cycle back to Normal.

A synced loop locks the region's cycle length to a beat division, so the repeating section
lasts exactly one bar, one beat, or any subdivision you choose.

## Cycle and One-shot with drawn contours

The [Cycle modes](/aconite-manual/envelopes/pool/#cycle-mode) from the envelope pool apply
to drawn contours without change:

- **Normal**: plays to the sustain marker, holds, releases on note-off.
- **Loop**: cycles the pre-sustain contour while held, releases on note-off.
- **One-shot**: plays the full contour and release regardless of how long the key is held.

One-shot with a complex drawn shape is a powerful way to fire a precise, multi-stage event
(a filter sweep with a bump in the middle, a volume gesture with a dip) on every note,
regardless of how briefly you played.

## Why drawn envelopes matter

The ADSR model is an excellent default, but it assumes a single arc in each stage. A drawn
contour lets you do things that four knobs cannot:

- A **delay before the attack**: the envelope stays at zero for a moment, then rises.
- A **bump in the decay**: the level rises again mid-way through the fall, adding a second
  transient on a plucked sound.
- **Asymmetric release**: the release starts fast, then slows as it fades, stretching the
  tail without extending the initial drop.
- A **held plateau at a level other than sustain**: useful for envelopes modulating
  destinations that respond to specific voltage ranges.

Any of the six envelopes can be in Draw mode at the same time. The amp envelope might run a
standard Analogue-model ADSR while the filter envelope plays a three-peak shape, and Env 4
fires a one-shot drawn contour to punch a waveshaper on each note.

:::tip
Draw mode and the [LFOs](/aconite-manual/modulation/lfos/) share the same shape engine. If
you draw a shape you want to reuse as a periodic modulator, open an LFO tab; you will
find the same drawing tools there, playing back the same type of contour as a looping wave
rather than a note-gated event.
:::
