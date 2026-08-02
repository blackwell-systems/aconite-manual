---
title: "Voice, performance, and scenes"
description: "Lookup reference for the voicing and play-mode controls, the analog-character (aliveness) layer, unison, glide, and the scene layering controls."
---

A terse lookup for the voicing, play-mode, and scene controls. See
[Voice and play](/aconite-manual/performance/voice-and-play/) and
[Scenes](/aconite-manual/performance/scenes/).

## Play mode

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Play Mode | Poly plays chords; Duo splits into two independent voices; Mono and Legato are single-voice (Legato only re-triggers envelopes on a gap in playing); Latch holds the last note until the next is played. | Poly / Duo / Mono / Legato / Latch |
| Voices | Maximum simultaneous notes before the oldest is stolen. | 1 to 16 |
| Note Priority | Which note wins when several are held in a mono mode. | Last / Highest / Lowest |
| Glide | Portamento time: how long the pitch slides from the previous note to the new one (zero is an instant jump). | time |
| Glide Mode | Always glides between every note; Fingered glides only when notes overlap, so staccato notes jump. | Always / Fingered |

## Unison

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Unison | How many detuned copies of each voice are stacked (more copies is thicker and wider, at higher CPU). | 1 to 8 |
| Detune | How far the stacked unison copies are spread in pitch, from a tight chorus to a broad detune. | 0 to 100 % |
| Spread | How wide the stacked unison copies are panned across the stereo field. | 0 to 100 % |

## Analog character (aliveness layer)

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Voice Detune | Random per-voice tuning offset that never repeats exactly, loosening the pitch like drifting analog oscillators. | 0 to 100 % |
| Drift | Slow, continuous per-voice pitch wander that models the thermal drift of vintage analog oscillators. | 0 to 100 % |
| Variance | Randomises per-voice component values (filter, envelope, level) so no two notes are identical. | 0 to 100 % |
| Transient | Analog lets each note start from the oscillator's current phase (soft, varying attacks); Reset restarts phase from zero for a consistent, punchy transient. | Analog / Reset |
| Voice Pan | Static per-voice placement in the stereo field. | L to R, centre |

## Scenes

Aconite has two scenes (A and B). The arp feeds both.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Scene Mode | How the two scenes combine: Single uses only A; Layer stacks A and B; Split routes them across a keyboard split; Channel routes them by MIDI channel. | Single / Layer / Split / Channel |
| Split Point | The keyboard note where Split mode divides scenes A (below) and B (at and above). | MIDI note |
| Channel Split | In Channel mode, MIDI channels up to this number play scene A; higher channels play scene B. | 1 to 16 |
| Scene B Coarse | Pitch offset of scene B in semitones, for stacking B a fixed interval from A. | semitones |
| Scene B Level | Output level of scene B relative to A, for balancing a layer or split. | dB |
| Scene Pan | Per-scene stereo placement (Layer and Split only). | L to R, centre |
