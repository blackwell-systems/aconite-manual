---
title: "Oscillators, sub, and noise"
description: "Lookup reference for every oscillator control: type, tuning, phase, FM and sync, the sub oscillator, noise, and the String, Modal, Kick, Wavetable, and Additive model controls."
---

A terse lookup for every user-facing control in the sound-source section. Each of
the three oscillators (Osc 1, Osc 2, Osc 3) shares the per-oscillator set below.
For the full guide see [Oscillators](/aconite-manual/sources/oscillators/).

## Per-oscillator controls

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Type | Oscillator model and waveform in one: picks the synthesis engine (Analog ladder-style, Unison super-saw, DCO, Silk, Wavetable, String, Modal, Kick, Additive) and the wave it plays. | Sine; Saw, Square, Triangle and Shark's-tooth families (each in Standard, Analog, Unison, Silk and DCO flavours); Wavetable; String; Modal; Kick; Additive |
| Octave | Coarse pitch in octaves. | -4 to +4 oct |
| Coarse | Coarse pitch in semitones. | -24 to +24 st |
| Detune | Fine pitch offset. | -50 to +50 cents |
| Level | Oscillator level in the mixer. | 0 to 100 % |
| Pulse Width | Square-wave duty cycle (relabelled Position on Wavetable, where it sets the frame). | 5 to 95 % |
| PWM Depth | How far the modulation LFO sweeps the pulse width around its centre. | 0 to 100 % |
| FB | Operator self-feedback: routes the output back into its own phase, morphing sine toward saw and adding harmonics (and, pushed hard, a rougher tone) on the other waves. | 0 to 100 % |
| Start Phase | Note-on phase the wave restarts from. | 0 to 360 degrees |
| Rand | Per-note random spread of the start phase. | 0 to 100 % |
| Retrig | Oscillator phase at note-on. Free lets the wave run continuously (looser, more analog); Retrig resets the phase to the same start each note for a tight, punchy transient. | Free / Retrig |

## FM and sync

Global controls shared by the oscillators. See [FM and hard sync](/aconite-manual/sources/fm-sync/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| FM Routing | Which operators frequency-modulate which; the modulator's pitch versus the carrier sets the harmonic ratio. | No FM / 2>1 / 3>2>1 / 2>1<3 |
| FM Depth | How much the modulator bends the carrier's frequency: low is subtle overtones, high is clangorous, metallic FM. | 0 to 100 % |
| FM Mode | Exp bends pitch musically (stays roughly in tune); Linear is through-zero FM for classic bell and metallic tones. | Exp / Linear |
| Sync Routing | Hard-sync topology: the master resets the slave oscillator's phase each cycle for the bright, tearing sync sweep. Same routings as FM. | Off / 2>1 / 3>2>1 / 2>1<3 |

## Sub oscillator

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Sub Level | Sub-oscillator level, locked one to two octaves below the main pitch for low-end weight and body. | 0 to 100 % |
| Sub Wave | Sub-oscillator waveform. | Sine / Triangle / Square |
| Sub Octave | Register of the sub oscillator below the main pitch. | -1 oct / -2 oct |

## Noise

See [Sub oscillator and noise](/aconite-manual/sources/sub-noise/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Noise Level | Noise source level. | 0 to 100 % |
| Colour | Noise colour, a spectral tilt. White is flat; Pink and Red get darker; Blue and Violet brighter. Tuned is a resonant band-pass (pitched noise); S&H is stepped random. | White / Pink / Red / Blue / Violet / Tuned / S&H |
| Tune | Centre frequency of the Tuned-noise band-pass (used when Keytrack is off). | Hz |
| Reso | Resonance and bandwidth of the Tuned-noise band-pass: higher is narrower and more pitched. | 0 to 100 % |
| Keytrack | When on, the Tuned-noise centre follows the played note instead of a fixed frequency. | Off / On |
| Rate | Step rate of the Sample and Hold noise: how fast new random values are drawn. | Hz |
| Interp | S&H reconstruction: Step is a hard stairstep; Smooth interpolates between steps. | Step / Smooth |

## String model

Visible when a String wave is selected.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Pluck Position | Where along the string it is plucked: moves a comb notch through the tone, from full and round to thin and nasal. | 0 to 100 % |
| Decay | Ring time: how long the string sustains after the pluck, from a short muted pluck to a long open ring. | 0 to 100 % |
| Damping | How fast the highs decay relative to the fundamental, from bright and metallic to dark and soft. | 0 to 100 % |
| Dispersion | String stiffness and inharmonicity: stretches the overtones sharp, morphing guitar toward koto, bell, and piano-string timbres. | 0 to 100 % |
| Tone | Pluck hardness and brightness of the excitation, from soft finger to hard pick. | 0 to 100 % |
| Drive | In-loop waveshaper: drives the string's own feedback into saturation for a distorted, living tone (clean at zero). | 0 to 100 % |
| Drive Curve | Hardness of the in-loop fold applied by Drive. | Soft / Med / Hard |
| Exciter | What kicks the string into motion. | Noise / Impulse / From Osc / Body / Hammer |
| Poly | Dual polarisation: blends in a second, slightly detuned string plane that decays slower, for a two-stage decay and gentle beating (single string at zero). | 0 to 100 % |
| Unison | True multi-string unison: adds up to two more slightly detuned strings for a lush chorus and long shimmering aftersound (single string at zero). | 0 to 100 % |

## Modal model

Visible when a Modal wave is selected.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Modal Type | The modelled percussion instrument, each a different set of tuned resonant modes. | Membrane, Timpani, Tabla, Steelpan, Handpan, Marimba, Vibraphone, Xylophone, Glockenspiel, Tubular Bell, Church Bell, Woodblock, Cowbell, Glass Bowl |
| Decay | Ring time of the resonator bank, from a short damped hit to a long singing sustain. | 0 to 100 % |
| Damp | How fast the high modes die relative to the low ones, from dull and muted to bright and ringing. | 0 to 100 % |
| Strike | Where the instrument is struck: centre (bass, round) to edge (bright, slappy). | 0 to 100 % |
| Tension | The tuned-metal bloom: struck hard, the partials rise in pitch and the upper harmonics shimmer in late (0 is linear). | 0 to 100 % |
| Sympathy | A sympathetic halo of neighbouring notes and body resonance ringing under the struck note (0 is dry). | 0 to 100 % |
| PDrop | Pitch-drop after strike: the note starts sharp and glides down to pitch, for kick boom or timpani settle (0 is off). | 0 to 100 % |
| PTime | How long the pitch-drop glide takes to settle to the note. | roughly 10 to 500 ms |
| Mute | Note-off behaviour: Ring lets the strike decay on its own; Choke damps the tail when you release the key. | Ring / Choke |

## Kick model

Visible when a Kick wave is selected.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Tune | Fundamental pitch offset. | plus or minus 1 octave |
| Punch | Pitch-envelope depth and time together, sweeping the 808-snap to 909-sweep axis. | 0 to 100 % |
| Decay | Amplitude decay time to silence. | roughly 50 to 800 ms |
| Click | Level of the band-passed noise-burst attack (the beater click). | 0 to 100 % |
| Click Tone | Centre of the click band-pass, from dark thud to bright beater. | 0 to 100 % |
| Drive | Soft-clip on the summed body and click, from clean sub to gritty. | 0 to 100 % |

## Wavetable model

Visible when the Wavetable wave is selected.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Position | Frame position across the wavetable (the per-oscillator Pulse Width knob, relabelled). | 5 to 95 % |
| WT Morph | Frame interpolation: Linear blends the waveforms directly; Spectral interpolates their harmonics for a smoother sweep. | Linear / Spectral |
| Load WT | File picker to load a custom wavetable. | button |

## Additive model

Visible when the Additive wave is selected. See [Additive oscillator](/aconite-manual/sources/additive/).

### Spectrum page

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Spectrum | The 32 harmonic bars and the live waveform they sum to. Click or drag a bar to set that harmonic's level; drag sideways to paint; right-click a bar to zero it. | 32 harmonic bars |
| Base | A classic-waveform rolloff the 32 bars are loaded from as a starting point (also continues the spectrum above harmonic 32). Editing a bar reads Custom. | Saw / Square / Triangle / Sine / Flat / Custom |
| Group Mode | How the 32 harmonics fold onto the 8 group faders. | Octave / Odd-Even / Thirds |
| Group | Per-group gain, a compact group EQ over the spectrum: centre is unity, up boosts that band of harmonics, down cuts it. | 8 faders |
| Tilt | Spectral tilt: darkens the upper partials below centre, brightens them above (a slope, not a cut; also the law that continues the spectrum above harmonic 32). | signed |
| Stretch | Inharmonicity: pushes each partial progressively sharp so they stop being exact harmonics, sliding from pure tone through piano stretch toward bell and metallic. | 0 to 100 % |
| Noise | Residual noise level: a filtered-noise band summed in with the partials for breath, scrape, and wash textures (0 is off). | 0 to 100 % |
| Noise Color | Colour of the residual noise band, dark to bright about white. | dark to bright |
| Snap | Quantises drawn bar values onto a 1/8 lattice while painting, so harmonics land on clean steps. | Off / On |
| Odd | Restricts painting to odd harmonics; even bars are left untouched as you draw. | Off / On |
| Norm | Scales every bar up together so the loudest harmonic sits at full scale, preserving the drawn shape. | button |
| Reset | Returns the spectrum to defaults. | button |

### Analog page

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Drift | Per-partial analog VCO drift: each harmonic slowly and independently wanders in tune, so the bank breathes. The outer ring sets depth, the inner ring sets speed (0 is off). | 0 to 100 %, depth and rate |
| Variance | Per-voice, per-partial detune spread: each harmonic is nudged a few cents off exact and every voice differs, so unisons beat and the tone comes alive (0 is off). | 0 to 100 % |
| Drive | Analog drive on the summed partials: pushes the spectrum through a soft saturation that grows intermodulation and harmonic warmth (0 is clean). | 0 to 100 % |
| Group Env | Per-group amplitude envelope: each group of harmonics starts brighter or duller at note-on and relaxes back over its own time. Drag a column for depth, Shift-drag for its relax time (centre is off). | 8 columns |
| Group Curve | Relax-curve shape for the group envelopes: at zero they ease back smoothly; turned up they settle like a hardware envelope for a snappier evolution (0 is off). | 0 to 100 % |
