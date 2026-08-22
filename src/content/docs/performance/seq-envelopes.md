---
title: The Envelopes tab (per-control automation)
description: "Draw a curve bound to any synth parameter that plays in sync with the pattern: destinations, depth, unipolar and bipolar polarity, linked vs local loop and region, and how it saves."
---

The **Envelopes** tab turns the [note editor](/performance/note-editor/) into a
per-control automation lane. Pick a destination, draw a contour over the pattern
timeline, and that contour modulates the chosen control every time the pattern plays.
It is the same drawing tool as the LFO and curve editor, but instead of feeding a
shared source it is **pre-bound to one destination**, so drawing the shape *is* wiring
the modulation. It works in both Grid and Free mode, and it saves with the preset.

You can add as many as you like (up to 32), each on its own target, each with its own
loop timing and polarity. This is the complement to the shared, user-routed sources in
the [modulation matrix](/modulation/matrix/): there is no matrix row to fill in, you
choose the target here and the curve you draw drives it directly.

## Adding one

1. **Pick a destination.** The **Device → Control** picker is built from the real
   modulation destination table, grouped exactly as the Master Matrix groups its
   destinations: Pitch, Oscillator, Sub-Noise, Filter, Waveshaper, Amp Env, Filter Env,
   Rates, String, Modal, Kick, Additive, Lofi, Macros, Voice, Output. A leading dot
   marks the controls that already carry an envelope. Coverage is the full
   destination table: control-rate parameters (cutoff, resonance, drive, envelope
   times, model params, macros, levels, …) and audio-rate signals (PWM and wavetable
   position, oscillator FM, cutoff CV, pan, pitch) alike.
2. **Draw the shape.** Click-drag on empty space, use the **Generate** menu, or use
   the **Draw Mode** pencil (the **B** key) to paint a value one cell wide. The first
   touch on a fresh target creates its envelope (a flat default, so merely selecting a
   target never sprays a contour). The shape edits like a proper automation lane: bend
   a segment with Alt-drag, type an exact value with right-click → Edit Value, and hold
   Shift for a fine one-axis drag.
3. **Set the depth.** The per-envelope **Depth** box (0 to 100%) scales how far the
   envelope moves its target. Depth 0 is silent; 100% applies the drawn range at the
   destination's full modulation scale.
4. **Choose polarity (Uni / Bi).** **Uni** (default) is unipolar 0 to 100%: the drawn
   value adds onto the target. **Bi** is bipolar: the drawn centre becomes no change,
   with signed swing above and below, for modulate-around-centre targets like pan,
   pitch, and offsets. In Bipolar the plot shows a dashed centre guide and reads signed
   (−100% … +100%), and new points default to the centre.
5. **Remove** deletes the selected target's envelope.

## Drawing shapes

The **Generate** menu seeds a contour:

- **Waveforms**: Sawtooth, Inverse Sawtooth, Triangle, Sine, Square, S-Curve, Random.
- **Ramps and ADSR**: Ramp, Ramp (curved), and an ADSR shape.
- **Transforms**: Invert, Reverse, Smooth, and **Simplify Envelope** (thins a busy
  curve to the fewest breakpoints that still represent it).

The generators are **selection-aware**. **Shift-drag across empty background** to
select a time range (the same span the Notes tab uses, carried across tabs). With a
range selected, a generated shape writes **only into that span**, scaled to it and
leaving the rest untouched; with no range selected it fills the whole envelope.

The envelope draws as a bold filled area up to its value, a smooth top in Curve mode
and a stepped staircase in Steps mode. The notes dim behind the curve for timing
reference, and the expression lanes hide while you edit, returning when you switch back
to Notes.

## Linked, or its own loop

By default an envelope is a **Linked Region**: its shape spans the whole pattern.
Toggle **Linked Region** off to unlink it and give it its own local loop, which
unlocks the rest of the timing controls:

- **Length** (bars) sets a local loop period; the drawn shape **repeats** across the
  timeline. A slow ramp over a few bars is a fade-over-N-bars; a short contour with
  **Loop** on becomes an **envelope-as-LFO**, a hand-shaped, tempo-synced source that
  repeats every N beats.
- **Start / End** bound the active region: the shape tiles only inside that window,
  holding its first value before Start and its last after End.
- **Position** rotates where the shape begins within each period.
- **Skew** warps the phase so the same contour leans early or late without redrawing
  it, turning a plain triangle or ramp into a sharper, sheared shape.
- **Grid** (lit by default) hides the meter grid lines and frees editing from the
  division, so you can set an off-meter loop for polyrhythmic or drifting modulation.

On an unlinked loop the braces gain two drag handles: **Stretch** drags the loop
length live on the ruler, and **Skew** (a diamond on the brace) warps the phase. The
"playing" value dot rides the warped, tiled shape, so what you see on the plot is what
the destination receives.

## How it plays

The envelopes are evaluated at the **pattern phase**, the same clock that drives the
step sequencer and the curve lanes, so they play in lockstep with the pattern. Under a
playing host the pattern phase bar-locks to song position, so the envelopes
**follow host transport** too. When nothing is running they rest at zero.

Each envelope folds onto its destination through the same modulation machinery a
right-click route uses, so it behaves identically to any other modulation on that
control. See the [modulation matrix](/modulation/matrix/) for the shared routing.

## Saved with the preset

The envelope list travels with the plugin state, one entry per envelope (its drawn
shape plus its timing, destination, depth, and polarity). An empty list writes nothing
at all, so a patch with no envelopes is identical to one from before the feature
existed. On load, a restored patch reloads its envelopes and the editor jumps the
picker to the first bound target so the automation is visible.

:::tip
For a tempo-synced wobble that no LFO can match: unlink an envelope to a one-bar loop,
turn Loop on, draw a custom shape (steeper on the way down than the way up, say), and
bind it to filter cutoff. You now have a bespoke LFO you drew by hand, locked to the
bar.
:::
