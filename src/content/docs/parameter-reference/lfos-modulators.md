---
title: "LFOs and modulators"
description: "Lookup reference for the six LFOs, their direct routings, the step sequencer, the performer, and the envelope follower."
---

A terse lookup for every modulator control. Aconite has six drawable LFOs plus
the step sequencer, the performer, and a per-voice envelope follower. See
[Modulators overview](/modulation/overview/) and
[LFOs](/modulation/lfos/).

## LFO controls (LFO 1 to 6)

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Rate | LFO speed. In Free mode this is Hz; in Sync mode it snaps to tempo divisions. | Hz (Free) or note division (Sync) |
| Sync | Free runs at the Rate knob's Hz; Sync locks to the host tempo. | Free / Sync |
| Div | Note division the rate locks to when Sync is on. | note value |
| Shape | LFO base waveform. Morph then bends this shape continuously. | Sine / Triangle / Ramp / Saw / Square |
| Morph | Crossfades the LFO from its base Shape toward a second target waveform (zero is the pure Shape). | 0 to 100 % |

## LFO direct routings

Direct amounts alongside the modulation matrix. LFO 1 and LFO 2 have dedicated
routing knobs; LFO 2 adds a resonance amount.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| To Cutoff | How far this LFO sweeps the filter cutoff (bipolar, around the knob setting). | plus or minus octaves |
| To Pitch | How far this LFO bends oscillator pitch, a vibrato (bipolar, around the current pitch). | plus or minus semitones |
| To Reso | How far LFO 2 drives filter resonance (bipolar, around the knob setting). | bipolar |

## Step sequencer

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Steps | How many steps play before the sequence loops back to the first. | 2 to 8 |
| Rate | Sequencer speed. In Free mode this is Hz; in Sync mode one pass over all steps snaps to a tempo division. | Hz (Free) or note division (Sync) |
| Sync | Free runs at the Rate knob's Hz; Sync locks one pass over all steps to the host tempo. | Free / Sync |
| Direction | Playback order through the steps. | Forward / Reverse / Ping-Pong / Random |
| Glide | Glides the output smoothly between step levels instead of jumping, for a slewed modulation. | Off / On |
| Step level | Per-step output level (one bar per step). | 0 to 100 % |

## Performer

A per-step curve sequencer.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Steps | How many step curves play before the sequence loops back to the first. | 2 to 16 |
| Rate | Performer speed. In Free mode this is Hz; in Sync mode one pass over all step curves snaps to a tempo division. | Hz (Free) or note division (Sync) |
| Sync | Free runs at the Rate knob's Hz; Sync locks one pass over all steps to the host tempo. | Free / Sync |
| XFade | Crossfade between adjacent step curves: zero is a hard switch, higher blends one curve smoothly into the next. | 0 to 95 % |

## Envelope follower

A per-voice modulation source that tracks the pre-filter amplitude (an auto-wah).
See [Envelope follower](/modulation/env-follower/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Attack | How fast the follower rises to track a louder input: shorter catches sharp transients, longer smooths them. | ms |
| Release | How fast the follower falls as the input quietens: shorter tracks tightly, longer sustains the level. | ms |
| Sense | Input drive into the follower: raise it so quieter signals still move the follower fully. | 0 to 100 % |
| Mode | How the follower measures level: Peak reacts to instantaneous peaks (snappier); RMS tracks average loudness (smoother). | Peak / RMS |
