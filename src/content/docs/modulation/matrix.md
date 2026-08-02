---
title: The modulation matrix
description: "The per-voice and bus modulation matrices (Source, Via, Destination, Depth), plus the right-click Modulate workflow and macros."
---

If you read one chapter in this section, make it this one. The modulation matrix is where
a patch stops being a static sound and starts being something that moves, breathes, and
responds. Every source-to-destination connection in Aconite runs through the matrix,
whether you made it by opening the grid or by right-clicking a knob.

## Two ways to add modulation

Aconite gives you two front-ends over the same routing data. They are not different systems;
they edit the same connections. Use whichever fits how you are working.

**The right-click shortcut** is fastest when you know which control you want to move:

1. Right-click the target knob.
2. Under **Add modulation**, pick a source: an envelope, an LFO, velocity, a macro, or
   anything else.
3. A connection is created at a sensible default depth. A dot appears on the knob; a colored
   arc animates in real time to show the live modulation push.

**The Master Matrix grid** is the full view. Open it to see every active connection at
once, set precise depths, add transforms, or route sources that do not have a single owning
knob (pitch, which fans to all oscillators at once, for example).

Both views read and write the same data. A route you made with a right-click shows in the
grid; a route you added in the grid shows in the right-click menu.

## Reading the matrix grid

The matrix has **24 slots**. Each row is one connection:

| Column | What it does |
|--------|--------------|
| **Source** | The modulation generator: an LFO, envelope, velocity, keytrack, macro, and so on. |
| **Via** | An optional transform applied to the source before it reaches the destination. |
| **Destination** | The parameter being modulated. |
| **Depth** | A bipolar amount that scales how far the source pushes the destination. |
| **Scope** | Shows VOICE (per-voice modulation) or BUS (mix-level modulation). |

A row whose Source is left blank (Off) is empty and does nothing. The 24 slots are all
equivalent (there is no "slot one is special" ordering).

## Sources

The source menu lists over forty options, organized by type:

- The **six LFOs**, including Bus LFO 1 and 2 for bus-scope destinations
- The **envelope pool** (Amp Env, Filter Env, and Env 3 through 6): all six are
  independently routable to any destination
- **Velocity** and **Keytrack**, the per-note performance values
- **Macro 1–4**: four knobs on the performance panel you can assign and name; a macro
  becomes a one-knob control over everything routed to it
- **Mod Wheel**, **Expression**, and up to eight **MIDI CC** inputs, for hardware
  controller integration
- **MPE Press** and **MPE Slide**, per-note pressure and slide for MPE controllers
- **Noise**, an audio-rate random signal for thick FM, PWM, and cutoff textures
- The **envelope follower**: see [Envelope follower](/aconite-manual/modulation/env-follower/)
- **Step Seq**: stepped levels, directional (Forward/Reverse/Ping-Pong/Random), with
  optional per-step glide; see the [Step sequencer](/aconite-manual/modulation/overview/#the-step-sequencer)
- **Performer**, a curve-per-step sequencer: each step plays a shaped sub-curve from a
  per-step library rather than a flat level; see the [Performer](/aconite-manual/modulation/overview/#the-performer)
- **Arp Step**, **Arp Vel**, **Arp Gate**: the arpeggiator's own rhythm as a modulation
  source; route Arp Gate to filter cutoff to pluck the filter on every arp note
- **Curve 1–4**: four drawable, pattern-synced automation lanes

## Destinations

Destinations span the full signal path. Most controls you would want to move are available:

- **Oscillators**: pitch, coarse tune, fine detune, level, pulse width, FM depth
- **Additive**: the partial-group levels, plus the additive drive and drift
- **Filter 1 and 2**: cutoff, resonance, drive, and mode morph for each filter
- **Filter envelope amounts**: how much each filter envelope pushes the cutoff
- **Waveshaper**: drive, mix, bias, and trim
- **Amplitude**: the post-VCA level, for tremolo or gating effects
- **Envelope times**: attack, decay, sustain, and release for the amp and filter envelopes
- **LFO rates**: all six LFO rates, plus the step sequencer and Performer rates
- **Voice character**: detune, drift, and variance from the analog-character controls
- **Pan**: for per-note spatial placement, keytrack panning, or auto-pan

Some destinations (reverb mix, delay feedback, master gain, and EQ) are bus-level only.
Choose them and the row's Scope badge switches to BUS automatically.

:::note
Cutoff and pitch use a smooth audio-rate connection that updates continuously with no
zipper noise. Most other destinations update at control rate, once per audio buffer. For
pitch-accurate filter sweeps and vibrato, these audio-rate destinations are the right
choice.
:::

## Via transforms

The **Via** column sits between the source and the destination. It shapes the source signal
before it lands:

| Transform | Effect |
|-----------|--------|
| (none) | No transform; the source passes through unchanged. |
| **Invert** | Flips the signal: a rising source becomes falling. |
| **Rectify** | Folds the negative half of a bipolar source up into positive territory, doubling the effective rate of a sine or triangle LFO. |
| **Quantize** | Steps the source into discrete levels, turning a smooth LFO into a stepped sequence in real time. |
| **Lag** | Applies a 40 ms slew to the source, rounding off sharp jumps and making fast sources feel more gradual. |

Transforms are available on every slot, for both voice and bus routes.

## Setting depth

The **Depth** slider is bipolar: drag right for a positive push, drag left for a negative
one. At zero, the route is present but contributes nothing (useful for temporarily muting
a connection without deleting it). A negative depth inverts the modulation direction: a
rising envelope lowers the destination, for instance.

For signal-rate destinations like cutoff and pitch, depth is calibrated in musically useful
units (five octaves of cutoff sweep, two octaves of pitch range). For other destinations
the range is the full usable extent of the parameter.

## Removing a route

From the **right-click menu**: open the menu on the modulated knob, find the route under the
source name, and click the remove button.

From the **grid**: set the Source to Off (blank) or set Depth to zero.

## Macros

**Macro 1–4** are four general-purpose sources with panel knobs you can label and assign.
Route multiple destinations to the same macro and they all move together from one knob. A
typical use: route a macro to filter cutoff, resonance, and drive simultaneously at
different depths, then sweep the macro for a character sweep that moves all three in a
musically balanced way.

Macros work in both the per-voice and bus tiers: route a macro to reverb mix in one row
and to filter cutoff in another, and the single knob controls both.

## The bus matrix

The last two tabs in the Modulators panel (**Bus LFO 1** and **Bus LFO 2**) are LFOs
that run once for the whole mix. Their destinations are the
[effects rack](/aconite-manual/effects/using-the-rack/) and master controls: reverb,
chorus, delay, phaser, EQ, and master gain. Use bus modulation for mix-wide movement
that would be redundant or too expensive if it ran per-voice.

Bus routes appear in the same Master Matrix grid. Choose a bus destination (reverb mix,
for example) and the row's Scope badge shows BUS. Everything else works identically to
voice-scope routes.
