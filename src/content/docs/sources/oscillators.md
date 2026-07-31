---
title: Oscillators
description: The Wave × Model oscillator concept, the models, and per-oscillator tuning, pulse width, and phase.
---

![The oscillator panel](../../../assets/screenshots/panel-osc.png)

Aconite gives you three full oscillators, each built on a **Wave × Model** idea:
you pick a waveform and, independently, a model that decides how that waveform is
generated. The models span classic analog and virtual-analog, a DCO, wavetable,
and the physical-modeling **String**, **Modal**, and **Kick** voices. Each
oscillator has its own octave, coarse tune, detune, pulse width and PWM, and phase
controls.

## The wave and the model

One menu per oscillator selects both things at once. The waveform is the shape;
the model is the analog character applied to it. An unadorned name — **Saw**,
**Square**, **Triangle**, **Shark's-tooth** — gives you the clean, band-limited
version. A parenthesized suffix adds a layer of analog personality on top.

### Waveforms

**Sine** — the purest tone: a single frequency, no overtones. Useful for smooth
sub content, FM carrier sounds, and anywhere you want an almost vocal, flute-like
clarity.

**Saw** — the richest harmonic source of the classics, full of both odd and even
partials. Bright and cutting in the high register, thick and powerful lower down.
Most leads and aggressive basses start here.

**Square** — only odd harmonics, which gives it a hollow, woody, or reedy quality
depending on the filter. At 50% duty cycle it is a perfect square; narrow the
pulse width and it gets progressively thinner and nasal — this is also where pulse
width modulation (PWM) lives.

**Triangle** — a mellower sibling of the square, also odd-partial, but the
partials fall off much faster. Softer than a saw, rounder than a square — flute,
oboe, and vintage synth bass territory.

**Shark's-tooth** — a half-rectified waveform with a pronounced even-harmonic
content that sits somewhere between a saw and a sine. It has a bite and an
asymmetry that the pure classics lack; useful for plucky, percussive tones and
sounds that need both warmth and edge.

**Sine** is the only base wave without model variants. Everything else can be
dressed in any of the four model characters below.

### Models

**Analog** — a pitch-tracking spectral tilt that gently rounds the top end as
pitch rises, the way a real analog oscillator does. The result is warmer and a
little rounder than the clean version without being dull. A classic Minimoog-style
character.

**Unison** — seven detuned copies of the oscillator fanned around the played
pitch. The spread is massive — huge, wide, and instantly recognisable as a
supersaw or super-square. Use **Detune** to open the fan; use **Mix** to balance
the centre tone against the outer voices. This model makes one oscillator sound
like an ensemble on its own.

**Silk** — a lightly corner-rounded voice modelled on a state-variable oscillator
design. Smoother and creamier than Analog, with less harmonic bite. The polite
end of the analog spectrum: good for pads, strings, and vintage polysynth tones.

**DCO** — a digitally clocked oscillator with a light analog edge. The tone is
cleaner and more stable than Analog or Silk but not sterile — alive in the way a
Juno-80 or Jupiter-8 is alive. Good for clean leads, arpeggios, and anything
where you want controlled character without unpredictability.

:::tip
You can layer all three models on the same base wave across the three oscillators.
For example: one Silk saw for warmth on Osc 1, one Unison saw for width on Osc 2,
and one DCO saw for a clean centre on Osc 3 — then blend them to taste in the
[mixer](/aconite-manual/sources/mixer/).
:::

### Special oscillators

**Wavetable** — a morphable set of up to eight frames (sine → triangle → saw →
square in the factory set). The **Position** control sweeps across the frames, and
**WT Morph** switches between a smooth crossfade and spectral interpolation (which
blends the harmonic content rather than the waveform shape). You can load your own
wavetables via **Load WT**. When you select Wavetable, the Pulse Width controls
relabel to **Position** and **Pos Mod**, and the same LFO-sweep behaviour applies.

**String** — a plucked-string physical model. It is struck at note-on and then
rings and decays like a real string, running through Aconite's filter, amp, and
effects. The exciter on the front end controls how the string is set into motion:
a **Noise** burst (classic Karplus-Strong pluck), an **Impulse** spike (bright and
click-y), a harmonic **From Osc** seed, a **Body** impulse-response colour, or
the **Hammer** exciter — a velocity-dependent felt-hammer that makes harder notes
intrinsically brighter, just like a piano. Adjust **Pluck Position** for a bridge-y
nasal quality versus a round, full sound; **Dispersion** adds stiffness and
inharmonicity from guitar through koto to piano; **Damping** controls how fast the
highs die; and **Drive** (with **Drive Curve**) runs a waveshaper inside the string
loop — loud passes fold and grit up, calming as the note decays. The String also
has a **Poly** mode that mixes in a second polarisation plane for a subtle two-stage
decay and beating chorus, the single biggest "real vs synthetic" tell. All String
parameters are [mod-matrix](/aconite-manual/modulation/matrix/) destinations.

**Modal** — a bank of tuned resonators struck at note-on. Fourteen instrument
types are available: Membrane, Timpani, Tabla, Steelpan, Handpan, Marimba,
Vibraphone, Xylophone, Glockenspiel, Tubular Bell, Church Bell, Woodblock,
Cowbell, and Glass Bowl. Controls include **Decay**, **Damp** (high-mode loss),
**Strike** position (centre for bass, edge for bright slap), **Tension** (the
metallic bloom as struck partials rise), **Symp(athy)** (a shimmer of neighbour
resonances, the acoustic "singing" of a handpan), and **PDrop** (a pitch drop on
the strike). Re-striking a still-ringing Modal note layers on top rather than
resetting it, exactly as real percussion does.

**Kick** — an 808-to-909 kick drum voice, struck at every note-on. Six controls
sweep the full range between the two archetypes: **Tune** sets the fundamental,
**Punch** dials between the tight 808 snap and the longer 909 pitch sweep, **Decay**
sets the ring time, **Click** adds the beater noise burst, **Click Tone** moves the
click centre from dark thud to bright tap, and **Drive** softens or grit-ifies the
whole body. There is no switch — the six controls cover the whole range
continuously.

## Tuning

Each oscillator has three pitch controls that stack:

- **Octave** — shifts by octaves over a wide range. Use this to put two oscillators
  at different registers.
- **Coarse** — up to ±24 semitones. Useful for intervals (a fifth, a third, an
  octave plus a semitone) and for hard-sync sweeping.
- **Detune** — up to ±50 cents. Small amounts give natural beating between
  oscillators; larger amounts give wide, chorused stacks.

Per-voice analog drift (governed by Aconite's aliveness layer — see
[The Aconite philosophy](/aconite-manual/getting-started/philosophy/)) adds a
small, slow wander to each voice's tuning independently, so a stacked chord
shimmers rather than sitting perfectly still.

## Pulse width and PWM

Pulse width only acts on the **Square** wave and the **Wavetable** model (where
it controls morph position instead):

- **Pulse Width** — the base duty cycle. At 50% you get the classic hollow square.
  Narrow it toward 0% or 100% and the tone thins into a sharp, reedy buzz.
- **PWM Depth** — how far an internal LFO sweeps the pulse width around that base
  value. Even modest PWM depth puts the oscillator in constant motion, adding an
  organic, breathed quality.

Each oscillator has its own independent pulse width, so you can set three different
duty cycles and sweep them at three different depths simultaneously.

## Note-on phase

Phase controls decide where the waveform starts when you press a key:

- **Start Phase** — the angle (0–360°) at which the waveform begins on each
  note-on. Moving this changes the attack transient, sometimes subtly, sometimes
  dramatically (especially on complex patches).
- **Rand** — adds a random per-note offset to the start phase, spreading voices
  apart from one another for a thicker, more analog-feeling attack.
- **Retrig / Free** — in Free mode, the oscillator continues wherever it was in
  its cycle when the previous note ended. In Retrig mode it resets to Start Phase
  on every note-on. Free is closer to how real analog oscillators behave; Retrig
  gives a more consistent, punchy attack transient.

:::note
FM and hard sync have their own chapter: [FM & hard sync](/aconite-manual/sources/fm-sync/).
The sub oscillator and noise source are covered in [Sub oscillator & noise](/aconite-manual/sources/sub-noise/).
All levels — including the balance between oscillators — live in the [Mixer](/aconite-manual/sources/mixer/).
:::
