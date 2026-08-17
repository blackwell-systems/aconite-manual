---
title: "Oscillators, sub, and noise"
description: "Lookup reference for every oscillator control: type, tuning, phase, FM and sync, the sub oscillator, noise, and the String, Modal, Kick, Wavetable, and Additive model controls."
---

A terse lookup for every user-facing control in the sound-source section. Each of
the three oscillators (Osc 1, Osc 2, Osc 3) shares the per-oscillator set below.
For the full guide see [Oscillators](/sources/oscillators/).

## Per-oscillator controls

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Type | Oscillator model and waveform in one: picks the synthesis engine (Analog ladder-style, Unison super-saw, the authentic Juno DCO, Wavetable, Additive, Acoustic, String, Modal, Kick, Chip) and the wave it plays. 20 types in all. | Sine; Saw (Standard, Analog, Unison, DCO); Square and Triangle (Standard, Analog, Unison); Shark's-tooth (Standard, Analog); Wavetable; Additive; Acoustic; String; Modal; Kick; Chip |
| Octave | Coarse pitch in octaves. | -4 to +4 oct |
| Coarse | Coarse pitch in semitones. | -24 to +24 st |
| Detune | Fine pitch offset. | -50 to +50 cents |
| Level | Oscillator level in the mixer. | 0 to 100 % |
| Pulse Width | Duty cycle of the Square wave and of the Saw (DCO)'s built-in pulse source (relabelled Position on Wavetable, where it sets the frame). | 5 to 95 % |
| PWM Depth | How far the modulation LFO sweeps the pulse width around its centre. | 0 to 100 % |
| FB | Operator self-feedback: routes the output back into its own phase, morphing sine toward saw and adding harmonics (and, pushed hard, a rougher tone) on the other waves. | 0 to 100 % |
| Soften | Standard-model waves only (sits in the FM row next to FB): pitch-tracked corner rounding via a one-pole low-pass on the raw waveform, rolling off the brightest harmonics for a warmer, rounder tone. At 0 it is bypassed and the Standard wave is unchanged. | 0 to 1 (default 0) |
| Start Phase | Note-on phase the wave restarts from. | 0 to 360 degrees |
| Rand | Per-note random spread of the start phase. | 0 to 100 % |
| Retrig | Oscillator phase at note-on. Free lets the wave run continuously (looser, more analog); Retrig resets the phase to the same start each note for a tight, punchy transient. | Free / Retrig |

## Lo-fi (vintage-digital)

Behind the per-oscillator **LO-FI** toggle. Offered on the clean-digital engines
(Sine, Saw, Square, Triangle, Shark's-tooth, and Wavetable); not on the
analog-modelled, String, Modal, Kick, or Additive oscillators. All three are off
by default and stack. See [Oscillators](/sources/oscillators/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Bits | Bit-depth reduction: quantises the waveform into coarser steps for gritty, crunchy vintage-digital distortion (top is clean). | 16 to 1 (16 = clean) |
| Crush | Sample-rate reduction: decimates the oscillator for the cold, aliased character of cheap early digital hardware (0 is clean). | 0 to 1 |
| Alias | Defeats the anti-aliasing so the raw waveform's harmonics fold back as buzzy, inharmonic tones, the naive-digital-oscillator sound (0 is clean). | 0 to 1 |

## FM and sync

Global controls shared by the oscillators. See [FM and hard sync](/sources/fm-sync/).

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

See [Sub oscillator and noise](/sources/sub-noise/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Noise Level | Noise source level. | 0 to 100 % |
| Colour | Noise colour, a spectral tilt. White is flat; Pink and Red get darker; Blue and Violet brighter. Tuned is a resonant band-pass (pitched noise); S&H is stepped random. | White / Pink / Red / Blue / Violet / Tuned / S&H |
| Tune | Centre frequency of the Tuned-noise band-pass (used when Keytrack is off). | Hz |
| Reso | Resonance and bandwidth of the Tuned-noise band-pass: higher is narrower and more pitched. | 0 to 100 % |
| Keytrack | When on, the Tuned-noise centre follows the played note instead of a fixed frequency. | Off / On |
| Rate | Step rate of the Sample and Hold noise: how fast new random values are drawn. | Hz |
| Interp | S&H reconstruction: Step is a hard stairstep; Smooth interpolates between steps. | Step / Smooth |

## DCO model (Saw (DCO))

Visible when the Saw (DCO) type is selected. The authentic Roland Juno-106 DCO: one
phase-locked digital core mixing a saw, a PWM pulse, and a sub-square. The three
level knobs form a concentric Saw / Pulse / Sub knob and are each a mod-matrix
destination (Juno Saw / Juno Pulse / Juno Sub). Pulse Width and PWM Depth (above)
shape the pulse source. See [Oscillators](/sources/oscillators/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Saw | Level of the sawtooth source, the Juno backbone. | 0 to 100 % (default 100 %) |
| Pulse | Level of the PWM pulse source (its width and sweep come from Pulse Width / PWM Depth). | 0 to 100 % (default 0) |
| Sub | Level of the sub-square, one octave below the note. | 0 to 100 % (default 0) |

## Acoustic model

Visible when the Acoustic wave is selected. A modeled concert grand built by
analysis-resynthesis, so it plays like an oscillator (pitch- and velocity-tracking,
velocity changes timbre) rather than a fixed sample. See [Oscillators](/sources/oscillators/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Instrument | Which modeled grand you are playing. Grand C5 is darker and warmer; Grand CF3 is brighter and more open. | Grand C5 / Grand CF3 |
| Bright | Spectral tilt: mellow and dark below centre, open and present above. | signed |
| Decay | How long notes ring, from a short damped tone to a long open sustain. | 0 to 100 % |
| Inharm | Inharmonic stretch: adds the stretched-partial character of a real piano's stiff strings. | 0 to 100 % |
| Morph | Blends toward the other grand, so you can sit anywhere between C5 and CF3. | 0 to 100 % |

## String model

Visible when a String wave is selected.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Pluck Position | Where along the string it is plucked: moves a comb notch through the tone, from full and round to thin and nasal. | 0 to 100 % |
| Decay | Ring time: how long the string sustains after the pluck, from a short muted pluck to a long open ring. | 0 to 100 % |
| Damping | How fast the highs decay relative to the fundamental, from bright and metallic to dark and soft. | 0 to 100 % |
| Dispersion | String stiffness and inharmonicity: stretches the overtones sharp, morphing guitar toward koto, bell, and piano-string timbres. | 0 to 100 % |
| Tone | Pluck hardness and brightness of the excitation, from soft finger to hard pick. | 0 to 100 % |
| Drive | Level-dependent saturation on the string: loud passes fold and grit up, mellowing as the note decays, for sitar and distorted electric-string tones (clean at zero). | 0 to 100 % |
| Place | Where the Drive grit sits: from inside the string (character evolves over the note) to the string's output (an amp after the pickup, cleaner and more aggressive). | 0 to 100 % |
| Drive Curve | Hardness of the fold applied by Drive. | Soft / Med / Hard |
| Exciter | What sets the string in motion. Bow is a sustained friction excitation (the string sings while held); the others strike once at note-on. Impulse is a short shaped click, not a lone spike; all five are level-matched. | Noise / Impulse / From Osc / Hammer / Bow |
| Body | Orthogonal soundboard resonator that colours whatever the exciter feeds in (independent of the Exciter). Hammer + Grand is a real piano; a pluck + Guitar is an acoustic guitar. Off is bit-exact. | Off / Guitar / Grand / Baby Grand / Upright / Spinet (default Off) |
| Poly | Dual polarisation: blends in a second, slightly detuned string plane that decays slower, for a two-stage decay and gentle beating (single string at zero). | 0 to 100 % |
| Unison | True multi-string unison: adds up to two more slightly detuned strings for a lush chorus and long shimmering aftersound (single string at zero). | 0 to 100 % |
| Humanize | Per-note pitch (about ±3 cents) and level (about ±2 dB) scatter, so repeated notes are not machine-gun identical (0 is off/bit-exact). | 0 to 100 % (default 0) |
| Bow Force | Bow exciter only: bow pressure and dynamics. Harder is louder; past the sweet spot it over-presses into a raucous scratch. | 0 to 100 % |
| Bow Speed | Bow exciter only: bow speed and brightness. Faster gives a brighter, quicker-catching tone. | 0 to 100 % |

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
| Punch | Pitch-envelope depth: 808's subtle tick (about +1 octave) up to a deep 909-style sweep (about +3 octaves). | 0 to 100 % |
| Snap | Pitch-envelope time, independent of Punch: how fast the snap falls, from an instant 808 snap to a slower 909 fall. | roughly 6 to 120 ms |
| Decay | Amplitude decay time to silence. | roughly 50 ms to 2.5 s |
| Click | Level of the band-passed noise-burst attack (the beater click). | 0 to 100 % |
| Click Tone | Centre of the click band-pass, from dark thud to bright beater. | 0 to 100 % |
| Drive | Soft-clip on the summed body and click, from clean sub to gritty. | 0 to 100 % |

## Chip model

Visible when a Chip wave is selected. Two authentic chip families, picked by the
Family selector: the NES / 2A03 and the Commodore 64 SID (6581/8580). Every setting
is per oscillator, so the three oscillators act as independent console channels. See
[Oscillators](/sources/oscillators/).

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Family | Which chip you are playing. NES is the Ricoh 2A03; SID is the C64's MOS 6581/8580. | NES 2A03 / SID 6581-8580 (default NES) |
| Wave | The chip voice. NES: Pulse (duty square), stepped Triangle, or noise channel. SID: Saw, Triangle, Pulse, or LFSR noise (multi-select reaches the SID's bit-ANDed combined waveforms). | Pulse / Triangle / Noise (NES); Saw / Triangle / Pulse / Noise (SID) |
| Duty | Pulse duty / width. NES: the four hardware widths (50% is the plain square). SID: a continuous 12-bit pulse width. | 12.5 / 25 / 50 / 75 % (NES); continuous (SID) |
| Noise Mode | NES noise character (Noise wave): Long is a broad white hiss; Short is a shorter, pitched, metallic buzz. | Long / Short |
| Rev | SID revision. 6581 is the non-monotonic-DAC "classic SID" grit; 8580 is the cleaner later chip. | 6581 / 8580 (default 6581) |
| Pitch Quant | NES: snaps the pitch onto the console's coarse hardware tuning grid, so high notes drift slightly out of tune, the key NES tell (on by default; off plays exact pitch). | Off / On |
| Vol Quant | NES: snaps the output level onto the coarse 16-step (4-bit) amplitude grid the real chip uses. | Off / On |

On the NES family, stacking two or more Chip oscillators in one voice mixes them
through a model of the console's nonlinear output DAC, so the channels compress and
glue like a full NES mix. It is automatic (no control) and engages only at two or
more NES Chip oscillators. The SID family carries its own DAC character per voice.

## Wavetable model

Visible when the Wavetable wave is selected.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Table | Built-in wavetable library the Position knob morphs across (each table is band-limited). Basic is the default and matches the original factory table. | Basic; Harmonic Bloom; Formant Vowel; PWM; Sync Sweep; FM Bells; Additive Comb; Inharmonic Bell; Distortion; Noise |
| Position | Frame position across the wavetable (the per-oscillator Pulse Width knob, relabelled). | 5 to 95 % |
| WT Morph | Frame interpolation: Linear blends the waveforms directly; Spectral interpolates their harmonics for a smoother sweep (Spectral applies to the Basic table; library tables use Linear). | Linear / Spectral |
| Warp | Secondary per-read transform on top of the morphed wave. | Off / Bend / PWM / Sync / Asym / Fold / Mirror |
| Warp Amt | How hard the selected Warp mode bites. Mod-matrix destination (WT Warp); 0 (Off) leaves the wave untouched. | 0 to 100 % |
| Load WT | File picker to load a custom wavetable. | button |

## Additive model

Visible when the Additive wave is selected. See [Additive oscillator](/sources/additive/).

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
