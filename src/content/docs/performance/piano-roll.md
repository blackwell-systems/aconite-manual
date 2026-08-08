---
title: The piano roll (Free mode)
description: "The free-timeline clip: free start and length, absolute or relative-to-key notes, drawing and editing, the expression lanes, probability groups, transforms, and the loop region."
---

**Free** is the piano-roll mode of the [note editor](/performance/note-editor/): a
free-timeline **clip**. Notes start anywhere, run any length, and overlap freely, so
the roll plays melodies, syncopation, held pads, and overlapping voices the step
grid cannot express. It is the composition and expression complement to the
[step sequencer](/performance/step-sequencer/), and both stay: pick the tool that
fits the part.

Set the Seq mode to **Free** and the editor becomes a piano roll. Within Free mode
the **Snap** toggle does the fine work: snap on lands notes on the grid division for
a quantised feel, snap off gives free placement and free length. See the
[note editor](/performance/note-editor/) for the transport, tabs, length, and Roll
looks that Free shares with Grid, and the
[editor controls](/performance/editor-controls/) page for every gesture and
shortcut.

## The note model

A clip is a list of notes on a looping timeline. Each note carries:

| Field | Meaning |
|-------|---------|
| **Start** | The note's onset on the timeline: free, anywhere, not locked to a grid slot |
| **Length** | How long the note sounds: its own duration, independent of every other note |
| **Pitch** | What note it plays: a fixed MIDI pitch or a scale degree (see below) |
| **Velocity** | The note's level, 0 to 1 |
| **Active** | A mute flag: an inactive note stays in the clip but sounds nothing |

Time is measured in musical ticks, so the clip is tempo-relative: at any BPM the
notes keep their rhythmic positions. The clip has a **length** and **loops**: reach
the end and it wraps back to the start. A note that runs past the loop point is cut
cleanly at the wrap rather than hanging over into the next pass, so a loop never
accumulates stuck notes. Overlapping notes are fine, and any number can sound at
once.

The clip's loop length binds to the editor's **Len** control (the canvas is the
loop). Leave Len at 0 and the clip auto-fits to the last note's end, so a freshly
drawn phrase loops on itself without a separate length step.

## Absolute or relative pitch

Each note is either absolute or relative, chosen per note, and this is the
distinctive move, since almost no free-timeline roll is also relative-to-key:

- **Absolute** (the default): a fixed MIDI pitch, exactly like a normal MIDI clip.
  C4 is always C4, no matter what you hold.
- **Relative-degree**: the note is stored as a scale **degree** plus an octave
  offset, so the whole clip transposes and harmonises to the keys you hold, keeping
  Aconite's play-in-your-key identity. It resolves through the **same Scale / Root
  control the step sequencer and arp use**, so a relative clip note and a Grid degree
  land on the same pitch by construction.

Relative notes follow the **held anchor**: the lowest key you are holding. Move your
hand and the whole relative clip moves with it, in key. With **no key held, relative
notes stay silent** (there is nothing to harmonise to), so a relative clip is a
phrase waiting for you to play a root, while absolute notes always sound regardless.
A note keeps whatever pitch it opened with for its whole length, so moving the anchor
mid-phrase never leaves a note stuck.

## Drawing and editing

The core editing gestures:

- **Draw**: click-drag on empty space creates a note. The click sets the start, the
  drag length sets the duration. With Snap on, drawing floor-snaps the start into
  the cell you clicked, so a note lands where you aim.
- **Resize**: drag a note's left or right edge to change its start or its length.
- **Move**: drag a note body. Horizontal is time, vertical is pitch. A
  multi-selection moves together.
- **Select**: click a note to select it, Shift or Cmd-click to add or remove, or drag
  on empty grid to rubber-band a 2D marquee over time and pitch.
- **Split and glue (hold E)**: hold **E** for scissors. A left-click or drag splits
  every note the cut line crosses (chop); a right-click glues the clicked note to its
  adjacent same-pitch neighbours (join). A themed legend appears while E is held,
  teaching both gestures at once.

Full mouse and keyboard reference is on the
[editor controls](/performance/editor-controls/) page.

## The expression lanes

Below the roll, docked lanes give each note its own expression, time-aligned to the
grid above. Drag a stem to set a note's value; the drag is selection-aware, so
grabbing a selected note scrubs the whole selection together.

- **Velocity**: per-note level. The lane header carries a control strip matching a
  DAW footer: **Randomize** jogs each velocity up or down within a bound, **Ramp**
  distributes velocities linearly from a start value to an end value, and
  **Deviation** sets a persistent per-note velocity range that actually *plays*, so
  each time a note fires the engine picks a velocity inside its range for humanised
  dynamics.
- **Release Velocity** (hidden by default): each note's note-off velocity, which
  rides the note-off as its MIDI release velocity.
- **Chance**: each note's play probability (0 to 100%, default 100%). This is the
  headline evolving-pattern feature and it plays: the engine rolls each note's chance
  every loop, so a note below 100% drops out on some passes and the pattern evolves
  as it repeats.

Show, hide, resize, and swap lanes from the lane header (see
[value lanes](/performance/editor-controls/#value-lanes)); one lane always stays
visible.

## Probability groups (Play All / Play One)

Bind several notes into **one shared roll per loop** so the pattern evolves in whole
units rather than dropping notes one at a time. Select notes, then choose from the
Chance lane:

- **Play All**: the group plays all-or-none each loop. One shared chance decides
  whether the whole chord or phrase sounds this pass, so a variation appears and
  disappears as a unit. Marked with a diamond.
- **Play One**: exactly one of the group's notes fires per loop, chosen at random, so
  successive loops rotate through the members: a generative "pick a note" that keeps
  the part moving. Marked with a triangle.

Author groups from the Chance lane's buttons (Play All, Play One, Ungroup) or with
**Cmd+G** and **Cmd+Shift+G** on the selection. A note is ungrouped until you group
it, so this changes nothing until you reach for it.

## Transforms

A **Transform** menu holds one-shot note transforms, each acting on the selection (or
every note if nothing is selected) as a single undo step:

- **Reverse**: mirror the notes in time within their span.
- **Legato**: stretch each note to the next note's onset.
- **Invert**: flip pitch around the selection's axis.
- **Humanize**: a small random timing nudge.
- **Fit to Scale**: move each note to the nearest in-scale pitch for the current root
  and scale (a no-op on the Chromatic scale).

## Scale-aware roll and the loop region

Two roll-wide views frame your editing:

- **Highlight Scale and Fold**: a Highlight toggle tints in-scale rows and dims
  off-scale ones, and a Fold toggle collapses the roll to a scale-degree view. In
  Fold view an off-scale note gets its own thin, dimmed sliver row at its true pitch
  rather than being clamped onto a neighbour. Both are visual only: the note data
  stays put. To actually move notes into the scale, use **Fit to Scale** in the
  Transform menu. This is the natural editor home for the relative-degree pitch mode.
- **Loop region (Loop)**: the loop-arrow chip at the grid's top-left corner arms a
  movable loop bracket in the ruler. Drag its body to move it, drag an edge to
  resize. The grid outside the region dims and the transport loops just that window,
  so you can work on a subsequence in isolation. Off by default (the whole clip
  loops), mirroring the step sequencer so the two modes feel consistent.

## Pitch labels and note-class selection

The toolbar's second row is a pitch and note-class tool row:

- **Names or Intervals**: switch how pitches are labelled in the gutter and on the
  note blocks, between note names (C4, D#5) and interval labels from the root (1, b3,
  5). Interval labels pair naturally with the relative-degree pitch mode.
- **Note-class buttons (C … B)**: click one to select every note of that pitch class
  across the clip; Shift-click adds another class. When Highlight or Fold is on, the
  in-scale classes light up, so the row doubles as a compact scale indicator. This is
  pure selection: it never changes the notes.
- **Invert / Select**: Invert flips the note selection, and Select selects every
  note. Both feed the transforms and per-note edits with a target set.

Clips travel with the preset, so a melody you build in Free mode comes back with the
sound.

:::tip
For an evolving pad: draw a chord in Free mode, select its notes, and set them to
**Play One**. Each loop now voices a different note of the chord, so a single held
region keeps rotating through the harmony without ever repeating exactly.
:::
