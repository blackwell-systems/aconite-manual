---
title: The scope & analyzer
description: "The scope band: Wave, XY, Spectrum, and Spectrogram displays, the two source taps, the trigger controls, and the peak/RMS/pitch readouts."
---

The **Scope** band gives you a live picture of the sound: what the waveform looks
like, how the stereo field sits, where the energy is across the frequency range,
and how that spectrum moves over time. It is a monitoring tool, so it never changes
the audio; it just shows you what is already there. Like the note editor, the scope
can [pop out](/interface/overview/#make-the-window-yours) into its own resizable
window when you want a bigger view.

## The four display modes

A **Mode** selector switches what the display draws. All four modes share the same
source taps and readouts.

| Mode | What it shows | Use it for |
|------|---------------|------------|
| **Wave** | A phosphor oscilloscope: the signal drawn over time, with trailing persistence. | Reading the shape of a waveform, checking a filter's motion, watching an envelope open and close. |
| **XY** | A vectorscope: the two source taps plotted against each other. | Judging stereo width and phase; a thin diagonal line is mono, a wide splash is stereo. |
| **Spectrum** | An FFT frequency analyzer on a **log-frequency** axis, with a **peak-hold** trace riding the maxima. | Seeing where the energy sits: the fundamental, harmonics, resonance peaks, and where a filter is cutting. |
| **Spectrogram** | A scrolling **frequency-vs-time waterfall**: frequency runs up the display, time scrolls left to right (newest on the right), with brightness for level. | Watching how a sound's spectrum evolves: sweeps, movement, and how partials come and go over time. |

The log-frequency axis and the peak-hold trace in Spectrum are always on; there is
no separate toggle for either. Spectrogram uses the same log-frequency mapping as
Spectrum, so the two read the same way vertically.

## Sources: what the scope is watching

The scope can tap the signal at different points in the voice path, and it can show
two taps at once for comparison.

- **Source** picks the primary tap: **Master** (the final output), **Pre-FX** (the
  voice sum before the effects rack), **Filter** (after the filter stage), or **Osc**
  (the raw oscillator mix, before the filter). Moving the tap earlier in the chain
  lets you isolate what one stage is doing.
- **Source 2** overlays a **second trace** from another tap, so you can compare two
  points directly (the oscillator against the filtered signal, say, to see exactly
  what the filter removed). Set it to **Off** for a single clean trace. In **XY**
  mode the two sources are what get plotted against each other.

## Trigger and timebase (Wave mode)

In **Wave** mode a trigger stabilises a repeating waveform so it stands still
instead of scrolling:

- **Trigger Slope** sets whether the trace starts on a **Rising** or **Falling**
  crossing of the trigger level.
- **Trigger Level** is the amplitude the trace waits to cross before it draws. Drag
  it to set the level; double-click to re-centre it at zero.
- **Timebase** zooms the time axis, shown as the sample window it is drawing. Zoom
  in to inspect a single cycle, or out to see a longer stretch.
- **Freeze** holds the current display so you can study it. It reads **Live** when
  running and **Frozen** when held; it works in every mode, not just Wave.

## The readouts strip

Along the top of the display, a compact strip reports the numbers behind the
picture:

- **PEAK** and **RMS** show the current peak and average level in dB, a quick check
  for how hot the signal is running.
- **PITCH** shows an estimated pitch: the strongest frequency and the nearest note
  name (for example `440.0 Hz  A4`). It is a handy tuning and interval reference
  while you play. PITCH is hidden in XY mode, where a single pitch has no meaning.

For the full control list see the
[scope reference](/parameter-reference/master/#scope-and-analyzer).
