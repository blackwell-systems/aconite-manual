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
| Mode | How the Seq walks the held notes. The Scale modes walk one held key up or down the current scale; Grid plays the programmable step lane; Free plays a free-timeline clip. | Up / Down / UpDown / Random / As Played / Scale Up / Scale Down / Scale UpDown / Grid / Free |
| Rate | Step speed. In Free mode this is steps per second; in Sync mode the step locks to a note division. | steps/sec (Free) or note division (Sync) |
| Sync | Free runs at the Rate knob's speed; Sync locks the step to a host-tempo division. | Free / Sync |
| Octaves | Extends the pattern upward by whole octaves. | 1 to 4 |
| Gate | How much of each step the note sounds: short is staccato, full plays each note into the next. | 0 to 100 % |
| Swing | Delays the off-beat steps and shortens the following on-beat for a shuffled feel. | 0 to 100 % |
| Probability | The master per-step play chance, in every mode; a failed roll is a rest. In Grid mode it multiplies each step's own Chance, and the result is then gated by any Conditional trig and the Euclidean fill — so a step sounds only when all of them pass. | 0 to 100 % |

## Scale awareness

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Root | The root note the scale is built from, setting the key centre. | C to B |
| Scale | The key the arp is quantised to. The list runs from Chromatic through the everyday scales into a set of exotic and symmetric scales just before Custom; Custom uses a user-editable 12-note mask. | Chromatic, Major, Minor, the modes, Harmonic Minor, Melodic Minor, Pentatonic (Major and Minor), Blues, Whole Tone, Phrygian Dom (flamenco / Middle-Eastern), Hungarian Min (two augmented seconds), Lydian Dom (bright overtone scale), Hirajoshi (Japanese koto pentatonic), Augmented (six-note symmetric), Dim H-W (half-whole diminished, over a dominant 7♭9), Dim W-H (whole-half diminished), Custom |
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

## Chord lane

The chord lane plays a chord progression under the arp from one held key. All
controls default off or neutral, so a patch sounds unchanged until you turn Chord
on. See [The chord lane](/performance/chord-lane/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Chord | Enables the chord lane: the arp takes its notes from the drawn progression instead of the held keys. Off leaves the arp playing from held keys as usual, and mutes the lane without deleting the chords. | Off / On (default Off) |
| Key Source | Where the progression's key centre comes from. Played follows the lowest held note so the progression transposes as you play; Fixed pins it to a set key. | Played / Fixed (default Played) |
| Fixed Key | The key centre used when Key Source is Fixed. | note (default C3) |
| Voice-Lead | Smooth picks each chord's inversion to minimise pitch movement from the previous chord for a connected progression; As-written keeps root-position voicings. | As-written / Smooth (default Smooth) |
| Chord Velocity | How hard the chord tones play. Held-key uses your played velocity so dynamics carry through; Fixed plays every tone at one set level. In Grid mode the step's own velocity applies. | Held-key / Fixed (default Held-key) |
| Fixed Velocity | The level used for chord tones when Chord Velocity is Fixed. | 0 to 100 % |
| Output | How the chord plays. Arp feeds the tones into the arp/step walk (the rhythm engine); Chord fires the whole chord on each step; Sustained holds the block chord with no arp rhythm. | Arp / Chord / Sustained (default Arp) |
| Chord Rate | How often the progression advances a chord, in steps. | Per Step / 2 / 3 / 4 / 6 / 8 / 16 Steps (default Per Step) |
| Reach | How a drawn Grid degree past the chord's own tones behaves. Extended stacks further thirds (9th, 11th, 13th tensions); Octaves repeats the chord tones up the octaves instead. | Extended / Octaves (default Extended) |
| Loop Steps | How many steps the chord lane runs before it repeats; set different from the pattern length for polymeter. | 1 to 64 (default 16) |

## Step sequencer lane

The **Grid** mode plays a programmable lane, one note per step, with per-step
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
