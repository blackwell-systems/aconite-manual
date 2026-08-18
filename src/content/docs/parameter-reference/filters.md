---
title: "Filters and waveshaper"
description: "Lookup reference for the two filters, their routing, the front-end high-pass, saturation and drive controls, and the waveshaper."
---

A terse lookup for every filter control. The set below documents Filter 1; Filter 2
is a fully independent second filter with the same controls under `filter2`-prefixed
parameters, listed separately after. For the full guide see
[The two filters](/filters/the-two-filters/).

## Filter 1 controls

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Model | The filter model and circuit character. Each colours and resonates differently. | Ladder / SVF / Bite / Multimode / Cascade / Diode / Acid |
| Cutoff | Corner frequency. | 20 Hz to 20 kHz |
| Resonance | Q and emphasis at cutoff; approaches self-oscillation near maximum. | 0 to 100 % |
| Drive | Input gain into the filter's nonlinearity. | 1 to 10 |
| Mode | Discrete response shape and the home node the Morph slider drifts from. | LP / BP / HP / Notch (varies by model) |
| Morph | Continuously morphs the response between LP, BP, HP and Notch as a signed offset from the selected Mode (centre is on the mode). | signed offset |
| Filter Character | Drive character (parameter Voicing): Clean is a transparent feedback-only saturation; Analog adds per-stage nonlinearity for a thicker push (enables Depth). Ladder and Diode only. | Clean / Analog |
| Depth | How hard the Analog per-stage saturation is driven, clean to thick. Active only under the Analog Filter Character. | 0 to 100 % (default 40 %) |
| Env Amt | How much the filter envelope pushes the cutoff. | plus or minus 6 octaves |
| Key Track | How much the cutoff follows the played note, so the filter opens as you play higher. | 0 to 100 % |
| Feedback | Post-filter feedback loop amount ("bark"), adding resonant edge as it is raised. | 0 to 100 % |

## Filter 2 controls

Filter 2 is a second, fully independent filter (built by any Routing other than
Single). It carries its own model, cutoff, resonance, character, and cutoff-modulation
knobs, so the two filters can be voiced completely differently. Parameters are
`filter2`-prefixed.

| Control | Parameter | What it does | Range / values |
|---------|-----------|--------------|----------------|
| Model | `filter2Type` | Filter 2's model and circuit character, independent of Filter 1. | Ladder / SVF / Bite / Multimode / Cascade / Diode / Acid (default Ladder) |
| Cutoff | `filter2Cutoff` | Filter 2's corner frequency. | 20 Hz to 18 kHz (default 1200 Hz) |
| Resonance | `filter2Reso` | Filter 2's Q and emphasis at cutoff. | 0 to 100 % (default 20 %) |
| Drive | `filter2Drive` | Input gain into Filter 2's nonlinearity. | 1 to 10 (default 1) |
| Mode | `filter2Mode` | Filter 2's discrete response, independent of Filter 1. | LP / LP 2-pole / BP / HP / Notch (default LP) |
| Filter Character | `filter2Voicing` | Filter 2's drive character (Clean / Analog), independent of Filter 1 so both can be Analog. Ladder and Diode only. | Clean / Analog (default Clean) |
| Depth | `filter2AuthDepth` | Filter 2's Analog per-stage clip amount. Active only under Analog. | 0 to 100 % (default 40 %) |
| Morph | `filter2Morph` | Filter 2's continuous mode morph, a signed offset from its Mode. | signed offset (default 0) |
| Env Amt | `filter2EnvAmt` | How much the filter envelope pushes Filter 2's cutoff (its own amount unless Env Link is on). | plus or minus 6 octaves (default 0) |
| Key Track | `filter2Keytrack` | How much Filter 2's cutoff follows the played note (its own amount unless Key Link is on). | 0 to 100 % (default 0) |
| Feedback | `filter2Feedback` | Filter 2's own post-filter feedback loop ("bark"). | 0 to 100 % (default 0) |

### Filter 2 links

| Control | Parameter | What it does | Range / values |
|---------|-----------|--------------|----------------|
| Env Link | `filter2EnvLink` | When on, Filter 2's envelope amount follows Filter 1 instead of its own knob. | Off / On (default Off) |
| Key Link | `filter2KeyLink` | When on, Filter 2's key-track follows Filter 1 instead of its own knob. | Off / On (default Off) |

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
