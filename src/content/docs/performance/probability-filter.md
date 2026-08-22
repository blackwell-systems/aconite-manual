---
title: The probability filter
description: "Draw a filter-shaped curve over the keyboard that decides how often notes play by register: thin or mask the arp, chord lane, and clip by pitch, and sweep the cutoff for hands-free evolving density."
---

The **probability filter** is a filter response drawn over the keyboard that
decides how often a note plays depending on *where* it sits in the register.
Think of the keys running left to right and a filter curve laid over them: where
the curve is high, notes in that register play; where it dips, they thin out or
drop. It shapes the notes the [arpeggiator](/performance/arpeggiator/),
[chord lane](/performance/chord-lane/), and [clip](/performance/piano-roll/)
produce, so a busy pattern can breathe, sparkle only up top, or dissolve and
re-form by register over time.

It is a **second dimension to the probability engine**. The
[step sequencer's](/performance/step-sequencer/) probability gates a note *in
time* (this step has a 70% chance of sounding). The probability filter gates a
note *in pitch* (a note in this register has a 70% chance of sounding). Use them
together and the pattern thins along two axes at once.

The probability filter starts **off and at zero depth**, so an existing patch
sounds exactly as before. It does nothing until you turn it up.

:::note
**Part of the probability family.** The probability filter is one of several ways Aconite makes notes probabilistic. The
[**Probability** modulation source](/modulation/matrix/#sources) gates any destination (a
level, a filter sweep, an FX send) by a per-note coin flip; the mixer's
[**per-source odds**](/sources/mixer/#per-source-probability-the-odds-chip) set how often each
oscillator, the sub, and noise sound; and the [step sequencer's](/performance/step-sequencer/)
per-step probability gates notes in time. They all share the same "roll the dice each note"
character and stack freely.
:::

## What the curve does

You choose one of four filter shapes, and the curve's **height at each key** is
how likely a note in that register is to play:

- **Low-pass (LP)** — keeps the low end and thins the top. The bass and mids come
  through; the higher you go, the sparser the notes.
- **High-pass (HP)** — the reverse: keeps the top and thins the bottom, so the
  low mud clears and the sparkle survives.
- **Band-pass (BP)** — favours a band around the cutoff and thins everything
  above and below it, so the pattern collapses toward one register.
- **Notch** — scoops a band *out* and keeps the rest, so a chosen register goes
  quiet while the extremes keep playing.

Where the curve is at full height, every note in that register plays; where it
falls away, notes drop out according to the **Target** you pick.

## The two behaviours: Target

**Target** decides *how* the curve thins notes: stochastically, or as a hard
gate.

- **Probability** — the curve's height becomes each note's chance of playing, so
  the filter **thins notes randomly**. A note at 60% height plays roughly six
  times in ten. The pattern breathes and evolves: no two passes are quite the
  same, and density fades smoothly across the register instead of cutting off at
  a hard line. *Use it for* organic, ever-shifting textures.
- **Mask** — the curve becomes a **hard gate**: above the line a register is
  cleanly present, below it, cleanly silent. No randomness, so whole registers
  switch in and out as a block. *Use it for* deliberate register edits, for
  example "mute the top octave of the arp for four bars" or "drop the bass out of
  the clip on the bridge."

Probability is the performance/generative behaviour; Mask is the surgical one.

## The three axes

**Axis** decides *what the filter acts on*. Two axes are spatial — the same curve
read against a different ruler: fixed keyboard pitch, or the pattern's own span.
The third works by chord-tone role instead, and swaps the curve for a set of
per-degree faders. This is the difference between a filter that stays put, one that
follows your playing, and one that thinks in harmony.

- **Register** — the curve sits over the **actual keyboard**, at absolute pitch.
  Cutoff is a real note. The filter stays where you drew it no matter what you
  play, so it behaves like a fixed zone on the keys: everything below C4 plays,
  everything above thins. *Use it for* a fixed "sparkle only up top" or "keep the
  bass solid" zone.
- **Range** — the curve is measured **relative to the pattern's own span**, from
  its lowest sounding note to its highest. Cutoff is a percentage of that range,
  so the filter **tracks your playing**: transpose up an octave, or play a wider
  voicing, and the curve stretches to follow. The same "thin the top third"
  setting works in any key. *Use it for* a filter that moves with the music.
- **Function** — a different kind of axis, and the most musical. Harmonic role is a
  *category*, not a place on the keyboard, so Function drops the filter curve
  altogether and gives you a **mixing board for the harmony**: one fader per chord
  degree — **Root, 3rd, 5th, 7th, 9th, 11th, and 13th** — each set from 0 to 100%.
  A degree at 100% always plays; pull it down and notes in that harmonic role start
  to drop out. Switching the axis to Function **swaps the curve view for these seven
  weight bars** (the shape, Cutoff, and Slope controls disappear; only Depth and the
  Target stay), and it works hand in hand with the
  [chord lane](/performance/chord-lane/). *Use it for* harmonic control: keep the
  chord solid while its upper tensions flicker in and out — thin the extensions,
  then let Depth and Probability bloom them back in.

## Cutoff, Slope, and Depth

Three knobs shape the curve:

- **Cutoff** — where the corner sits (for LP/HP) or where the band is centred
  (for BP/Notch). In **Register** axis this is a pitch on the keyboard; in **Range**
  it is a position within the pattern's span. Sweeping Cutoff slides the whole
  response up or down the register. (Cutoff, along with the shape and Slope, does not
  apply on the **Function** axis, which uses the per-degree faders instead.)
- **Slope** — how sharply the curve falls off at the corner. A gentle slope fades
  density gradually across several octaves; a steep slope makes a near-hard edge
  between "plays" and "drops," so under **Mask** it behaves like a clean register
  split.
- **Depth** — how strongly the filter shapes the notes, and the **master
  amount**. At **0 the filter does nothing** (every note plays, the shipping
  default). Turn it up and the dips in the curve bite harder, until at full depth
  the thinned registers drop out entirely. Depth is the one knob to reach for to
  dial the whole effect in or back it off, and it is a
  [modulation destination](#the-headline-sweep-the-cutoff-and-depth-and-slope) too:
  an LFO or envelope on Depth fades the whole filter in and out for evolving
  generative intensity.

## The headline: sweep the cutoff (and depth, and slope)

The filter gives you **three [modulation matrix](/modulation/matrix/)
destinations**, so the whole effect can breathe hands-free:

- **Cutoff** — assign an LFO or envelope and the whole probability response slides
  up and down the register over time. The pattern **dissolves and re-forms by
  register**: with an LP sweeping upward, the low notes fill in first, then the
  mids, then the top, so a held generative pattern grows from a sparse bass into a
  full spread and back down again, all on its own. This is the **probability filter
  sweep**, and it is the reason the whole feature exists: an evolving, breathing
  density that you set up once and let run.
- **Depth** — the **generative-intensity** control. Because Depth is the master
  amount (0 does nothing, up thins harder), an LFO or envelope on it fades the
  whole filter in and out: the note stream **dissolves and re-forms** as the depth
  swells and recedes, a one-knob "how generative right now." An envelope tied to
  note-on lets each new phrase build up from a gate into a full spread; a slow LFO
  breathes the density of the entire pattern.
- **Slope** — modulate it to move the **edge itself**, sweeping between a gentle
  cross-register fade and a near-hard register split under a source.

Any matrix source works. A slow LFO gives you a continuous ebb and flow; an
envelope tied to note-on makes each new phrase build up; the
[envelope follower](/modulation/env-follower/) can drive any of them from your own
playing dynamics.

## Where to find it and how to use it

The probability filter lives with the performance controls, next to the
[arpeggiator](/performance/arpeggiator/) and the keys:

- A **Prob Filter** toggle in the performance (Keys / arp) strip turns the whole
  filter on and off. This is the master switch: with it off the pattern plays
  untouched.
- A small **button beside the toggle opens the editor window** — the
  curve-over-keyboard display with the shape, Axis, and Target selectors and the
  Cutoff, Slope, and Depth knobs. Draw or dial the response there and watch it
  laid over the keys.
- **Closing the editor window leaves the filter running.** The window is just the
  editor; the toggle in the strip is the on/off. Set the curve, close the window,
  and keep playing.

Everything the filter does is saved with the patch, so a sculpted density travels
with the preset.

## See the filter on the keyboard: the heatmap

The on-screen performance keyboard can shade its keys by the filter's response, so
you can *see* which registers are thinning. Under the header **Options gear →
"Keyboard follows engine"**, turn on **Heatmap**: because the keyboard is the
Register axis, every key is shaded by how likely a note in that register is to
play. A cutoff sweep walks the marked band across the keys, and a disabled or
depth-0 filter marks nothing (every note passes).

The gear's **"Heatmap: Neutral"** item picks the style, and both mark the **same**
keys — the ones the filter is thinning:

- **Neutral** (default) — darkens the filtered (low-probability) keys toward black,
  exactly matching the filter editor's own keybed, so the two read identically.
- **Themed** — tints those same filtered keys with the current theme's accent
  instead of black.

Either way the wash marks what the filter **removes**, never what it passes.
Heatmap composes with **Live Notes** (which lights the notes the generative engine
is currently playing), so you can watch the live pattern play against the
probability landscape it is drawn from. Both are display preferences for the
current session, not part of the patch.

## Try this

**Sparkle only up top (fixed).** Set Axis to **Register**, shape to **Low-pass**,
Target to **Probability**, and put the Cutoff around the middle of the keyboard.
Turn Depth up part way. Now the bass and mids of your arp stay solid while the top
octaves thin to an occasional shimmer: a busy pattern with an airy, uncrowded top.

**Evolving density (the sweep).** Keep the same setup, then assign a slow **LFO**
to the probability-filter **Cutoff** in the [matrix](/modulation/matrix/). Hold a
generative pattern (arp plus [chord lane](/performance/chord-lane/) is ideal) and
let it run: the response slides up and down the register, so the pattern grows
and thins by octave on its own, hands-free, for minutes without repeating.

**Generative intensity (Depth).** For a different flavour, route a slow LFO or a
note-on envelope to the probability-filter **Depth** instead of Cutoff. Now the
whole filter fades in and out: the note stream dissolves toward the shaped curve
and re-forms toward a full spread, so the pattern's *density* breathes as one, a
one-knob "how generative right now."

**Clean register edit (Mask).** For an arrangement move rather than a texture,
switch Target to **Mask** and Slope to steep. Now the curve is a hard split:
drop the Cutoff to mute the bottom octave cleanly, or sweep it to bring registers
in and out as blocks, with no stochastic flicker.

:::tip
The probability filter and the [step sequencer's](/performance/step-sequencer/)
per-step probability stack. Thin *in time* with step probability and *in pitch*
with the filter at once, and a dense pattern breaks up into a genuinely
unpredictable, always-moving texture: the two-dimensional heart of Aconite's
generative engine.
:::
