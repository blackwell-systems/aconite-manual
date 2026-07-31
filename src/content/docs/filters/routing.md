---
title: Routing & configs
description: The six filter routings, the named filter-config presets, and the front-end high-pass.
---

The two filters can be wired six ways — **Single, Serial, Parallel, Ring, Stereo,
and Wide** — and the header's **Filter Config** selector applies curated
combinations of routing plus both models in one click. A positionable **front-end
high-pass** (Off / Pre / Post, with its own Freq, Bite, and Slope) runs
independently of the feedback loops, so you can use both at once.

## The six routings

The **Routing** selector appears in the filter section when Filter 2 is enabled.

**Shared modulation CV.** The LFO, Step Sequencer, and Performer cutoff signals are shared
— when any of those sources sweep cutoff, both filters move together. This keeps the two
filters in a consistent tonal relationship during live sweeps without requiring you to route
anything twice. Per-filter controls like Env Amt and Key Track can be linked to follow
Filter 1 or kept independent on Filter 2.

**Mono vs. stereo.** Four of the six routings — Single, Serial, Parallel, and Ring —
produce a mono voice signal. Only **Stereo** and **Wide** produce a genuinely stereo output
from the voice.

### Single

Filter 2 is bypassed entirely and only Filter 1 processes the signal. Use this as your
starting point — it keeps things simple and focuses the tonal work on one set of controls.

### Serial

The signal passes through Filter 1, then through Filter 2. Each filter removes what the
other doesn't. This is the classic dual-filter configuration for extremely narrow, focused
sounds: Ladder into Acid for a warm low-pass with an acid character on top, or SVF into SVF
for a very steep combined slope from two gentle filters. The combined slope and resonance
behavior can be surprising — listen before committing.

:::tip
In Serial routing, the order matters. Filter 1 is the first stage; what arrives at Filter 2
has already been shaped. A high Resonance on Filter 1 feeds that peak into Filter 2, which
then colors it further. Try swapping the models (not available from the Config selector —
set each filter's model manually) to hear the difference.
:::

**Waveshaper placement in Serial routing.** The drawable waveshaper insert can sit before
Filter 1 (Pre), after Filter 2 (Post), or — uniquely in Serial routing — between the two
filters (Mid). That Mid position lets Filter 1 shape the tone before the waveshaper distorts
it, then sends the result into Filter 2 for a second pass. See
[Effect by effect](/aconite-manual/effects/effect-by-effect/) for the full waveshaper
reference; the placement choice is made on the filter panel.

### Parallel

Both filters process the signal simultaneously and their outputs are summed. This is the
right configuration for layering tonal characters: a low-pass on Filter 1 for body paired
with a band-pass on Filter 2 for presence, or two different models at different Cutoff
positions to create complex, formant-like shapes. Each filter's Resonance peak sits
independently, so you can have two distinct peaks in the frequency spectrum.

### Ring

Filter 1's output is multiplied by Filter 2's output rather than summed. The result is a
ring-modulated texture where only the frequencies present in both filter outputs survive.
This produces metallic, non-harmonic, and dissonant textures that respond dramatically to
Cutoff changes on either filter. Best approached with curiosity: small Cutoff movements
produce large tonal shifts. Useful for percussion, FX, and anything that needs to sound
like it shouldn't exist.

### Stereo

Filter 1 processes the left channel and Filter 2 processes the right — per-voice stereo
from two independent filters. Because each filter has its own Cutoff, Resonance, Drive, and
model, you can place very different tonalities in each ear. A subtle Cutoff offset between
the two creates a slow, filter-panning movement without any modulation routing needed. For
wide pads and atmospheric sounds, this is often the first configuration worth trying.

### Wide

The mono signal is decorrelated into stereo and then both filters process each channel. The
result is wide but more cohesive than Stereo mode — both ears share the same filter
character, but the decorrelation gives width and depth. Good for pads and evolving textures
where you want spread without the tonal contrast that Stereo provides.

## Filter Config presets

The header's **Filter Config** selector applies a curated combination of routing plus both
filter models — and the Resonance and Drive character — to the current scene in a single
click. These are starting points, not finished sounds; Cutoff is deliberately left as the
player's musical choice.

| Config | What it does |
|---|---|
| **Single Ladder LP** | The neutral starting point. One Ladder low-pass, nothing else engaged. |
| **Dual Serial (fat)** | Two filters in series for a thick, stacked character — a common pairing for warmth into focus. |
| **Parallel Stack** | Both filters summed for layered tonality. |
| **Ring Metallic** | Ring routing for non-harmonic, metallic textures. |
| **Stereo Split** | Filter 1 left, Filter 2 right — instant stereo separation. |
| **Wide Pad (SVF)** | Wide routing with SVF for clean, airy stereo spread. |
| **Acid 303** | Acid model wired for the classic TB-303 squelch. |
| **Cascade Scream** | Cascade pushed into its Rough drive character. |
| **Bite Grit** | Bite model for aggressive, self-oscillating leads. |

A config sets topology, both models, and the resonance and drive character. After loading
one, you can still adjust every control — the Config selector is a shortcut, not a lock.

## The front-end high-pass

A separate high-pass filter sits ahead of or behind the main filter block and runs
independently of the feedback loops. You can use it simultaneously with any routing.

**Position** switches between Off, Pre, and Post:

- **Off** — the HPF is bypassed entirely.
- **Pre** — the HPF shapes the signal before it enters the main filter block. Useful for
  removing sub-bass from the oscillator signal before it reaches the Ladder or Diode (where
  it can affect the feedback loop character), or for thinning the source material.
- **Post** — the HPF sits after the main filter block. Use this to clean up rumble that the
  main filter's low Cutoff lets through, or to add a roll-off to an already-filtered sound
  without affecting the main filter's resonance behavior.

**Freq** sets the corner frequency (20 Hz to 2 kHz). **Bite** adds resonance at the corner
— a narrow boost that gives the HPF its own character rather than just a passive roll-off.
On 12 dB/oct and 24 dB/oct slopes, Bite rides the first filter stage; on the 6 dB/oct slope
it is clean with no resonance.

**Slope** selects 6, 12, or 24 dB/oct. Steeper slopes clear out the low end more
aggressively; 6 dB is gentle and transparent.

Both Freq and Bite are modulation matrix destinations — see the
[modulation matrix](/aconite-manual/modulation/matrix/) for routing options. A slow LFO on
HPF Freq with Bite up gives a subtle animated brightness that is easy to overlook but hard
to stop using once you find it.

## Filter 2 link options

When Filter 2 is running independently, its **Env Amt** and **Key Track** each have a
**Link** toggle that ties them back to Filter 1's values. You can link Env Amt (both filters
open with the same envelope shape) while keeping Key Track independent (each filter tracks
the keyboard differently) — or any other combination. The shared LFO, step sequencer, and
Performer Cutoff modulation always sweeps both filters together regardless of Link state.

This link system means you can treat the two filters as a matched pair for envelope response
while giving each its own tonal placement across the keyboard — useful for thick, layered
sounds where you want expressive movement to feel unified even though the two tonal
characters are different.

For modulation routing details, including how to drive each filter's Cutoff, Resonance, and
Morph independently from the matrix, see [Modulation overview](/aconite-manual/modulation/overview/).
