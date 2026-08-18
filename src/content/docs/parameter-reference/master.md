---
title: "Master, MPE, and scope"
description: "Lookup reference for the master output controls, the console bus stage (glue and power-supply sag), oversampling, MPE, and the scope and analyzer."
---

A terse lookup for the master-section controls. See
[The Master band](/master/master-band/) and
[MPE and MIDI-learn](/master/mpe-midi-learn/).

## Master output

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Gain | Output volume. | dB |
| Clip | Master-output safety clipper (a character stage): Off is bit-exact (can overshoot), Soft rounds peaks gently, Hard brick-wall clips to stop overs reaching the host. | Off / Soft / Hard |
| Limiter | Master brickwall limiter: zero-latency, stereo-linked, sits last in the master chain so the output can never clip. Off is bit-exact. | Off / On (default Off) |
| Limiter Ceiling | The level the limiter holds the output below, in dBFS. | -3 to 0 dBFS (default -1.0) |
| Limiter Release | How fast the limiter's gain glides back toward unity between peaks. | 30 to 500 ms (default 100) |
| Quality | Internal oversampling rate: higher reduces aliasing on bright or distorted patches at a CPU cost. | 1x / 2x / 4x / 8x |
| Auto-HQ | Force maximum oversampling on offline render (bounce) while keeping the live setting for playback. | Off / On |

## Console bus stage

The summed-voice bus stage, both bypassed at zero.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Glue | Analog-summing saturation on the whole mix: near-clean when quiet, soft-compresses and shares one harmonic fingerprint across every voice as the mix runs hot (zero is bypass). | 0 to 100 % |
| Warmth | Shifts the Glue colour from purely odd toward an even-harmonic console asymmetry (only audible when Glue is up). | 0 to 100 % |
| Sag | Models the shared power rails drooping under heavy polyphony, so loud chords duck slightly then bloom back (zero is bypass). | 0 to 100 % |
| Depth | How far the rails sink at full load, the maximum duck of the Sag effect (only audible when Sag is up). | 0 to 100 % |
| Time | Speed of the sag: fast is a snappy duck-and-bloom, slow is a loose, breathing recovery (only audible when Sag is up). | fast to slow |

### Scene-B bus stage

With **SEQ: Per-Scene** (Voice panel), Scene B carries its own copy of the console
bus stage, `scB_`-prefixed, so each scene sums through its own glue and sag. Same
ranges and defaults as the scene-A controls above (all default to bypass).

| Control | Parameter | What it does | Range / values |
|---------|-----------|--------------|----------------|
| B Bus Sat | `scB_busSatAmount` | Scene B's summing saturation ("glue"). | 0 to 100 % (default 0) |
| B Bus Sat Character | `scB_busSatChar` | Scene B's glue colour, odd toward even-harmonic. | 0 to 100 % (default 50 %) |
| B PSU Sag | `scB_busSagAmount` | Scene B's power-supply sag amount. | 0 to 100 % (default 0) |
| B PSU Sag Depth | `scB_busSagDepth` | How far Scene B's rails sink at full load. | 0 to 100 % (default 50 %) |
| B PSU Sag Time | `scB_busSagTime` | Speed of Scene B's sag droop and bloom. | fast to slow (default 50 %) |

## MPE

| Control | What it does | Range / values |
|---------|--------------|----------------|
| MPE | Enables per-note expression: each note carries its own pitch-bend, pressure and slide from an MPE controller, routable as per-note modulation. | Off / On |
| Bend Range | Per-note pitch-bend range in semitones; match it to your controller so slides bend the intended interval. | 1 to 96 semitones |

## Scope and analyzer

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Source | Which point in the signal path the scope taps. | Master / Pre-FX / Filter / Osc |
| Source 2 | A second overlaid trace from another tap point for comparison, or Off for a single trace. | Off / Master / Pre-FX / Filter / Osc |
| Mode | Wave draws the signal over time (phosphor oscilloscope); XY plots the two sources against each other (a vectorscope for stereo width and phase); Spectrum is an FFT frequency analyzer (log-frequency axis, with peak-hold); Spectrogram is a scrolling frequency-vs-time waterfall. | Wave / XY / Spectrum / Spectrogram |
| Trigger Slope | Whether the trace starts on a rising or falling crossing of the trigger level (Wave mode). | Rising / Falling |
| Trigger Level | The amplitude the trace waits to cross before it draws, stabilising a repeating waveform (Wave mode). | signed |
| Freeze | Holds the current display. | Live / Frozen |
| Timebase | Scope zoom over the time axis (Wave mode), shown as a sample window. | zoom |

The **readouts strip** along the top of the display shows **PEAK** and **RMS**
level in dB, plus an estimated **PITCH** (frequency and nearest note name). PITCH is
hidden in XY mode.
