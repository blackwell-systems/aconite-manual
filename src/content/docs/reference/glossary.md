---
title: Glossary
description: Plain-language definitions of the synthesis terms used throughout this manual.
---

Short, plain-language definitions of the synthesis terms this manual uses (ADSR,
resonance, morph, unison, MPE, oversampling, and the rest) so a chapter never
assumes a word you have not met.

Terms appear in alphabetical order. Aconite-specific terms are noted with *(Aconite)*.

---

**ADSR**: the classic envelope shape: Attack, Decay, Sustain, Release. Attack is how long the
level takes to climb on note-on; Decay is how long it falls from peak to the Sustain level;
Sustain is the held level while the key is down; Release is how long it takes to fall to silence
after note-off. See [The envelope pool](/aconite-manual/envelopes/pool/).

**Acid *(Aconite)***: one of Aconite's seven filter models, voiced in the 303-style lineage: a
true 4-pole design with spread poles, an uncompensated passband so resonance "eats the lows", and
a resonance that sits right at the edge of oscillation. The canonical filter for acid basslines.
See [The two filters](/aconite-manual/filters/the-two-filters/).

**Amplitude**: the instantaneous level of a waveform. At the voice level, amplitude is usually
controlled by the amp envelope applied to the VCA (amplifier stage). Louder = higher amplitude.

**Analog character**: see *Aliveness layer*.

**Aliveness layer *(Aconite)***: a set of four controls that loosen each voice away from perfect
digital precision: Voice Detune, Drift, Variance, and Transient mode. At zero, every voice is
identical and clinically precise. Higher values model the subtle per-card variation of vintage
hardware, making chords shimmer and pads feel alive. See
[Voice & play](/aconite-manual/performance/voice-and-play/).

**Arpeggiator (arp)**: a subsystem that takes held notes and plays them in a pattern (up, down,
random, or step-sequenced) at a set rate and rhythm. Aconite's arp shares its clock with the
step sequencer. See [Step sequencer](/aconite-manual/performance/step-sequencer/).

**Attack**: the first stage of an envelope: the time the level takes to climb from silence to
its peak after a note-on. A short attack is snappy; a long attack fades in slowly. See *ADSR*
and [The envelope pool](/aconite-manual/envelopes/pool/).

**Auto HQ *(Aconite)***: a Quality mode setting that monitors at a lower oversampling rate (for
CPU headroom) while automatically switching to maximum quality on render/bounce. Set it in the
Voice / Play section. See also *Quality*.

**Band-pass (BP)**: a filter response that passes frequencies near the cutoff and attenuates
both above and below. Sounds nasal, vowel-like, or telephone-ish. Available on SVF, Bite, and
Multimode filter models. See [The two filters](/aconite-manual/filters/the-two-filters/).

**Bite *(Aconite)***: one of Aconite's seven filter models: an aggressive Sallen-Key / MS-20
character with a feedback saturator that lets resonance scream and grow before it is gently
tamed. Self-oscillates at maximum resonance.

**Bus LFO *(Aconite)***: one of two LFOs that modulate the post-mix FX bus and master, rather
than per-voice parameters. Used to make the mix breathe: route a Bus LFO onto reverb size,
chorus depth, or master gain. Configured in the Modulators panel. See
[Modulation matrix](/aconite-manual/modulation/matrix/).

**Bus Glue *(Aconite)***: informal name for the FX bus compressor, which applies dynamic
levelling and tonal cohesion across the full mix. Available in the
[FX rack](/aconite-manual/effects/using-the-rack/).

**Cascade *(Aconite)***: one of Aconite's seven filter models: a Moog-style cascade with a
continuous Clean → Rough control on Drive. Clean is exactly linear; Rough adds grit and tames
resonance as it saturates. Offers 12 dB and 24 dB slope options.

**Cent**: one hundredth of a semitone. A fine pitch unit. 100 cents = 1 semitone; 1200 cents = 1
octave. Used in Detune and unison spread controls.

**Chorus**: an effect that layers slightly detuned, delayed copies of a signal to fatten and
widen it. Aconite includes eight modelled chorus types. See
[Effect by effect](/aconite-manual/effects/effect-by-effect/).

**Compressor**: a dynamics processor that reduces the level of signals above a threshold,
bringing the loud parts down and letting the quieter parts be raised. Aconite's compressor is
part of the FX rack. See [Effect by effect](/aconite-manual/effects/effect-by-effect/).

**Cutoff**: the frequency at which a filter starts to act. On a low-pass filter, frequencies
below cutoff pass through cleanly and frequencies above it are attenuated. Sweeping cutoff up
and down is the most expressive gesture in subtractive synthesis. See
[The two filters](/aconite-manual/filters/the-two-filters/).

**CV (control voltage)**: historically, the analog control signal that moved a hardware synth
parameter. In Aconite, modulation signals internally travel as a digital equivalent of CV:
audio-rate for smooth destinations like cutoff, and control-rate (once per block) for parameters
like resonance and envelope times. The terminology appears in some mod-matrix contexts.

**DCO**: digitally controlled oscillator. In Aconite's oscillator menu, the DCO model voices
a saw, square, or triangle through a light digital-analog character: the clean-but-alive tone of
a Juno-style DCO. See [Oscillators](/aconite-manual/sources/oscillators/).

**Decay**: the second stage of an ADSR envelope: the time the level takes to fall from the
peak to the Sustain level, after the Attack stage is complete. See *ADSR*.

**Depth *(Aconite)***: on the filter's character controls: the amount of internal clipping in
the Analog voicing. Depth only acts under the Analog Voicing setting; under Clean it is
inaudible. See [The two filters](/aconite-manual/filters/the-two-filters/).

**Detune**: a pitch offset, typically expressed in cents. Oscillators can be individually
detuned to create beating between voices. Unison Detune spreads stacked voices in a chord.
See [Oscillators](/aconite-manual/sources/oscillators/).

**Diode *(Aconite)***: one of Aconite's seven filter models: a diode-ladder design in the
303-style lineage. Gentler knee than a Ladder, a singing resonance that peaks slightly sharp
of cutoff (from inter-stage diode coupling), and a passband that stays full as resonance rises.
The "neutral acid" character. See [The two filters](/aconite-manual/filters/the-two-filters/).

**Draw mode *(Aconite)***: a mode available on each of the six envelopes and on all six LFOs.
In Draw mode the classic ADSR handles are replaced by a hand-drawn multi-segment contour, using
the same drawable editor as the LFO shape editor. A sustain marker sets the hold point; a
loop region bracket sets a repeating sub-region. See [The envelope pool](/aconite-manual/envelopes/pool/)
and [LFOs](/aconite-manual/modulation/lfos/).

**Drive**: input gain into a filter's or effect's nonlinearity, typically producing harmonic
saturation and compression. On Aconite's filters, Drive pushes the signal harder into each
model's own saturation character. See [The two filters](/aconite-manual/filters/the-two-filters/).

**Drift *(Aconite)***: one of the four aliveness controls. Drift adds slow, quasi-random per-voice
pitch wander, as if each oscillator has its own warm-up curve. See also *Aliveness layer*.

**Envelope**: a time-varying control signal, usually shaped as ADSR, that is triggered by a
note and typically used to modulate amplitude or filter cutoff. Aconite has a pool of six
envelopes: Amp Env, Filter Env, and four free envelopes. See
[The envelope pool](/aconite-manual/envelopes/pool/).

**Env Follow *(Aconite)***: an amplitude envelope follower that tracks the output level of the
voice in real time. Available as a mod-matrix source; route it to Cutoff for an auto-wah effect.

**Expression**: MIDI CC 11. A global controller, available as a mod-matrix source in Aconite
alongside Mod Wheel.

**FB Sat *(Aconite)***: feedback saturation. A soft-clip applied to both filters' feedback loops
to add warmth and coloration. Tonal, not a limiter: its effect is harmonic rather than
loudness-focused. Judge by ear when Feedback is active. See
[The two filters](/aconite-manual/filters/the-two-filters/) and
[Feedback](/aconite-manual/filters/feedback/).

**Feedback (filter) *(Aconite)***: an external resonant loop around the whole filter, the
"bark". Distinct from Resonance: high Feedback dissolves the sharp resonance peak and spreads
its energy into a broader growl below cutoff. Useful range is roughly 0–0.6. See
[Feedback](/aconite-manual/filters/feedback/).

**Filter**: a circuit or algorithm that attenuates frequencies above, below, or around a
cutoff frequency. Aconite has two independent filters with seven models each. See
[The two filters](/aconite-manual/filters/the-two-filters/).

**Frequency**: how many times per second a waveform repeats, measured in Hertz (Hz). Higher
frequency = higher pitch. A4 = 440 Hz.

**FM (frequency modulation)**: using one oscillator (the modulator) to modulate the frequency
of another (the carrier). In Aconite, oscillators can FM each other and themselves (self-FM
feedback). See [Oscillators](/aconite-manual/sources/oscillators/).

**Glide**: see *Portamento*.

**High-pass (HP)**: a filter response that attenuates frequencies below the cutoff and passes
those above. Useful for removing rumble or thinning a sound. Aconite's front-end HPF (high-pass
filter) can be positioned before or after the main filters. See
[The two filters](/aconite-manual/filters/the-two-filters/).

**Keytrack / Key Follow**: a modulation source that scales with the played pitch. At 100%,
higher notes open the filter cutoff proportionally so the tone stays consistent across the
keyboard. In Aconite, Keytrack is available as a mod-matrix source and as a per-filter option.

**Ladder *(Aconite)***: one of Aconite's seven filter models: the classic Moog 4-pole low-pass.
A saturator inside the resonance loop compresses the resonance into a characteristic growl
rather than letting it blow up. Approaches self-oscillation at maximum resonance.

**Latch**: a play mode where a held note (or arp chord) keeps sounding after you lift the key.
Useful for hands-free playing and drones. See
[Voice & play](/aconite-manual/performance/voice-and-play/).

**LFO (low-frequency oscillator)**: a modulation source that cycles at a sub-audio rate
(typically 0.01 Hz to 20 Hz) to create tremolo, vibrato, filter sweeps, or rhythmic effects.
Aconite has six drawable LFOs, each with A/B morph. See [LFOs](/aconite-manual/modulation/lfos/).

**Low-pass (LP)**: a filter response that passes frequencies below the cutoff and attenuates
those above. The most common filter shape in synthesis; closing the cutoff makes a sound darker.
Available on all seven of Aconite's filter models. See
[The two filters](/aconite-manual/filters/the-two-filters/).

**Macro *(Aconite)***: one of four performance knobs (Macro 1–4) that are mod-matrix sources.
Assign them to any combination of destinations and depths to create a single expressive knob
that moves many parameters at once. See [Modulation matrix](/aconite-manual/modulation/matrix/).

**MIDI CC**: MIDI Continuous Controller. A number (0–127) that represents a hardware control
(knob, fader, pedal). CC 1 = Mod Wheel, CC 11 = Expression. In Aconite you can learn any CC
to any parameter (MIDI Learn), and up to eight CCs can become full mod-matrix sources. See
[Keyboard & mouse shortcuts](/aconite-manual/reference/shortcuts/).

**Mix Drive *(Aconite)***: the drive level into the distortion or saturation effect in the FX
rack, controlling how hard the circuit is pushed and therefore how much harmonic character is
added. See [Effect by effect](/aconite-manual/effects/effect-by-effect/).

**Modal *(Aconite)***: one of the special oscillator types. The Modal model physically models
resonant metallic objects (like a steel drum, handpan, or bell), producing tuned, decaying
ring with inharmonic character. See [Oscillators](/aconite-manual/sources/oscillators/).

**Modulation**: using one signal to control another parameter over time. In Aconite all
modulation routes run through the [Modulation matrix](/aconite-manual/modulation/matrix/) or
the right-click Modulate menu.

**Modulation matrix**: a routing grid that connects sources (LFOs, envelopes, velocity,
macros, hardware CC…) to destinations (cutoff, pitch, resonance, envelope times…) with a
depth that sets how much the source moves the destination. Aconite's matrix has 8 voice-scope
slots plus a separate bus matrix for the FX. See
[Modulation matrix](/aconite-manual/modulation/matrix/).

**Morph *(Aconite)***: two related meanings. (1) On the SVF, Bite, and Multimode filters: a
continuous parameter that blends between the filter's response modes (LP → BP → HP → Notch)
without stepping, and which is a mod-matrix destination so an LFO can sweep the filter
character. (2) On LFOs: the A/B Morph crossfades between two independent drawn shapes, from
shape A to shape B. See [The two filters](/aconite-manual/filters/the-two-filters/) and
[LFOs](/aconite-manual/modulation/lfos/).

**MPE (MIDI Polyphonic Expression)**: a MIDI extension where each note is sent on its own
MIDI channel so per-note pitch bend, pressure, and slide can be applied independently. In
Aconite, MPE Press and MPE Slide are mod-matrix sources, and the per-note bend range is
configurable. See [Voice & play](/aconite-manual/performance/voice-and-play/).

**Multimode *(Aconite)***: one of Aconite's seven filter models: a Roland-style tapped 4-pole
ladder that produces LP4, LP2, BP, HP, and Notch responses from one structure, with a
continuous mode morph between them.

**Noise**: a signal containing all frequencies at random amplitudes. Aconite has a noise
generator in the Mixer, and Noise is available as an audio-rate mod source in the matrix.

**Notch**: a filter response that attenuates a narrow band of frequencies around the cutoff
while passing everything above and below. Creates a hollow, phased character.

**Octave**: a doubling of frequency. Each oscillator in Aconite can be shifted by up to ±4
octaves. The pitch of a note one octave up is double the frequency of the original.

**Oscillator**: the primary sound source in a synthesizer, generating a periodic waveform at
a given pitch. Aconite has three main oscillators, a sub-oscillator, and a noise generator.
See [Oscillators](/aconite-manual/sources/oscillators/).

**Oversampling**: running the audio processing at a multiple of the host sample rate (2×, 4×,
8×) to reduce aliasing from nonlinear processing. Aconite's **Quality** setting controls the
oversampling factor. Higher Quality = cleaner sound, more CPU. See also *Quality*.

**Pan**: stereo placement. Aconite has per-voice and per-scene pan controls, and Pan is a
mod-matrix destination so an LFO can auto-pan voices. See
[Voice & play](/aconite-manual/performance/voice-and-play/).

**Patch**: a complete sound configuration: all parameters, mod routes, drawn shapes, and
effects settings. In Aconite, a patch is saved as a preset file and includes both scenes.

**Performer *(Aconite)***: a per-step *curve* sequencer: a step sequence where each step plays
its own drawn contour rather than a flat level, creating rhythmic, animated modulation.
Available as a mod-matrix source. See [Modulation matrix](/aconite-manual/modulation/matrix/).

**Polyphony**: the number of notes a synthesizer can play simultaneously. Aconite plays up to
16 voices; the Voices control in the Voice / Play section sets the cap. See
[Voice & play](/aconite-manual/performance/voice-and-play/).

**Portamento / Glide**: a pitch slide from one note to the next. Aconite offers Always or
Fingered glide modes. When the step sequencer's Slide flag is set on a step, it triggers a
303-style glide into the next note. See [Voice & play](/aconite-manual/performance/voice-and-play/)
and [Step sequencer](/aconite-manual/performance/step-sequencer/).

**PSU Sag *(Aconite)***: power supply sag: the slight compression and tonal shift that happens
in analog hardware when the power supply voltage dips under heavy signal load. Aconite's mixer
and saturation modeling includes this effect for added realism under high drive conditions.
See [Mixer](/aconite-manual/sources/mixer/).

**Pulse width (PW)**: on a square wave, the proportion of the cycle the waveform spends "high"
versus "low". At 50% it is a perfect square; narrower pulses become thin and nasal. Aconite
has per-oscillator pulse width with mod-depth control. See
[Oscillators](/aconite-manual/sources/oscillators/).

**PWM (pulse width modulation)**: modulating the pulse width of a square wave over time,
typically with an LFO, to create a slowly evolving, chorus-like timbre. In Aconite, PWM is
a mod-matrix destination. See [Oscillators](/aconite-manual/sources/oscillators/).

**Quality *(Aconite)***: the oversampling setting: 1× (draft), 2× (live, default), 4× (high),
or 8× (offline). Controls the fidelity vs CPU trade-off for the audio path. See
[The Aconite philosophy](/aconite-manual/getting-started/philosophy/).

**Release**: the final stage of an ADSR envelope: the time the level takes to fall to silence
after the key is released. See *ADSR*.

**Resonance**: a filter's Q factor: the emphasis it adds at the cutoff frequency. As resonance
rises, the filter narrows and the peak at cutoff grows; at maximum resonance most filter models
approach or enter self-oscillation. See [The two filters](/aconite-manual/filters/the-two-filters/).

**Reverb**: an effect that simulates acoustic reflections, giving the impression of a physical
space. Aconite's reverb is part of the FX rack. See
[Effect by effect](/aconite-manual/effects/effect-by-effect/).

**Saw / Sawtooth**: a waveform with a sharp rising (or falling) edge and a linear ramp. Rich
in harmonics; the most common waveform for leads and basses. See
[Oscillators](/aconite-manual/sources/oscillators/).

**Scene *(Aconite)***: a complete, independent synth engine (its own voice pool, patch, and
parameters). Aconite has two scenes (A and B). In Single mode only scene A plays; Layer mode
sounds both on every note; Split and Channel modes route notes to different scenes by pitch or
MIDI channel. See [Voice & play](/aconite-manual/performance/voice-and-play/).

**Self-oscillation**: when a filter's resonance is high enough that the filter begins to
oscillate on its own, producing a pure sine tone at the cutoff frequency even with no input
signal. In Aconite, the Ladder, Bite, and Acid models approach self-oscillation near maximum
resonance.

**Semitone**: the smallest conventional pitch interval in Western music; one key step on a
piano. 12 semitones = 1 octave. Coarse tune controls in Aconite typically work in semitones.

**Sine**: the simplest waveform: a pure, smooth cycle with only the fundamental frequency and
no overtones. Used for clean sub-basses and FM carriers.

**Slide *(Aconite, step sequencer)***: a step sequencer flag that triggers a 303-style
portamento into the next note, bending pitch smoothly rather than retriggering. Requires Mono
mode and Glide time to be set. See [Step sequencer](/aconite-manual/performance/step-sequencer/).

**Square**: a waveform that switches abruptly between maximum and minimum levels. At 50%
pulse width it contains only odd harmonics; narrowing the width (via PWM) makes it thinner and
more nasal. See [Oscillators](/aconite-manual/sources/oscillators/).

**Step sequencer**: a sequencer that plays a pattern of discrete pitches in steps, looped at a
set rate. Aconite's step sequencer is pitch-relative: steps are scale degrees so the pattern
transposes and stays in key as you change the root note. See
[Step sequencer](/aconite-manual/performance/step-sequencer/).

**String *(Aconite)***: a special oscillator model using physical modeling to simulate a plucked
or bowed string. Produces the attack transient and resonant decay of a real string. See
[Oscillators](/aconite-manual/sources/oscillators/).

**Sub-oscillator**: an oscillator tuned one or two octaves below the main oscillators. Used to
add deep fundamental weight to basses and pads. In Aconite the sub level is a fader in the
Mixer. See [Mixer](/aconite-manual/sources/mixer/).

**Sustain**: the held level of an ADSR envelope while the key is down, after the Decay stage.
The sustain is a *level*, not a time. See *ADSR*.

**SVF (state-variable filter) *(Aconite)***: one of Aconite's seven filter models: clean and
efficient, producing LP, BP, HP, and Notch with a continuous morph between them. The cheapest
model and the best choice for very high polyphony. See
[The two filters](/aconite-manual/filters/the-two-filters/).

**Swing**: a timing offset applied to alternating steps, shifting every other beat slightly
later to create a rhythmic "lilt". Aconite's arp and step sequencer include a Swing control.

**Transpose**: shifting pitch by a fixed interval. In the step sequencer, Transpose shifts the
whole pattern up or down in scale degrees or semitones.

**Triangle**: a waveform that rises and falls linearly. Softer than a saw wave, with only odd
harmonics that fall off faster than a square wave; useful for a softer, flute-like tone.

**Unison**: stacking multiple voices per note, each slightly detuned and/or panned, to create
a wide, rich sound. Aconite supports 1–8 voices per note with independent Detune and Spread
controls. See [Voice & play](/aconite-manual/performance/voice-and-play/).

**Variance *(Aconite)***: one of the four aliveness controls. Variance adds per-voice slop to
cutoff, envelope times, pulse width, and glide time simultaneously: a single knob for
general analog imprecision. See also *Aliveness layer*.

**Velocity**: how hard a key is pressed, transmitted as a MIDI value (0–127). In Aconite,
velocity is a mod-matrix source and each envelope has its own velocity sensitivity amount.

**Via *(Aconite, modulation matrix)***: the transform column in the modulation matrix. Applies
a processing step between source and destination: pass-through (--), Invert, Rectify, Quantize,
or Lag (a 40 ms slew that smooths the modulation). See
[Modulation matrix](/aconite-manual/modulation/matrix/).

**Voice**: one instance of the synth playing one note. At 8-voice polyphony with no unison,
eight voices can sound simultaneously. With 2-voice unison, four *notes* can sound (each using
two voices). See [Voice & play](/aconite-manual/performance/voice-and-play/).

**Voicing *(Aconite, filter)***: on the Ladder and Diode filter models: a character selector
with two settings, Clean and Analog. Clean is the lower-distortion path but has a taller,
sharper resonance; Analog compresses the resonance like real hardware and adds grit when driven.
See [The two filters](/aconite-manual/filters/the-two-filters/).

**Volume / Amplitude**: see *Amplitude*.

**Waveshaper *(Aconite)***: a static transfer-curve effect inserted in the voice signal path
before, between, or after the filters. Can be positioned and driven independently, and its
shape is fully drawable. See [Effect by effect](/aconite-manual/effects/effect-by-effect/).

**Wavetable *(Aconite)***: a special oscillator type that uses a user-loadable wavetable. The
Position / Pos Mod controls scan through the table. See
[Oscillators](/aconite-manual/sources/oscillators/).

**Waveform**: the shape of one cycle of an oscillator's output. Common waveforms: sine,
saw, square, triangle. Each has its own harmonic content and tonal character. See
[Oscillators](/aconite-manual/sources/oscillators/).
