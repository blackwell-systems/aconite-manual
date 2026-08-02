---
title: "Envelopes"
description: "Lookup reference for the six envelopes: the ADSR stages, model, velocity, keytrack, cycle, curve, quantize, and drawable-contour controls."
---

A terse lookup for every envelope control. Aconite has six envelopes: Env 1
defaults to amplitude, Env 2 to filter cutoff, and Env 3 to 6 are free. Every
envelope shares the control set below. See
[The envelope pool](/aconite-manual/envelopes/pool/) and
[Drawable envelopes](/aconite-manual/envelopes/drawable/).

## Stage controls

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Attack | Rise time from note-on to peak. | time |
| Decay | Fall time from peak to the Sustain level. | time |
| Sustain | Held level while the key is down. | 0 to 100 % |
| Release | Fall time to silence after note-off. | time |
| ADS Rel | Ties the Release time to Decay, collapsing the envelope to a three-stage shape driven by one control. | Off / On |

## Shape and response

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Model | Envelope circuit model. ADS is a clean digital shape; the others emulate the attack and decay curvatures and sag of classic hardware. | ADS / Analogue / Digital / Vintage / Classic |
| Velocity | How much playing velocity scales the envelope output. | 0 to 100 % |
| Keytrack | How much pitch scales the envelope times (higher notes shorter). | signed % |
| Curve | Bends the attack and decay slopes from linear into the exponential curves of an analog RC envelope, for a snappier feel. | 0 to 100 % |
| Quantize | Snaps the envelope output to discrete steps, turning the smooth contour into a stepped, staircase sweep. | 0 to 100 % |

## Looping and drawing

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Cycle | Normal runs the envelope once per note; Loop repeats the attack and decay stage like an LFO; One-shot ignores note-off and plays the full shape to the end. | Normal / Loop / One-shot |
| Loop Sync | When looping, locks the loop rate to the host tempo (via Loop Div) instead of the free attack and decay times. | Off / On |
| Loop Div | Note division the loop rate locks to when Loop Sync is on. | note value |
| Draw | Swaps the fixed ADSR handles for a freely drawn multi-segment contour, shaping the envelope point by point. | Off / On |
| Env Restart | On a re-triggered note, whether envelopes resume From Current level (smooth) or restart From Zero (a clean, consistent attack). | From Current / From Zero |
