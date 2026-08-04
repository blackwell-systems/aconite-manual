---
title: "Filters and waveshaper"
description: "Lookup reference for the two filters, their routing, the front-end high-pass, saturation and drive controls, and the waveshaper."
---

A terse lookup for every filter control. The per-filter set applies to both
Filter 1 and Filter 2 unless noted. For the full guide see
[The two filters](/filters/the-two-filters/).

## Per-filter controls

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Model | The filter model and circuit character. Each colours and resonates differently. | Ladder / SVF / Bite / Multimode / Cascade / Diode / Acid |
| Cutoff | Corner frequency. | 20 Hz to 20 kHz |
| Resonance | Q and emphasis at cutoff; approaches self-oscillation near maximum. | 0 to 100 % |
| Drive | Input gain into the filter's nonlinearity. | 1 to 10 |
| Mode | Discrete response shape and the home node the Morph slider drifts from. | LP / BP / HP / Notch (varies by model) |
| Morph | Continuously morphs the response between LP, BP, HP and Notch as a signed offset from the selected Mode (centre is on the mode). | signed offset |
| Voicing | Drive character: Clean is a transparent saturation; Analog adds per-stage nonlinearity for a thicker push (enables Depth). | Clean / Analog |
| Depth | How hard the Analog per-stage saturation is driven, clean to thick. Active only under Analog voicing. | 0 to 100 % |
| Env Amt | How much the filter envelope pushes the cutoff. | plus or minus 6 octaves |
| Key Track | How much the cutoff follows the played note, so the filter opens as you play higher. | 0 to 100 % |
| Feedback | Post-filter feedback loop amount ("bark"), adding resonant edge as it is raised. | 0 to 100 % |

## Filter 2 links

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Env Link | When on, Filter 2's envelope amount follows Filter 1 instead of its own knob. | Off / On |
| Key Link | When on, Filter 2's key-track follows Filter 1 instead of its own knob. | Off / On |

## Routing and shared controls

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Routing | How the two filters combine. Single uses one; Serial chains them; Parallel sums them; Ring multiplies; Stereo and Wide split them across the stereo field. | Single / Serial / Parallel / Ring / Stereo / Wide |
| FB Sat | Soft saturation on the feedback edges of both filter loops; bites only when a Feedback loop is engaged (zero is linear). | 0 to 100 % |

## Front-end high-pass

See [Feedback and FB Sat](/filters/feedback/) and [Routing](/filters/routing/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Position | Where the high-pass sits in the chain: Off, Pre (before the filters) or Post (after them). | Off / Pre / Post |
| Freq | High-pass corner frequency. | 20 to 2000 Hz |
| Bite | Resonance at the high-pass corner, adding a bite emphasis just above the rolloff. | 0 to 100 % |
| Slope | Steepness of the high-pass rolloff. | 6 / 12 / 24 dB/oct |

## Waveshaper

Adds harmonics at a configurable point around the filter block. See
[Effect by effect](/effects/effect-by-effect/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Place | Position in the signal path. | Pre-Filter / Post-Filter / Mid-Filter |
| Curve | Transfer-curve character. | None / Soft / Tanh / Hard Clip / Cubic / Sine / Fold / Asym / Draw |
| Drive | How hard the signal hits the curve. | 0 to 100 % |
| Mix | Dry/wet blend. | 0 to 100 % |
| Trim | Input level ahead of the curve. | 0 to 100 % |
| Bias | Asymmetry amount (Asym curve only). | 0 to 100 % |
