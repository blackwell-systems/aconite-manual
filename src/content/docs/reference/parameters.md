---
title: Parameter list
description: A flat, look-up reference of every parameter with its range and default.
---

A panel-by-panel reference of Aconite's user-facing controls. Use this page to
look up what a control does and its range. For deep explanations of how sections
interact, follow the links to the relevant chapters.

:::tip
Every knob in Aconite responds to the same gestures. **Drag** to change the
value, **double-click** to reset to its default, and **hold Shift** (or Cmd)
while dragging for fine control. Right-click any knob to add modulation or set
MIDI-learn.
:::

---

## Oscillators

Each of the three main oscillators (Osc 1, Osc 2, Osc 3) shares this control
set. See [Oscillators](/sources/oscillators/) for the full guide.

### Per-oscillator controls

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Wave | Selects the waveform and analog model together | Sine; Saw / Saw (Analog) / Saw (Unison) / Saw (DCO); Square and Triangle families; Shark's-tooth; Wavetable; String; Modal; Kick |
| Octave | Coarse pitch in octaves | −4 to +4 |
| Coarse | Coarse pitch in semitones | −24 to +24 st |
| Detune | Fine pitch | −50 to +50 cents |
| Pulse Width | Duty cycle (Square) or morph position (Wavetable) | 0–100 % |
| PWM Depth | LFO sweep depth around the Pulse Width centre | 0–100 % |
| FB | Operator self-feedback; morphs sine toward saw, adds harmonics on other waves | 0–100 % |
| Soften | Standard-model waves only; pitch-tracked corner rounding for a warmer tone (0 = off, Standard wave unchanged) | 0–1 (default 0) |
| Start Phase | Note-on restart point | 0–360° |
| Rand | Per-note random phase spread | 0–100 % |
| Retrig | Whether the phase restarts on note-on | Free / Retrig |

### FM and sync

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| FM Routing | Cross-oscillator FM wiring | No FM / 2>1 / 3>2>1 / 2>1<3 |
| FM Depth | Modulation index applied to the active FM legs | 0–100 % |
| FM Mode | FM character | Exp (musical) / Linear (through-zero) |
| Sync Routing | Hard-sync wiring (Osc 1 is the synced slave) | Off / 2>1 / 3>2>1 / 2>1<3 |

### Sub-oscillator

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Wave | Sub waveform | Sine / Triangle / Square |
| Octave | Register offset | −1 or −2 |

### Noise

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Colour | Spectral character | White / Pink / Red-Brown / Blue / Violet / Tuned / Sample & Hold |
| Tune | Centre frequency (Tuned flavour) | Hz |
| Reso | Resonance at centre (Tuned) | 0–100 % |
| Keytrack | Pitch-tracking amount (Tuned) | 0–100 % |
| Rate | Clock speed (Sample & Hold) | Hz |

### String model controls

Visible when a String wave is selected. See [Oscillators](/sources/oscillators/).

| Control | What it does |
|---------|-------------|
| Pluck Position | Pluck point from bridge-y to round |
| Dispersion | String stiffness / inharmonicity |
| Damping | High-frequency decay rate |
| Decay | Overall ring time |
| Tone | Pluck hardness |
| Drive | In-loop waveshaper coloration |
| Drive Curve | Fold character: Soft / Med / Hard |
| Poly | Second polarisation (beating chorus) |
| Unison | Multi-string unison (up to three detuned strings) |
| Humanize | Per-note pitch/level scatter (0 = off) |
| Body | Soundboard: Off / Guitar / Grand / Baby Grand / Upright / Spinet |
| Exciter | Front-end type: Noise / Impulse / From Osc / Hammer / Bow |

### Modal model controls

Visible when a Modal wave is selected.

| Control | What it does |
|---------|-------------|
| Modal Type | Instrument: Membrane, Timpani, Tabla, Steelpan, Handpan, Marimba, Vibraphone, Xylophone, Glockenspiel, Tubular Bell, Church Bell, Woodblock, Cowbell, Glass Bowl |
| Decay | Ring time |
| Damp | High-mode loss |
| Strike | Strike position (centre to edge) |
| Tension | Metallic pitch bloom on strike |
| Sympathy | Neighbour-resonance halo |
| PDrop | Pitch drop on strike |

### Kick model controls

Visible when a Kick wave is selected.

| Control | What it does |
|---------|-------------|
| Tune | Fundamental pitch offset |
| Punch | Pitch-envelope depth and time; sweeps 808 ↔ 909 axis |
| Decay | Amplitude −60 dB time |
| Click | Beater noise-burst level |
| Click Tone | Noise-burst centre frequency |
| Drive | Soft-clip on body + click |

### Wavetable controls

Visible when the Wavetable wave is selected.

| Control | What it does |
|---------|-------------|
| Position | Frame position across the wavetable |
| WT Morph | Frame interpolation: Linear / Spectral |
| Load WT | File picker to load a custom wavetable |

---

## Mixer

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Osc 1 | Osc 1 level | 0–100 % |
| Osc 2 | Osc 2 level | 0–100 % |
| Osc 3 | Osc 3 level | 0–100 % |
| Sub | Sub-oscillator level | 0–100 % |
| Noise | Noise level | 0–100 % |

---

## Filters

Aconite has two independent filters. The controls below apply per filter (Filter 1
and Filter 2) unless noted. See [The two filters](/filters/the-two-filters/).

### Per-filter controls

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Model | Filter topology | Ladder / SVF / Bite / Multimode / Cascade / Diode / Acid |
| Cutoff | Corner frequency | 20 Hz – 20 kHz |
| Resonance | Q / emphasis at cutoff; approaches self-oscillation near maximum | 0–100 % |
| Drive | Input gain into the filter's nonlinearity | 0–100 % |
| Mode | Discrete response | LP / BP / HP / Notch (SVF, Bite); LP4 / LP2 / BP / HP / Notch (Multimode) |
| Morph | Continuous blend offset from the current Mode (mod-matrix destination) | Signed offset |
| Voicing | Internal saturation character (Ladder and Diode only) | Clean / Analog |
| Depth | Clipping amount under Analog voicing | 0–100 % |
| Env Amt | How much the filter envelope pushes the cutoff | ±6 octaves |
| Key Track | Cutoff tracking of played note | 0–100 % |
| Feedback | External resonant loop ("bark") | 0–100 % |

### Shared filter controls

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Filter Config | Routing topology + both models in one click | Single Ladder LP / Dual Serial / Parallel Stack / Ring Metallic / Stereo Split / Wide Pad (SVF) / Acid 303 / Cascade Scream / Bite Grit |
| Routing | Raw wiring between the two filters | Single / Serial / Parallel / Ring / Stereo / Wide |
| FB Sat | Harmonic warmth on both feedback loops | 0–100 % |

### Front-end high-pass filter

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Position | Where the HPF sits in the signal path | Off / Pre / Post |
| Freq | Corner frequency | 20–2000 Hz |
| Bite | Resonance at the corner | 0–100 % |
| Slope | Roll-off steepness | 6 / 12 / 24 dB/oct |

---

## Waveshaper

The waveshaper adds harmonics at a configurable point around the filter block.
See [the waveshaper section](/effects/effect-by-effect/) for the full guide.

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Place | Position in signal path | Pre-Filter / Post-Filter / Mid-Filter |
| Curve | Transfer-curve character | None / Soft / Tanh / Hard Clip / Cubic / Sine / Fold / Asym / Draw |
| Drive | How hard the signal hits the curve | 0–100 % |
| Mix | Dry/wet blend | 0–100 % |
| Trim | Input level ahead of the curve | 0–100 % |
| Bias | Asymmetry amount (Asym curve only) | 0–100 % |

---

## Envelopes

Aconite has six envelopes. Env 1 defaults to amplitude, Env 2 to filter cutoff;
Env 3–6 are free. See [Envelopes](/modulation/lfos/).

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Attack | Rise time | Time |
| Decay | Fall time to sustain | Time |
| Sustain | Hold level | 0–100 % |
| Release | Fall time after note-off | Time |
| Model | Curve character | ADS / Analogue / Digital / Vintage / Classic |
| Velocity | How much playing velocity scales the envelope output | 0–100 % |
| Keytrack | How much pitch scales the envelope times | Signed % |
| Cycle | Looping behaviour | Normal / Loop / One-shot |
| Curve (C) | S-shaped soft in/out applied to the contour | Off / On |
| Quantize (Q) | Stepped lo-fi shaping | Off / On |
| Env Restart | Retrigger start point | From Current / From Zero |

---

## LFOs and modulators

Six drawable LFOs plus the Step Sequencer and Performer. See
[LFOs](/modulation/lfos/) and the modulation
[Matrix](/modulation/matrix/).

### Drawable LFO controls (LFO 1–6)

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Rate | Speed | Hz (Free) or note division (Sync) |
| Sync | Lock to host tempo | Off / On |
| Phase | Start phase offset | 0–360° |
| Waveform | Preset shape seed | Sine / Triangle / Ramp / Saw / Square |
| A/B Morph | Crossfade between two drawn shapes | 0 (shape A) – 1 (shape B) |
| Retrig | Restart the LFO on each note-on | Off / On |
| One-shot | Play once then hold | Off / On |
| Slew | Output smoothing | 0–100 % |
| Bipolar | Centre output around zero | Off / On |

### Step sequencer controls

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Length | Active step count | 1–16 |
| Rate | Cycle speed | Free (Hz) or Sync |
| Direction | Playback order | Forward / Reverse / Ping-Pong / Random |
| Swing | Off-beat step delay | 0–100 % |
| Probability | Master per-step play chance; in Grid mode it multiplies each step's own Chance (then Conditional + Euclidean gate too) | 0–100 % |
| Gate | Note hold portion of each step | Short – Full |
| Mono | Collapse to single legato voice for slide | Off / On |

### Performer controls

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Rate | Cycle speed | Free or Sync |
| XFade | Ramp between step endings and starts | 0–100 % |

---

## Modulation matrix

The matrix has 8 per-voice slots plus an 8-slot bus tier. Each slot binds a
source, an optional Via transform, a destination, and a signed depth.

| Control | What it does |
|---------|-------------|
| Source | What drives this slot (LFOs, envelopes, velocity, macros, arp, MIDI CC 1–8, and more) |
| Via | Optional transform: Invert / Rectify / Quantize / Lag |
| Destination | What the slot modulates (any modulatable parameter) |
| Depth | Amount, positive or negative |

See [Modulation matrix](/modulation/matrix/) for the full source and destination lists.

### Macros

Four Macro knobs (Macro 1–4) are free-assignable matrix sources. Each routes to any
combination of destinations via the matrix and can be MIDI-learned to a hardware control.

---

## Arpeggiator and Step Sequencer

See [Arpeggiator](/performance/arpeggiator/) and
[Step Sequencer](/performance/step-sequencer/).

### Arpeggiator

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Mode | Note-walk order | Up / Down / UpDown / Random / As Played / Scale Up / Scale Down / Scale UpDown / Step Seq |
| Rate | Step speed | Free (Hz) or Sync |
| Gate | Note duration within each step | Short – Full |
| Octaves | Range stacking | 1–4 |
| Root | Scale root note | C – B |
| Scale | Key constraint | Chromatic, Major, Minor, Dorian, Phrygian, Lydian, Mixolydian, Locrian, Harmonic Minor, Melodic Minor, Pentatonic (Maj/Min), Blues, Whole Tone, Custom |
| Snap to key | Pull out-of-key notes to the scale | Off / On |
| Swing | Off-beat delay | 0–100 % |
| Probability | Per-step play chance | 0–100 % |
| Transpose | Diatonic pattern shift | Signed degrees |
| Chord | Fire all notes simultaneously instead of one at a time | Off / On |
| Strum Time | Spread between chord notes | ms or beat fraction |
| Strum Direction | Chord roll order | Up / Down / Up-Down / As Played / Random |

---

## Voice / Play

See [Voice and play](/performance/voice-and-play/).

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Play Mode | Polyphony style | Poly / Duo / Mono / Legato / Latch |
| Voices | Maximum concurrent voices | 1–16 |
| Note Priority | Which held note sounds in mono modes | Last / Highest / Lowest |
| Glide | Pitch slide time | Time |
| Glide Mode | When glide fires | Always / Fingered |
| Unison | Voices stacked per note | 1–8 |
| Detune | Unison pitch spread | 0–100 % |
| Spread | Unison stereo spread | 0–100 % |
| Voice Detune | Fixed per-voice pitch spread (analog character) | 0–100 % |
| Drift | Slow per-voice pitch wander | 0–100 % |
| Variance | Per-voice slop on cutoff, envelope times, PWM, glide | 0–100 % |
| Transient | Oscillator/filter state at note-on | Analog / Reset |
| Voice Pan | Static voice placement in the stereo field | L–R |
| Scene Mode | How the two scenes combine | Single / Layer / Split / Channel |

### MPE

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| MPE | Enable per-note expression | Off / On |
| Bend Range | Per-note pitch-bend range | 1–96 semitones |

---

## Master

See [The Master band](/master/master-band/).

| Control | What it does | Range / notes |
|---------|-------------|---------------|
| Gain | Output volume | dB |
| Clip | Output safety clipper (character stage) | Off / Soft / Hard |
| Limiter | Master brickwall limiter (zero-latency, last in the chain, output can never clip) | Off / On (default Off) |
| Limiter Ceiling | Level the limiter holds output below | -3 to 0 dBFS (default -1.0) |
| Limiter Release | Gain-recovery time between peaks | 30 to 500 ms (default 100) |
| Quality | Internal oversampling rate | 1× / 2× / 4× / 8× |
| Auto-HQ | Use maximum quality on export regardless of Quality setting | Off / On |
| Glue | Bus saturation amount | 0–100 % |
| Warmth | Bus saturation character | 0–100 % |
| Sag | Power-supply sag model | 0–100 % |
| Depth | Sag compression depth | 0–100 % |
| Time | Sag recovery time | Time |

---

## Effects

The FX bus carries twelve effects in a fully re-orderable chain. Each effect has
a **Mix** (dry/wet) and can run as an **Insert** or **Send**. See
[Effect by effect](/effects/effect-by-effect/).

| Effect | Key controls |
|--------|-------------|
| Chorus | Model (BBD I / BBD II / BBD I+II / Ensemble / Spatial / Compact / Clean / Flanger), Mix, Rate, Depth, Width, Tone, Feedback, Sync |
| Phaser | Mix, Rate, Depth, Feedback, Stages (2/4/6/8), Width, Sync |
| Delay | Mix, Time, Feedback, Tone, Spread, Ping-Pong, Character (Clean / Tape / BBD), Sync |
| Multi-tap | Mix, Taps (1–6), per-tap Time / Level / Pan / EQ, Feedback, Tone |
| Reverb | Algorithm (Plate / Room / Hall), Mix, Size, Decay, Damp, Pre-Delay, Tone, Mod Depth, Er Level |
| Tape | Mix, Drive, Speed (7.5 / 15 / 30 ips), Character, Bump, Bias, Wow, Hiss, Reproduce EQ, Machine profile, Engine (Clean / Authentic) |
| Distortion | Drive, Mode (Tube / Transistor / Diode / Fuzz / Octave), Tone, Bias, Sag, Output, Mix |
| Bit-crusher | Mix, Bits (1–16), Rate, Dither, Tone |
| Compressor | Mix, Mode (VCA / FET / Opto / Grit), Threshold, Ratio, Attack, Release, Knee, Makeup, Drive, Tone, Amount |
| Transient | Mix, Attack, Sustain, Output |
| EQ | Mix, Model (Clean / Console / Passive), Low (freq / gain), Mid (freq / gain / Q), High (freq / gain), Tilt, per-band channel (Stereo / Mid / Side) |
| Stereo imager | Width, Balance, Mono< |
