---
title: Signal flow
description: "The mental model: oscillators through mixer, filters, amp, effects, and master, with modulation over the top."
---

Everything in Aconite fits one signal path: the oscillators (plus sub and noise)
feed the **mixer** and its Mix Drive, into the **filter block**, into the
**amp/VCA**, out to the stereo **effects bus**, and finally the **master** stage
with its glue and PSU sag. Over the whole path sits the **modulation** layer,
which can move almost any control. Holding this mental model makes every later
chapter easier to place.

## The stages in order

### 1. Sources

Each voice starts at the **oscillators**. Aconite gives you multiple oscillators
plus a sub oscillator and a noise generator. Each source has its own level in the
mixer, and you blend them to taste before they hit anything else. Think of this as
your raw material: pitch, waveform, and character all start here.

The Sources section is covered in detail in the Sources chapters.

### 2. Mixer and Mix Drive

The individual source levels combine in the **mixer**, which also hosts a **Mix
Drive** control. Mix Drive adds saturation into the mix bus (before the filters),
so it affects all sources at once. A little Mix Drive adds body and glues the
oscillators together; a lot pushes the signal into audible harmonic density before
a single filter parameter is touched.

This is an important distinction: Mix Drive saturates the pre-filter signal.
The Drive controls inside the filter sections act later in the path, inside the
filter topology itself. They are different tools with different characters.

### 3. Filters

The mixed and driven signal passes into the **filter block**. Aconite has two
independent filters, each with its own model, cutoff, resonance, and routing. The
two filters can run in series (one feeding the other), in parallel (mixing their
outputs), or with more complex topologies; the routing controls are in the filter
section itself.

The filter is the heart of the instrument. Its cutoff, resonance, drive, voicing,
and feedback controls all act at physically different points within the model and
interact with one another. That depth is covered in
[The two filters](/aconite-manual/filters/the-two-filters/).

### 4. Per-voice output (amp and VCA)

After the filters, each voice passes through its own **amplitude envelope**, the
VCA stage that controls how loud a note is over time, from its attack through its
release. At low voice counts this stage is straightforward; at higher polyphony,
the aliveness controls can vary subtle characteristics between voices here, which
is part of what makes a chord shimmer rather than sit perfectly still.

Two saturation stages are woven into the filter and voice output path:

- **FB Sat** sits on the feedback loops inside the filter block. It only engages
  when Filter Feedback is turned up; it softens and colors the edges of
  self-oscillation and resonant screaming rather than letting the feedback loop
  clip hard. If you are not using Filter Feedback, FB Sat is transparent.
- **Global Sat** is an always-on, gentle soft-clip applied to each voice's output
  after the VCA, before the voices are summed. It is the whole-voice warmth
  control: a small amount rounds off individual voice peaks and gives the synth a
  slightly warmer, more analog-feeling top end. The knob for it lives on the filter
  panel. Global Sat is per-voice; it acts on every voice independently before they
  combine into the stereo mix.

### 4a. The scene layer

Everything in stages 1–4 describes one voice pool. In **Layer**, **Split**, or
**Channel** modes, Aconite runs **two parallel voice pools** (two full scenes),
each going through its own oscillators, filters, amp, and per-voice saturation
independently. The two pools sum together before they reach the effects rack, so
the effects always process the combined mix. Each scene can have its own play mode,
unison, filter settings, and character; they are genuinely independent instruments
that share one effects chain and one master output.

### 5. Effects rack

After the per-voice stage (and after both scenes sum in multi-scene modes), the
voices merge to stereo and enter the **effects rack**.
Effects run on the combined mix, not per-voice, which is standard for a
synthesizer: you shape the individual voices with envelopes and filters, then glue
and color the full mix with effects. Reverb, chorus, delay, and similar processing
live here.

### 6. Master stage

The stereo signal exits the effects rack into the **master** stage: output gain,
glue compression, PSU sag, an optional brickwall limiter, and final metering. The
glue sits across the full mix and adds cohesion; the sag model simulates the dynamic
impedance behavior of an analog power supply under load, which gives the output a
subtle but musical compression character at higher levels. The master brickwall
limiter, off by default, sits last of all, so with it engaged the output can never
clip no matter how hard the stages before it are pushed.

The master stage is covered in [Master band](/aconite-manual/master/master-band/).

## Modulation flows sideways

**Modulation** is not a series stage; it is a parallel layer that runs alongside
the whole signal path and can reach almost any control. Envelopes, LFOs, velocity,
the mod wheel, aftertouch, and more can each be routed to any knob, with
individual depths. Modulation does not change the signal directly; it moves the
parameters that shape it, which means every parameter in the flow above can become
a moving, expressive, voice-by-voice target.

The full modulation system is covered in
[Modulation matrix](/aconite-manual/modulation/matrix/).

## The short version

When you are troubleshooting a sound or planning a patch, this is the order to
think in:

1. **Sources**: what waveforms and levels are feeding the chain?
2. **Mix Drive**: is the pre-filter signal already saturated?
3. **Filters**: how are they shaped, modeled, and routed? (FB Sat colours the
   filter feedback loop if Feedback is up.)
4. **Amp envelope / per-voice output**: how does each note behave over time?
   (Global Sat warms each voice's output before it joins the mix.)
5. **Scene mode**: are two voice pools running in Layer, Split, or Channel mode?
6. **Effects**: what is happening to the stereo mix?
7. **Master**: is the output stage adding character or headroom?
8. **Modulation**: what is moving, and by how much?

Work through those stages in order and you can always find where a sound is coming
from and where to change it.
