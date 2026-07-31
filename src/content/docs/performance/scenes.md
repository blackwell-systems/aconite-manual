---
title: Scenes
description: The A/B scene layer — Single, Layer, Split, and Channel modes, per-scene settings, and scene B offsets.
---

A **scene** is a whole second voice pool, so two full patches can play together.
**Scene Mode** decides how they combine — **Single, Layer, Split** (keyboard
divided), or **Channel** (each scene on its own MIDI channel, making Aconite
multitimbral). Each scene carries its own complete voicing and character settings,
so the two can behave entirely differently.

Think of it this way: every preset you load lives in Scene A. Turn scenes on and Scene B is a
complete second instrument — its own oscillators, its own filters, its own envelopes — running
inside the same plugin window.

## What a scene captures

Each scene is a completely independent voice pool. It carries its own:

- Oscillator, filter, and envelope settings.
- Voicing controls — play mode, polyphony cap, note priority, glide.
- Unison stacking and detune.
- Analog character settings — Voice Detune, Drift, Variance, and Transient.
- Scene Pan position.

The arpeggiator, master effects, oversampling Quality, and MIDI routing are shared across both
scenes. When you switch to Scene B to edit it, the arp keeps playing from Scene A's patch.

Scenes are saved and recalled with [presets](/aconite-manual/master/presets/), so a split or layer
you build is completely portable.

## Scene modes

**Scene Mode** sets how the two scenes combine:

### Single

Only Scene A sounds. This is the default — Aconite behaves as a single-patch instrument exactly as
it always has. Scene B is ready but silent.

### Layer

Both scenes play together on every note. The two voices stack — useful for combining a pad in Scene
A with a lead in Scene B, or a sub layer with a bright top end. Each scene has its own Scene Pan, so
you can separate them in the stereo field.

A classic use: set Scene A to a warm, slow-attack pad, Scene B to a plucked lead with short decay.
Playing a chord gives you the instant attack of the lead with the slow bloom of the pad underneath —
one key, two personalities.

### Split

The keyboard is divided between the two scenes at a split point you set. Below the split point Scene
A sounds; above it Scene B sounds. This turns Aconite into a two-zone keyboard instrument — bass in
the left hand from Scene A, chords or melody from the right hand in Scene B.

Adjust the split point by dragging the divider on the on-screen keyboard, or by setting the value
directly. Each scene independently handles its own voicing, glide, and character, so the two zones
can have entirely different playing feels.

### Channel

Each scene listens on its own MIDI channel, making Aconite **multitimbral**. Scene A receives on its
assigned channel; Scene B receives on its own. Your DAW or external controller drives each scene
independently — sequence a bassline on one channel, a pad on another.

This mode is useful for scoring, for live rigs with a MIDI controller that transmits on multiple
channels, or for combining Aconite with a step sequencer lane per scene.

## Scene Pan

In Layer and Split modes, each scene has a **Scene Pan** control that places that scene's output in
the stereo field independently of the other. Pan Scene A left and Scene B right for a split-stereo
layer, or keep both centred and let the oscillator and unison settings do the spreading.

## Switching between scenes

The scene selector in the header shows A and B. Click either to bring that scene's controls into
focus for editing — the panel updates to show that scene's patch. The other scene keeps playing as
you edit.

:::tip
Scenes are the fastest way to build a rich live rig. Load a filter-heavy pad into Scene A, a
percussive pluck into Scene B, set Split mode, and you have an expressive two-hand keyboard
instrument in seconds — no routing, no parallel tracks. Save the preset and the whole setup comes
back exactly as you left it.
:::
