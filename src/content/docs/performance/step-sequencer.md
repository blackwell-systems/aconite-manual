---
title: Step sequencer
description: The degree-relative in-key roll, per-step fields, per-note value lanes, curve lanes, and the piano-roll editor.
---

![The step sequencer: note roll, value lanes, and curve lane](../../../assets/screenshots/panel-step-seq.png)

The **step sequencer** is a degree-relative, in-key note roll. Each step carries
its own fields (octave, accent, velocity, slide, tie, ratchet, nudge, chance, and
conditional triggers) alongside per-note value lanes, four drawable curve lanes,
and a piano-roll editor. It plays notes and, like the arp, doubles as a modulation
source.

Select **Step Seq** from the mode menu and the panel grows to show the pattern editor. The sequencer
is a mode of the arpeggiator: it inherits the arp's clock, rate, gate, Latch, the scale foundation
(Root, Scale, Snap, and diatonic Transpose), and the rhythm layer (Swing, Probability, Euclidean
fill). See the [arpeggiator](/aconite-manual/performance/arpeggiator/) for that shared machinery.

## How the pitch grid works

The sequencer is not a piano roll; it is a **degree grid**. Each cell in a step column
represents a scale degree relative to the note you hold. Degree 1 is the root, degree 2 is a step
up the scale, and so on. Because the pitch is always relative, the whole pattern transposes and
stays in key the moment you change the held root. You literally cannot play a wrong note.

Each step plays a single note or a chord: light one degree cell for a mono line, stack several for
a sequenced chord. Each step in a mono line is the practical case: play the note on that degree.

## Per-step fields

Each step carries a full set of controls:

| Field | What it does |
|-------|-------------|
| **Degrees** | The scale degree(s) this step plays: one note or a stacked chord |
| **Octave** | Register shift (−2 to +2): reach below the root without a taller grid |
| **Accidental** | A one-semitone nudge: the one chromatic escape from the scale, for approach notes |
| **Accent** | Lifts the velocity toward full for the emphasized hits |
| **Velocity** | The step's base loudness before accent |
| **Slide** | Glides into the next step: the 303 legato portamento |
| **Tie** | Holds the previous note through this step as one continuous note |
| **Ratchet** | Retriggers the step 1–8 times across its slot (rolls and stutters) |
| **Nudge** | Per-step micro-timing: shift this step's onset early or late |
| **Chance** | Per-step play probability, multiplying the global Probability |
| **Cond** | A conditional trigger: the step only fires when its condition is met |

A rest advances the clock but plays nothing. **Length** sets how many steps play, up to 16.
**Direction** plays the pattern Forward, Reverse, Ping-Pong, or Random.

Patterns travel with presets, so a bassline you save comes back with the sound.

## Slide and tie: the 303 legato feel

Slide and tie each give the line a different kind of continuity.

A **slide** step glides into the next note instead of retriggering, the classic 303 portamento
bend. For the glide to actually bend the pitch, turn **Glide** up in the
[voicing controls](/aconite-manual/performance/voice-and-play/). Keep Mono on (its default) so
slides collapse to a single legato voice.

A **tie** holds the previous note through the step with no re-attack, turning a run of tied steps
into one sustained note.

For an acid bassline: set Mono on, set Glide, dot a few slide cells, add octave pops and an
accidental for approach notes. The filter does the rest.

## Ratchet roll dynamics

A ratcheted step fires its note evenly across the slot for rolls and stutters. Each hit follows a
**Shape** you choose:

- **Flat**: every hit the same level.
- **Up**: crescendo to full.
- **Down**: descrescendo from full.
- **Up-Down**: swells to a peak and back.
- **Random**: a stable per-loop shuffle that repeats identically each pass.

The roll's mini-blocks in the grid visually match the shape, so what you see matches what plays.

## Value lanes

Beneath the grid, one lane per field gives you quick, focused editing across all steps at once.
Drag horizontally in continuous lanes (Nudge, Velocity, Chance); click flag lanes (Accent, Slide,
Tie) to toggle; tap or scrub stepped lanes (Ratchet, Octave, Accidental).

**Velocity, Accent, and Chance** are *per-note* lanes: if a step holds a chord, these lanes edit
only the currently focused voice (the one you clicked in the grid). Steps that do not contain the
focused voice read blank. The other lanes (Nudge, Slide, Tie, Ratchet, Octave, Accidental, and
Cond) always edit the whole step.

You can also set a step's velocity directly in the grid: **a note block's height represents its
velocity**: drag the block up or down in the Sequence Screen to raise or lower the level without
leaving the roll.

A **Lanes** menu at the edge of the strip lets you show or hide individual lanes, down to a single
visible lane. The strip re-fits to whatever is visible, so you can clear away lanes you are not
using and keep the view focused.

## Conditional triggers

Each step can carry a **Cond** value that gates it behind a rule. A step has to pass its Cond check,
its own Chance roll, and the global Euclidean fill mask to fire. The condition families are:

- **Loop ratios**: the step plays on a chosen loop out of every few passes (for example: 1:2 plays
  on odd loops, 2:2 on even loops, 1:4 only every fourth time through). The full set runs through
  all :2, :3, and :4 combinations, plus sparse long-cycle ratios: **1:6** surfaces the step once
  every six loops and **1:8** once every eight, useful for a fill note that appears only rarely,
  or for a slow evolution that takes eight bars to complete. Different steps on different ratios
  cause the pattern to rewrite itself over several bars.
- **FILL / !FILL**: the step fires only while the momentary Fill control is held (FILL), or only
  while it is not (!FILL). Dot extra hits with FILL and they wait until you hold Fill; mark the main
  groove !FILL and it drops out the instant you call the fill for breakdowns.
- **PRE / !PRE**: fires only if the previous conditional step did (PRE), or only if it did not
  (!PRE). With PRE, each pass through the pattern yields one of three outcomes: neither step, the
  main step alone, or both together; but never the second step without the first. This creates
  dependent probability: a ghost note that only shadows its parent, so the pair reads as one musical
  gesture that either happens or does not. **!PRE** inverts that relationship: the second step
  becomes a call-and-response that only fills in when the first drops out, swapping between two
  hits rather than stacking them.
- **1ST / !1ST**: fires on the first pass only (1ST), or on every pass but the first (!1ST). Use
  it for a pickup that never repeats, or an answer that only arrives after the pattern loops.

Stacked with Chance and Euclidean fill, conditional triggers turn a static grid into an evolving,
generative pattern that keeps surprising you.

## The scale editor

The Keys scale row includes a per-degree toggle for each scale degree. Click a degree to turn it
off; the scale switches to **Custom** and that degree's row disappears from the piano roll,
removing those pitches from the pattern's vocabulary. Use it to sculpt a scale that only contains
the degrees you want, from a pentatonic subset right down to a two-note drone grid. Turning a
degree back on restores its row and brings it back into Custom mode with the remaining degrees
still set.

## Per-note focus: editing a voice in a chord

Click any note block in the Sequence Screen to **focus** that voice for editing. When a voice is
focused, its whole row washes with a highlight band, its blocks gain an accent ring, and its row
label turns bold, so you can see exactly which degree you are editing. A small **"editing:
&lt;degree&gt;"** indicator on the value-lane strip names the focused voice as an interval relative
to the root.

With a voice focused, the **Velocity, Accent, and Chance** lanes read and write that voice across
the whole pattern. Steps that hold the focused degree show its values; steps that do not read blank
and ignore edits. This lets you set a louder top note across every chord in the pattern, accent one
inner voice without touching the others, or give a single voice a lower play chance for generative
variation.

Focus is a live editing state and is not saved with the pattern. When no voice is focused, the
per-note lanes default to each step's primary (lowest) voice, which for a mono line is always the
only note, so focus only matters once steps hold chords.

## Euclidean fill

Euclidean fill lays a rhythmic mask over the whole pattern without changing any pitches. Set a cycle
**Length** and a **Density** (number of hits to place inside that cycle) and the engine spaces those
hits as evenly as possible: 3 hits in 8 gives the tresillo, 5 in 8 the cinquillo. Setting the
cycle length differently from the pattern length creates polymeter, so the rhythm accent rolls
through the bar.

## The drawable Curve Lanes

Four **Curve Lanes** sit below the value lanes, one for each of the sequencer's pattern-synced
modulation sources: **Curve 1** through **Curve 4**. Each lane is a curve you draw that plays in
sync with the pattern, and you route each one to any destination through the
[modulation matrix](/aconite-manual/modulation/matrix/).

Draw a filter sweep that tracks your bassline. Draw a pitch-bend shape. Draw an FX-mix ramp. Route
Curve 1 to filter cutoff and your drawn shape drives the filter exactly in step with the sequence,
with none of the timing drift of a free LFO.

Each curve lane offers:

- **Rate**: cycles per pattern (0.25× to 4×), so a curve can run at a different rate than the
  notes for polyrhythmic modulation.
- **Retrigger**: either sweep once across the whole pattern or restart the curve on every step.
- **Quantise out**: snap the output to a set number of levels.
- **Smooth out**: glide the sampled output for portamento-style modulation.
- **Bipolar**: centre the output around zero for −1 to +1 modulation.

The curve editor lets you drag control points, add new ones, delete them with a double-click, and
cycle each segment's interpolation between Curve, Step, and Spline. Drag a segment vertically to
bend its tension: pulling it up or down shapes the curve between its two endpoints without moving
the points themselves. A generator menu offers built-in shapes (Ramp, Triangle, Sine, Pulse,
S-Curve, Random) and transforms (Invert, Reverse, Smooth). A **Bars** toggle paints one bar per
step so the curve lines up visually with the pattern grid; a **Snap** toggle locks edits to the
step grid and to the nearest value level so every point lands cleanly on a beat or a quantised
value. A live sample dot sweeps along the curve as the pattern plays, showing exactly what the
lane is currently outputting.

Clicking the lane's destination header opens the matrix routing for that Curve source, so you wire
the destination without leaving the sequencer view.

:::tip
A good starting trick: draw a slow-rising ramp on Curve 1, route it to filter cutoff, and set Rate
to 0.25×. The filter sweeps open over four full pattern passes, then resets, an automatic build
that you never have to touch.
:::
