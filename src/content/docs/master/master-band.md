---
title: The Master band
description: The output stage — Gain, Clip, Quality, Auto-HQ, Glue and Warmth, PSU Sag, and the master meter.
---

The **Master band** is Aconite's output stage: **Gain** and **Clip**, the
oversampling **Quality** and **Auto-HQ** settings, the bus saturation **Glue** and
**Warmth**, the power-supply **Sag** (with Depth and Time), and the master meter
with its sag indicator. This is where the whole mix is glued, warmed, and
level-managed before it leaves the synth.

Everything here sits downstream of every voice and every effect in the rack. The
signal has already passed through the oscillators, filter, waveshaper, and FX bus
by the time it reaches the Master band — so changes here colour the full,
finished mix.

## Gain and Clip

**Gain** is the output level knob. Use it to trim Aconite's output into your
mix or interface. It sits before the safety limiter.

**Clip** engages a final hard limiter. Leave it on in most patches — it catches
any momentary peak that snips above digital full-scale without audibly touching
normal program material. If you are deliberately running the output hot into the
Glue or your own hardware, you may want to monitor this and trim Gain first.

## Quality and Auto-HQ

**Quality** sets how hard Aconite works to keep the audio clean. Because analog
modelling — especially heavily driven or resonant filters — generates harmonics
well above the audible range, the synth can oversample internally so those
harmonics are formed and then cleanly filtered away before they reach your ears.
That takes CPU. Quality gives you the choice:

- **1× (Draft)** — the lightest setting. No oversampling; a clean, direct path
  for when you are writing or arranging and CPU headroom matters more than
  fidelity.
- **2× (Live)** — the default. A good balance for playing and auditioning patches.
- **4× (High)** — cleaner transients and high-frequency detail. Reach for this on
  exposed, resonant, or heavily driven leads.
- **8× (Offline)** — maximum fidelity, for final renders.

Only the audio processing pays the oversampling cost. Your modulation, envelopes,
and parameter automation always run at full host rate regardless of this setting.

**Auto-HQ on bounce** is in the Options menu. When it is on, Aconite
automatically raises quality to maximum whenever your DAW renders offline — a
bounce, export, or mixdown. You can monitor at 2× to stay comfortable on CPU, and
your exported file will be as clean as the 8× setting can make it.

## Glue and Warmth

**Glue** is a gentle analog-style bus saturation that works on the full summed
output. The effect is subtle by design: it adds very low-order harmonics that
give all your voices a shared "fingerprint," so they feel like they are coming
from the same instrument rather than a stack of separate sounds. Push it up and
you hear soft compression and warmth beginning to develop as loud passages grow
fuller.

**Warmth** shapes the character of that saturation. Turned toward one end it
leans into odd-order harmonics (a harder, more aggressive edge); toward the other
it shifts to even-order harmonics (a softer, rounder colour, closer to the way a
transformer or tube output stage colours a mix bus).

Glue and Warmth are at zero by default — the path is bit-exact clean until you
turn them up. Start with Glue at a very small amount and listen to a wide chord:
the voices should lock together a little more. Large values are available but are
more of a creative effect than a mixing tool.

When to reach for Glue: use it when a patch with many voices feels slightly
diffuse or when you want the output to feel like it is passing through a console
summing bus. It is not a replacement for the FX-rack effects — Tape, Distortion,
and Compressor each have their own richer character — but it acts on the whole mix
at once in a way the per-effect inserts do not.

## PSU Sag

**Sag** emulates the power-supply droop that happens in real polysynths when many
loud voices draw current at once. The shared power rails sag slightly under load,
and the whole output ducks a little, then blooms back as the sound decays and the
supply recovers. On hardware instruments like the Juno and Jupiter series, this is
a core part of why they feel alive under your hands — a big chord compresses and
breathes differently than a single note.

Three controls shape the effect:

- **Sag** (Amount) — how much the output ducks under load. A small amount adds a
  very natural "give" to chords; larger values become an obvious pumping or
  breathing effect.
- **Depth** — how deep the sag reaches into the signal. Combined with Amount, this
  lets you set a gentle squash that barely touches soft passages or a more dramatic
  pull that hits hard.
- **Time** — how slowly the output recovers after the peak load. A short Time means
  the bloom is quick and tight; a long Time gives a slower, more languid swell back
  to full level as a chord decays. The sag droop indicator on the master meter shows
  the current rail gain in real time so you can see the effect rather than just
  listen for it.

Like Glue, Sag defaults to zero. Even a very small amount of Sag on a pad or
chord patch can make the difference between a sound that feels digital-static and
one that breathes the way a hardware instrument does. It works best on polyphonic
patches where several voices sum at once — on a monophonic line the effect is
minimal, because the load does not change as much from note to note.

## The master meter

The wide meter in the Master band shows the peak output level for left and right
channels, with a dedicated **sag droop indicator** that animates the current
power-supply rail gain when Sag is engaged. Use the meter to watch for clipping
(trim Gain down until peaks stay comfortable), and watch the sag indicator to tune
the Sag Time and Depth by eye as well as by ear.
