---
title: Scenes
description: "The A/B scene layer: Single, Layer, Split, and Channel modes, per-scene sound, effects, and sequencer, and how to build two fully independent scenes."
---

A **scene** is a whole second instrument, so two completely different patches can play together.
**Scene Mode** decides how they combine: **Single, Layer, Split** (keyboard
divided), or **Channel** (each scene on its own MIDI channel, making Aconite
multitimbral). Each scene carries its own complete voicing, character, **effects, and sequencer**
settings, so the two can behave — and sound — entirely differently.

Think of it this way: every preset you load lives in Scene A. Turn scenes on and Scene B is a
complete second instrument (its own oscillators, its own filters, its own envelopes, its own **FX
rack**, and — if you choose — its own **sequence**) running inside the same plugin window.

## What a scene captures

Each scene is a completely independent instrument. It carries its own:

- Oscillator, filter, and envelope settings.
- Voicing controls: play mode, polyphony cap, note priority, glide.
- Unison stacking and detune.
- Analog character settings: Voice Detune, Drift, Variance, and Transient.
- Scene Pan position.
- **Its own full effects rack** — reverb, delay, chorus, distortion, and the rest. Scene A can be dry
  while Scene B swims in a long modulated delay; each scene runs its own effects before the two are
  mixed together.
- **Its own sequencer, arpeggiator, chord lane, and probability filter** — when you set
  **Sequencer: Per-Scene** (see below).

What stays **shared** across both scenes is only the master section — the master gain, the brickwall
limiter, and the sympathetic-string / grand-air resonance — which processes the combined mix, plus
oversampling Quality, MPE, and MIDI routing (applied before the scenes split). This keeps the overall
mix coherent while still letting each scene be its own instrument.

Scenes are saved and recalled with [presets](/master/presets/), so a split or layer
you build — including both effects racks and both sequences — is completely portable.

## Shared vs Per-Scene sequencer

By default the sequencer, arpeggiator, chord lane, and probability filter are **Shared**: one engine
drives both scenes, so a pattern you build plays through Scene A and Scene B alike. This is the classic
behaviour and the default.

Set **SEQ: Per-Scene** (in the Voice panel) and Scene B gets its **own** sequence: its own arp, clip
notes, chord lane, and probability curve, edited independently of Scene A. A small chip by the sequencer
header tells you what you are editing — **Shared** (one sequence for both) or **Scene B** (Scene B's own
sequence) — so it is never ambiguous.

## Scene modes

**Scene Mode** sets how the two scenes combine:

### Single

Only Scene A sounds. This is the default; Aconite behaves as a single-patch instrument exactly as
it always has. Scene B is ready but silent.

### Layer

Both scenes play together on every note. The two voices stack, useful for combining a pad in Scene
A with a lead in Scene B, or a sub layer with a bright top end. Each scene has its own Scene Pan, so
you can separate them in the stereo field.

A classic use: set Scene A to a warm, slow-attack pad, Scene B to a plucked lead with short decay.
Playing a chord gives you the instant attack of the lead with the slow bloom of the pad underneath:
one key, two personalities.

### Split

The keyboard is divided between the two scenes at a split point you set. Below the split point Scene
A sounds; above it Scene B sounds. This turns Aconite into a two-zone keyboard instrument: bass in
the left hand from Scene A, chords or melody from the right hand in Scene B.

Adjust the split point by dragging the divider on the on-screen keyboard, or by setting the value
directly. Each scene independently handles its own voicing, glide, and character, so the two zones
can have entirely different playing feels.

### Channel

Each scene listens on its own MIDI channel, making Aconite **multitimbral**. Scene A receives on its
assigned channel; Scene B receives on its own. Your DAW or external controller drives each scene
independently: sequence a bassline on one channel, a pad on another.

This mode is useful for scoring, for live rigs with a MIDI controller that transmits on multiple
channels, or for combining Aconite with a step sequencer lane per scene.

## Scene Pan

In Layer and Split modes, each scene has a **Scene Pan** control that places that scene's output in
the stereo field independently of the other. Pan Scene A left and Scene B right for a split-stereo
layer, or keep both centred and let the oscillator and unison settings do the spreading.

## Switching between scenes

The **Edit: Scene A / B** selector in the header brings that scene's controls into focus for editing;
the panels update to show that scene's patch. This now re-points **everything** that is per-scene — the
oscillator / filter / envelope / modulation panels, **the effects rack**, and (with **Per-Scene**) **the
Keys / piano-roll sequencer** — so switching to Scene B lets you edit its FX and its sequence in place.
The other scene keeps playing as you edit.

Under **Shared** the sequencer stays on the one shared pattern even while you edit Scene B's sound; only
under **Per-Scene** does the Keys editor follow to Scene B's own sequence (the header chip confirms
which you are editing).

## How to: two completely independent scenes

To build two fully independent instruments in one patch — different sound, different effects, different
sequence:

1. Set **Scene Mode** to **Layer** (both stack on every note) or **Split** (a two-zone keyboard).
2. Click **Edit: Scene B** in the header and dial a different patch — its own oscillators, filter, and
   envelopes.
3. With Scene B still selected, open the **Effects** rack and give Scene B its own effects (say, Scene A
   dry with a short plate, Scene B a long modulated delay and shimmer reverb).
4. In the **Voice** panel, set **SEQ: Per-Scene**. The header chip now reads **Scene B**.
5. Still editing Scene B, open the **Keys / piano-roll** editor and author a different arp, clip, or
   chord progression for Scene B.
6. Play. Both scenes sound together, each with its own tone, its own effects, and its own sequence.
   **Save** it as a preset and the whole two-scene setup recalls exactly.

:::tip
Scenes are the fastest way to build a rich live rig. Load a filter-heavy pad into Scene A, a
percussive pluck into Scene B, set Split mode, and you have an expressive two-hand keyboard
instrument in seconds: no routing, no parallel tracks. Save the preset and the whole setup comes
back exactly as you left it.
:::
