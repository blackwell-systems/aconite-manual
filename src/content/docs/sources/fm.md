---
title: FM oscillator (6-operator)
description: "Aconite's 6-operator FM voice in one oscillator slot: the free FM matrix, the per-operator panel with drawable envelopes, the pitch knobs, and sweeping the whole structure with FM Depth."
---

<!-- SCREENSHOT: a labelled shot of the FM oscillator editor (the 6×6 matrix with
its OUT column, the operator panel, and the drawable operator envelope) will be
added here once the panel art is finalised. -->

The **FM** oscillator is a complete **6-operator FM synthesizer** living in a single
oscillator slot. Where classic FM synths hand you a fixed set of "algorithms" to
choose between, Aconite gives you the raw wiring: a **free matrix** where you decide,
continuously, which operators modulate which. Every one of those famous algorithms is
just one particular pattern in that matrix, and you can dial in the ones the DX7 never
had.

This is a different feature from the inter-oscillator [FM & hard
sync](/sources/fm-sync/) routings. That chapter is about wiring Aconite's three main
oscillators into one another. The **FM oscillator** here is a self-contained FM voice
with its own six operators, entirely inside one of those three slots. You can even
run it alongside the others: the FM oscillator on Osc 1, a Saw on Osc 2, a String on
Osc 3.

## Selecting the FM model

Pick **FM** from the oscillator's **WAVE** selector, the same menu you use to choose
Saw, Square, Wavetable, or any other model. Right-click the WAVE knob for the full
type list and choose **FM**, or drag the waveform display to step onto it. The moment
FM is selected, the FM editor takes over the oscillator's model area: the matrix on
the left, the operator panel on the right, and a small live waveform preview across
the top that redraws as you edit.

A fresh FM oscillator is a **single sine carrier** and nothing else, so it starts out
as a plain, clean sine. Everything below is how you build a richer tone up from there.

## What an operator is

FM is built from **operators**. An operator is just a simple oscillator with its own
envelope. What makes it FM is that operators can feed *each other*: when one operator
is pointed at another, it does not add its sound to the mix, it bends the second
operator's pitch thousands of times a second, and that fast pitch-bending is what
grows the bright, metallic, bell-like overtones FM is known for.

An operator plays one of two roles, and it can play both at once:

- A **carrier** is an operator you actually hear. Its level in the **OUT** column
  sets how much it contributes to the final sound.
- A **modulator** is an operator pointed at another one, shaping that operator's tone
  rather than being heard directly.

The whole craft of FM is choosing which operators carry, which modulate, and how
hard, and that is exactly what the matrix lets you draw.

## The FM matrix

The **FM MATRIX** is a **6×6 grid** plus one extra column. Read it as
**"modulator, then destination"**:

- **Rows are modulators.** Row 3 is operator 3 acting as a modulator.
- **Columns are destinations.** Column 5 is operator 5 being modulated.
- A cell where **row 3 meets column 5** sets how hard **operator 3 modulates
  operator 5**. Drag the cell up to send more; drag it down to zero.

Two cells behave specially:

- **The diagonal** (row 1 / column 1, row 2 / column 2, and so on) is each operator's
  **self-feedback**: the operator modulating *itself*. A touch of feedback thickens a
  sine toward a saw and adds brightness and edge; pushed up, it roughens the tone. It
  is the classic FM feedback that turns a lone operator gritty. Empty diagonal cells
  read as a dim **fb** label so you can always find them.
- **The OUT column**, on the far right, is each operator's **carrier level**: how much
  of that operator you hear in the final mix. An operator with any OUT level is a
  carrier; one with none is a pure modulator (or silent).

Because every cell is a free control, you are not locked to a menu of algorithms. Any
classic FM topology (a stack, a pair of parallel operators, a tree) is just a
particular set of cells raised, and you can morph *between* them by dragging cells up
and down. Want two operators modulating one carrier, plus a third stacked on top? Set
those three cells and you have it, no algorithm number required.

:::tip
A quick way to read any matrix: scan the **OUT** column first to see what you hear
(the carriers), then look up each carrier's column to see what is modulating it.
:::

## The operator panel

To the right of the matrix, the **operator panel** edits one operator at a time.

- **The 1–6 selector** at the top chooses which operator you are editing. Click a
  number and the knobs, the waveform, and the drawable envelope below all re-target to
  that operator. Nothing you set on one operator disturbs the others.

Below the selector sit the per-operator controls:

- **Ratio** (coarse) sets the operator's pitch as a multiple of the played note: at
  **1** it tracks the note in unison; at **2** it sits an octave up; at **3**, **4**,
  and higher whole numbers it lands on successive harmonics. Whole-number ratios keep
  the tone musical and in tune; the low **0.5** setting drops an operator an octave
  below for weight.
- **Fine** nudges the ratio between whole numbers. Small amounts add shimmer and
  beating; larger amounts pull the operator inharmonic, toward clangs and bells.
- **Fixed Hz** (the **RATIO / FIXED** toggle) locks an operator to an *absolute*
  frequency instead of tracking the keyboard. A fixed operator sounds at the same
  pitch on every note, which is how you build fixed formants, metallic clicks, and
  attack noises that stay put as you play up and down.
- **Level** sets how strong the operator is. On a carrier this is loudness; on a
  modulator it is how *hard* it bends its destination, i.e. how bright and complex the
  result gets.
- **Waveform** picks the operator's own shape: **Sine**, **Saw**, **Square**, or
  **Triangle**. Sine is the classic FM operator and the most predictable; the others
  pack in extra harmonics before any modulation, for a rawer, brighter starting point.
- **Velocity** sets how much your playing dynamics affect this operator. Turn it up on
  a modulator and playing harder makes the tone brighter and more complex, exactly the
  way a real instrument opens up when you dig in; leave it at zero and the operator
  ignores velocity.

### The per-operator envelope

Under the knobs, each operator has its own **drawable envelope**, the same breakpoint
editor used elsewhere in Aconite. Drag the nodes to shape how that operator rises and
falls over the life of a note. The envelope does double duty: on a **carrier** it
shapes loudness (the usual amp contour); on a **modulator** it shapes the *brightness*
over time, because a modulator that fades away lets the tone start bright and settle
warm.

- The **sustain marker** (the ringed node) is the level the operator holds while you
  keep the key down; the segment after it is the release tail once you let go.
- **LOOP** cycles a region of the envelope for as long as the note is held, for
  rhythmic, pulsing modulation.
- **SYNC** locks that loop to your project tempo. Turn it on and a division picker
  appears (1/4, 1/8 triplet, and so on), so the modulation pulses in time with the
  track. Left off, the loop runs at the envelope's own drawn speed.

Because every operator has an independent envelope, several of them can be evolving at
once, in different directions and at different speeds, which is what gives a good FM
patch its living, moving character rather than a fixed timbre.

## The PITCH knobs

Below the WAVE selector, a small **PITCH** group holds the whole FM voice's tuning:
**Oct**, **Coarse**, and **Fine**. These shift the entire operator structure together,
exactly like the tuning on any other oscillator: **Oct** by octaves, **Coarse** in
semitones for intervals, **Fine** in cents for detuning against another oscillator.
The per-operator **Ratio** and **Fine** controls set each operator relative to this
base, so the PITCH knobs move the sound as a whole while the ratios keep their
relationships intact.

## Sweeping the whole structure: FM Depth

**FM Depth** is available as a destination in the [modulation
matrix](/modulation/matrix/) (listed as **Osc 1 / 2 / 3 FM Depth**, filed under the
oscillator group). It is a single control over the *entire* FM structure at once:
feedback and every matrix edge together.

- At its default it leaves the patch exactly as you built it.
- Turned down to zero, every operator collapses to a pure tone with no sidebands: the
  brightness and clang vanish and you are left with just the carriers.
- Turned up, the whole structure opens: more sidebands, more brightness, more
  complexity across the board.

Route an envelope or LFO to FM Depth and you sweep the FM character in real time
without touching a single cell. A fast envelope on FM Depth gives the signature FM
gesture: a bright, complex attack that mellows into a simpler body as the note
settles.

## A worked example: an FM bell

The fastest way to hear the matrix at work:

1. Set the oscillator's **WAVE** to **FM**.
2. Select **operator 2**. Give it a **high Ratio** (say 3 or higher) so its overtones
   sit well above the fundamental.
3. In the matrix, drag the cell where **row 2 meets column 1** up, so operator 2
   modulates operator 1 (the carrier).
4. On **operator 2's** envelope, draw a **fast attack and a quick decay** so its
   modulation is strong at the start and gone a moment later.

The result is a struck, metallic bell: bright and clangorous on the attack (while
operator 2 is loud) and settling to a purer tone as its envelope decays. Raise
operator 2's Ratio for a more inharmonic bell; add a little **self-feedback** on the
diagonal for extra bite; route **FM Depth** to an envelope to make the whole strike
sweep.

:::note
For the huge library of ready-made FM sounds, Aconite can load classic Yamaha DX7
patches directly. See [DX7 SysEx import](/sources/dx7-import/).
:::
