---
title: Editor controls & shortcuts
description: "The full reference for the note editor: the toolbar, mouse gestures, right-click menus, keyboard shortcuts, value lanes, note states, and Roll looks."
---

The single reference for every control in the [note editor](/performance/note-editor/):
the toolbar, mouse gestures, right-click menus, the keyboard-shortcut vocabulary, the
value lanes, note states, and the Roll looks. The editing model follows a DAW MIDI
editor, so if you have used one, most of this is already in your fingers.

Modifiers are written for macOS. On Windows use **Ctrl** where **Cmd** is shown.

## The toolbar

Left to right along the top:

| Control | What it does |
|---|---|
| **▶ / ■** | Play / Stop. A real transport in the plugin: it drives Seq On/Off and the playhead follows the actual engine (pattern phase in Grid, clip position in Free), locking to the DAW when host-sync is on. |
| **Free / Grid** | The [mode toggle](/performance/note-editor/#grid-vs-free-one-editor-two-engines). Free = the free-timeline piano roll; Grid = the step sequencer (snap forced on, step-cell shading, Grid-only lanes). |
| **Fold** | Fold to Notes: hide key tracks with no notes (**F**). |
| **Scale** | Fold to Scale: collapse off-scale rows to slivers; enabled only when a scale is active (**G**). |
| **Highlight Scale** | Tint in-scale rows and dim off-scale rows; the root gets a prominent highlight (**K**). Visual only. |
| **Root** (C … B) | The scale root. |
| **Scale** (Chromatic, Major, …) | The scale for Fold-to-Scale, Highlight, and interval labels. |
| **Names / Intervals** | Gutter and label mode: note names (C4) or scale-degree intervals (1, b3, 5). |
| **Note-class chips** (C, C#, … B) | Click a pitch class to select every note of that class. |
| **Invert** | Invert the current note selection. |
| **Select** | Select all notes. |
| **Transform** | The one-shot transforms menu (Reverse, Legato, Invert, Humanize, Fit to Scale, …). |
| **Time signature** (4/4, 3/4, 6/8, 5/4, 7/8, …) | The per-clip meter: sets bar length, ruler numbering, and the bar and beat grid. Default 4/4. |
| **Len / Steps** | The clip length. Free shows **Len** in bars (1–64, default 16); Grid shows **Steps**, a count of the current grid division (1–512). Drag, right-click to type, double-click to reset. |
| **Snap** + division (8 Bars … 1/32, triplet, dotted) | Grid-snap toggle and division (snap is implicit in Grid mode). |
| **Roll look** (Aconite / Clarity / Daylight / Match App) | The editor's visual theme (see [Roll looks](#roll-looks)). |
| **↻ Loop** | Toggle a loop region; drag the brace in the ruler to move or resize it. |
| **Show Lane** | Add or remove expression lanes below the grid. |

## Note editing (mouse)

- **Draw Mode (B)**: click-drag on the grid to paint notes (length follows the snap
  division; drag for a custom length). Toggle with the **B** key.
- **Select (default tool)**: click a note to select it; **Shift** or **Cmd-click**
  adds or removes; drag on empty grid rubber-bands a 2D marquee over time and pitch.
- **Move / resize**: drag a note body to move it; drag its **right edge** to resize.
- **Split (hold E)**: hold **E** for scissors, then click or drag to split every note
  the cut line crosses. Right-click while E is held glues the note to its adjacent
  same-pitch neighbours.
- **Right-click a note** opens the note menu; **right-click empty grid** opens the
  grid menu (see below).
- **Hover a key** in the left gutter to reveal that row's note name.

## Right-click menus

- **On a note**: Cut / Copy / Duplicate / Delete · Split here / Split into (2–8) /
  Chop on Grid / Glue / Join · Quantize · Grid submenu · (Grid mode only: Accent /
  Slide / Tie). Right-clicking an unselected note selects it first. Glue merges a
  seam pair; Join merges all selected same-pitch notes into one.
- **On empty grid**: Select All · Paste (at the clicked beat) · Quantize (all notes)
  · Grid submenu.
- **Grid submenu** (on both): divisions grouped as Bars (8/4/2/1), Straight
  (1/2 … 1/32), Triplet (1/8T, 1/16T), and Dotted (1/4., 1/8.); a tick marks the
  current one; Widen / Narrow Grid steppers; a Snap toggle; and Off (explicit
  no-grid).
- **Piano gutter (right-click)**: an Accidentals menu (Auto by circle-of-fifths,
  Sharps, Flats, Sharps & Flats) plus MIDI Note Number. With a scale active the
  choice applies only to off-scale notes; in-scale notes keep their proper
  accidentals.

### Quantize

Quantize pulls notes toward the grid. **Quantize** applies the current settings;
**Quantize Settings…** opens a dialog with **Quantize To** (Current Grid or a
specific division), **Adjust Note** Start / End (either or both), and a continuous
**Amount** (strength, 0 = no move, 100 = hard snap). It acts on the selection, or all
notes if none are selected. Shortcuts: **Cmd+U** applies the last settings,
**Cmd+Shift+U** opens the dialog. Alt-drag temporarily disables snap while moving a
note.

## Keyboard shortcuts

### Editing

| Key | Action |
|---|---|
| **Cmd+Z** / **Cmd+Shift+Z**, **Cmd+Y** | Undo / redo |
| **Cmd+A** | Select all notes |
| **Cmd+C / Cmd+X / Cmd+V** | Copy / cut / paste (paste at the playhead, else beat 0) |
| **Cmd+D** | Duplicate the selection (shifted right by its length) |
| **Delete / Backspace** | Delete selected notes |
| **Cmd+G** / **Cmd+Shift+G** | Group (Play All) / Group (Play One) probability groups; Cmd+Shift+G also ungroups |
| **Cmd+E** | Chop on Grid: chop selected notes at grid lines; with nothing selected, split at the insert marker / playhead |
| **Cmd+↑ / Cmd+↓** | After a chop, dial the equal part count ±1; **Shift+Cmd+↑/↓** by a power of two |
| **Cmd+J** | Join selected same-pitch notes into one (spans earliest to latest) |
| **Cmd+U** / **Cmd+Shift+U** | Quantize with last settings / open the Quantize Settings dialog |
| **E** (hold) | Scissors: click or drag to split |
| **E + Opt** (hold) | Hover a chopped note and drag up/down to re-dial the part count (**Shift** = power of two) |
| **B** | Toggle Draw Mode |
| **0** | Toggle mute on the selection |
| **↑ / ↓** | Transpose ±1 semitone; **Shift** = ±1 octave |
| **← / →** | Move by the grid division (1 beat if snap off); **Shift** = resize length; **Cmd/Alt** = fine (no-snap); **Cmd/Alt+Shift** = fine length |
| **Esc** | Deselect notes and clear the time-range selection |

### Scale and fold

| Key | Action |
|---|---|
| **F** | Fold to Notes |
| **G** | Fold to Scale (when a scale is active) |
| **K** | Highlight Scale |

### Navigation and zoom

These are pure-view gestures and never create an undo step.

| Key | Action |
|---|---|
| **Z** / **X** | Zoom into the selection / zoom out to the full clip |
| **+ / −** (and =, _) | Zoom time around the selection |
| **PageUp / PageDown** | Scroll one octave; **Shift** = one key track (row) |

### Mouse wheel

| Gesture | Action |
|---|---|
| Wheel | Scroll pitch (vertical) |
| **Shift** + wheel | Scroll time (horizontal) |
| **Cmd/Ctrl** + wheel | Zoom time, cursor-anchored |
| **Alt** + wheel | Over the roll: key-track (pitch) zoom; over a lane: resize that lane |

### Ruler and gutter drags

- **Time ruler**: vertical drag zooms time; horizontal drag scrolls time;
  double-click zooms to the selection (or clears the loop region if one is active).
- **Octave ruler / keyboard gutter**: vertical drag is a key-track (pitch) zoom, with
  a magnifier cursor.

## Value lanes

Each note carries per-note expression, edited in stacked lanes below the grid. Drag a
stem to set a value; **double-click a stem resets it** to default; **right-click a
value box** for type-in; **double-click a value box** to reset. Resize a lane by
dragging its header edge (or Alt+wheel over it), swap its editor by right-clicking the
lane header, and show or hide lanes from **Show Lane**. One lane always stays visible.

Shared by Grid and Free mode:

- **Velocity**: per-note velocity, with Randomize / Ramp / Deviation tools in the lane
  header.
- **Release Velocity**: opt-in; each note's note-off velocity.
- **Chance**: per-note probability, plus **Play All / Play One / Ungroup** probability
  groups.

Grid mode only:

- **Ratchet / Conditional / Nudge**: per-note retrigger count (1–8), a conditional
  trigger, and a bipolar micro-timing nudge. Nudge scrubs by vertical drag; Ratchet
  and Conditional are click-to-menu (Ratchet: 1 (off) / 2–8 hits; Conditional: None /
  1:2 / PRE / 1ST / fills / neighbour …), applied to the selection.
- **Accent / Slide / Tie**: boolean toggle lanes; click a cell to flip the note's flag
  across the whole pattern (the same flags live in the note right-click menu). These
  are compact single-row lanes. Accent and Slide draw a filled cell when on; **Tie**
  draws a slur arc to the next note when on.

## Note states

- **Active**: solid, filled block; brightness follows velocity; hue is the pitch
  spectrum (Grid) or the look's accent (Free).
- **Muted** (toggle with **0**): dimmed fill, dashed border, and a mute glyph, a
  deliberate "silenced" state distinct from an active note.
- **Off-scale** (with a scale active): desaturated and outlined so in-scale notes
  carry the colour.

## Roll looks

A dedicated theme system built for the editor surface. The note editor is where you do
close, precise work, so its legibility matters more than any other panel — the Roll
looks are purpose-designed for exactly that: each keeps the grid crisp, the notes
readable, and the contrast high, so the roll always reads well no matter which global
app theme you're running. Pick one to lock in that editor-first legibility, or choose
**Match App** to let the roll blend into the rest of your theme instead. Live-switchable
from the toolbar selector, no rebuild:

| Look | Character |
|------|-----------|
| **Aconite Premium** (default) | Deep violet-black canvas, crisp grid, saturated violet notes. |
| **Clarity** | Neutral dark grey, green notes, high-contrast grid. |
| **Daylight** | Light mode: pale canvas, dark grid, blue notes. |
| **Match App** | Follows the global app theme (the classic behaviour). |

Note colour follows a fixed rule: **Grid mode uses the pitch spectrum** (the step
sequencer's identity), and **Free mode uses a single accent colour** with velocity as
brightness. Match App keeps the spectrum in both modes.
