---
title: "Arpeggiator and step sequencer"
description: "Lookup reference for the arpeggiator: modes, scale awareness, the interval grid, swing, probability, Euclidean fill, chord and strum, plus every per-step lane in the step sequencer."
---

A terse lookup for the arpeggiator and its programmable step lane. One arp feeds
both scenes. See [Arpeggiator](/performance/arpeggiator/) and
[Step sequencer](/performance/step-sequencer/).

## Arpeggiator

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Mode | How the arp walks the held notes. The Scale modes walk one held key up or down the current scale; Step Seq plays the programmable step lane. | Up / Down / UpDown / Random / As Played / Scale Up / Scale Down / Scale UpDown / Step Seq |
| Rate | Step speed. In Free mode this is steps per second; in Sync mode the step locks to a note division. | steps/sec (Free) or note division (Sync) |
| Sync | Free runs at the Rate knob's speed; Sync locks the step to a host-tempo division. | Free / Sync |
| Octaves | Extends the pattern upward by whole octaves. | 1 to 4 |
| Gate | How much of each step the note sounds: short is staccato, full plays each note into the next. | 0 to 100 % |
| Swing | Delays the off-beat steps and shortens the following on-beat for a shuffled feel. | 0 to 100 % |
| Probability | Per-step chance the step sounds; a failed roll is a rest. | 0 to 100 % |

## Scale awareness

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Root | The root note the scale is built from, setting the key centre. | C to B |
| Scale | The key the arp is quantised to. Custom uses a user-editable 12-note mask. | Chromatic, Major, Minor, the modes, Harmonic Minor, Melodic Minor, Pentatonic (Major and Minor), Blues, Whole Tone, Custom |
| Snap to key | Pulls every emitted note to the nearest note in the scale, forcing out-of-key notes into the key. | Off / On |
| Transpose | Shifts the whole pattern by scale degrees, not semitones, so it stays diatonic and in key. | signed degrees |

## The interval grid

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Interval Unit | How the interval offsets are measured: Semitone offsets are exact (can leave the key); Degree offsets follow the scale, staying diatonic. | Semitone / Degree |
| Interval From | Where the interval set is stacked: From Held builds it on every held note; From Root builds on the lowest note only, so one key gives a transposable voicing. | Held / Root |

## Chord and strum

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Chord | Fires the whole held pool at once on each step (a rhythmic chord stab) instead of walking one note at a time (held modes only). | Off / On |
| Strum Time | Spreads a chord's notes across the step in time (0 is simultaneous): a fraction of the step when Synced, an absolute time when Free. | ms or step fraction |
| Strum Direction | Order the strummed chord fans out in. | Up / Down / Up-Down / As Played / Random |

## Euclidean fill

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Euclidean Length | Length of the Euclidean cycle: the hits are spread evenly across this many steps. | 1 to 16 |
| Euclidean Hits | Number of hits distributed evenly across the cycle length; the rest rest. 0 turns Euclidean off. | 0 to 16 |
| Fill | Momentary control for conditional steps: FILL-conditioned steps play only while this is held, and inverse steps play only while it is off. | Off / On |

## Step sequencer lane

The Step Seq mode plays a programmable lane, one note per step, with per-step
value lanes below.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Length | How many steps of the lane play before it loops back to the first. | 1 to 16 |
| Mono | Plays the lane legato: per-step Slide glides between pitches and Tie sustains across steps. Off retriggers each step separately. | Off / On |
| Ratchet Shape | Per-hit velocity shape for a ratcheted step's roll. | Flat / Up / Down / Up-Down / Random |

### Per-step value lanes

| Lane | What it does | Range / values |
|------|--------------|----------------|
| Nudge | Per-step micro-timing: pulls this step's onset earlier or later than the grid for hand-built swing. | signed |
| Velocity | How hard this step plays; feeds amp level and every velocity-routed modulation. | 0 to 100 % |
| Accent | Lifts this step above the others, an emphasis boost on top of its velocity. | Off / On |
| Slide | Glides the pitch smoothly into the next step instead of retriggering (the classic acid slide). | Off / On |
| Tie | Holds this note through the next step instead of restriking it, joining two steps into one. | Off / On |
| Ratchet | Retriggers this step several times inside its slot for rolls and buzzes (dynamics follow Ratchet Shape). | 1 to 8 |
| Octave | Shifts just this step up or down whole octaves while staying in the pattern. | -2 to +2 oct |
| Accidental | Nudges this step one semitone off the scale, for approach and passing tones. | plus or minus 1 semitone |
| Chance | The percentage chance this step actually fires each pass (multiplies the global chance). | 0 to 100 % |
| Cond | Conditional trig: this step plays only when its condition holds. Layers on top of Chance. | ratio, PRE, 1ST, FILL |
