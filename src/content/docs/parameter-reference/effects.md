---
title: "Effects"
description: "Lookup reference for every control on the twelve effects: chorus, phaser, delay, multi-tap delay, reverb, tape, distortion, bit-crusher, compressor, transient shaper, EQ, and stereo imager."
---

A terse lookup for every effect control. The FX bus carries twelve effects in a
re-orderable chain. See [Using the FX rack](/aconite-manual/effects/using-the-rack/)
and [Effect by effect](/aconite-manual/effects/effect-by-effect/).

## Shared per-effect controls

Every effect exposes these. Individual effect tables below omit them.

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Mix | Dry/wet blend; 0 is fully dry (bypassed). | 0 to 100 % |
| Enable | Hard bypass: skips the effect and kills its tail. | Off / On |
| Slot | The effect's position in the chain (the bus sorts by slot). | chain position |
| Routing | Insert processes in-line (use Mix to blend); Send runs in parallel on a return bus (dry stays untouched, Return sets the wet amount). | Insert / Send |
| Return | Level of the wet signal returned in Send mode (no effect in Insert mode). | 0 to 100 % |

## Chorus

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Model | The chorus or ensemble circuit emulated. | BBD I / BBD II / BBD I+II / Ensemble / Spatial / Compact / Clean / Flanger |
| Dim Mode | Spatial preset button: fixed depth and rate combinations from subtle widening to deep swirl. | 1 to 4 |
| Rate | Speed of the modulation LFO (Compact, Clean and Flanger models only; the vintage models run at their fixed authentic rate). | Hz (Free) or note division (Sync) |
| Depth | How far the LFO swings the delay time (Compact, Clean and Flanger models only). | 0 to 100 % |
| Feedback | Routes the wet output back into the delay lines, deepening the sweep into a resonant comb (Clean and Flanger models only). | 0 to 100 % |
| Width | Stereo spread of the effect: narrows toward mono at zero, widens as you raise it. | 0 to 100 % |
| Tone | Brightness of the wet voice via the reconstruction low-pass (inert on the Clean model). | 0 to 100 % |
| Sync | Free runs the modulation at the Rate knob's Hz; Sync locks it to the host tempo (modern models only). | Free / Sync |

## Phaser

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Rate | Speed the LFO sweeps the all-pass notches through the spectrum. | Hz (Free) or note division (Sync) |
| Depth | How wide a frequency range the notches sweep across. | 0 to 100 % |
| Feedback | Regeneration: sharpens the notches into resonant, whistling peaks as it is raised. | 0 to 100 % |
| Stages | Number of all-pass stages, setting how many notches sweep (more is deeper, more resonant). | 2 / 4 / 6 / 8 |
| Width | Offsets the left and right LFO phase, spreading the phasing across the stereo field. | 0 to 100 % |
| Sync | Free runs the sweep at the Rate knob's Hz; Sync locks it to the host tempo. | Free / Sync |

## Delay

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Time | Delay time of the repeats (set by the note division when Sync is on). | ms |
| Feedback | How much of each echo feeds back: low is a slap, high is a long trail (Tape and BBD allow self-oscillation). | 0 to 98 % |
| Tone | Damps the highs in the feedback path so each repeat darkens as it decays. | 0 to 100 % |
| Spread | Offsets the right-channel delay time from the left for a wider image (no effect with Ping-Pong on). | 0 to 100 % |
| Ping-Pong | Bounces the repeats alternately between left and right for a widening stereo echo. | Off / On |
| Character | Colour of the repeats: Clean is pristine, Tape adds wow and saturation, BBD is darker and grittier. | Clean / Tape / BBD |
| Time Mode | How time changes are handled: Slew glides the delay time (tape-style pitch bend); Crossfade retimes without pitch artefacts. | Slew / Crossfade |
| Wow | Tape or BBD pitch wobble on the repeats (only audible with the Tape or BBD character). | 0 to 100 % |
| Drive | Saturation driven into the feedback loop (only audible with the Tape or BBD character). | 0 to 100 % |
| Sync | Free runs the delay at the Time knob's ms; Sync locks the repeats to a host-tempo note division. | Free / Sync |

## Multi-tap delay

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Taps | Number of active taps read from the shared delay line, each with its own time, level and pan. | 1 to 6 |
| Feedback | Global feedback amount: how much of the output is routed back into the line to regenerate the taps. | 0 to 98 % |
| Tone | A low-pass in the delay path that progressively darkens each pass. | 0 to 100 % |
| FB HP | High-pass on the feedback path: thins the regenerated tail so long repeats stay clear. | 0 to 100 % |
| FB Mode | Feedback source: Tap regenerates from the dedicated feedback tap; Normal re-injects the summed taps for a lusher wash. | Tap / Normal |
| Rot Rate | Graphic-rotate rate: slowly spins each tap's gain and pan around the pattern (0 is static). | 0 to 8 Hz |
| Rot Depth | How far the graphic rotate swings the gain and pan of each tap. | 0 to 100 % |
| Mod Rate | Delay-modulation LFO rate: wobbles each tap's read position for chorus and pitch shimmer (0 is off). | 0 to 20 Hz |
| Mod Depth | Depth of the delay-modulation wobble. | 0 to 100 % |
| Direct | A dry send blended into the wet and output sum, independent of Mix. | 0 to 100 % |
| Output | Level of the wet (tapped) signal before it sums with the dry. | 0 to 200 % |

### Per-tap controls (each of the up to six taps)

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Level | This tap's level in the pattern (0 mutes just this tap). | 0 to 100 % |
| Pan | This tap's stereo position. | L to R |
| Time | This tap's delay time (its position in the rhythmic pattern). | ms |
| EQ Type | This tap's own EQ band shape. | Off / Low Shelf / Bell / High Shelf / LP / HP |
| EQ Freq | Centre or corner frequency of this tap's EQ band. | roughly 80 Hz to 18 kHz |
| EQ Gain | Cut or boost of this tap's EQ band. | plus or minus 18 dB |
| Sync | Free runs this tap at the Time knob's ms; Sync locks it to a host-tempo note division. | Free / Sync |
| Enable | Whether this tap is active in the pattern. | Off / On |

### Dedicated feedback tap (used when FB Mode is Tap)

| Control | What it does | Range / values |
|---------|--------------|----------------|
| FB Gain | Level of the regenerated repeat. | 0 to 100 % |
| FB Pan | Stereo position of the regenerated repeat. | L to R |
| FB Time | Delay time of the regenerated repeat. | 1 to 4000 ms |
| FB EQ Type | EQ band shape on the feedback tap. | Off / Low Shelf / Bell / High Shelf / LP / HP |
| FB EQ Freq | Frequency of the feedback tap's EQ band. | roughly 80 Hz to 18 kHz |
| FB EQ Gain | Cut or boost of the feedback tap's EQ band. | plus or minus 18 dB |

## Reverb

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Algorithm | Reverb space model: Plate is dense and bright, Room is short and tight, Hall is long with wide early reflections. | Plate / Room / Hall |
| Decay | Tail length: how long the reverb rings out (the top extends toward a near-frozen tail). | 0 to 100 % |
| Damping | How fast the highs die relative to the lows, from bright and glassy to dark and soft. | 0 to 100 % |
| Tone | Brightness of the reverb input, rolling off the highs before the tank (Plate only). | 0 to 100 % |
| Size | Scales the whole space, from a small tight room up to a large cavernous hall. | small to large |
| Pre-Delay | A gap of dry signal before the reverb starts, pushing the tail back off the source. | ms |
| Mod Depth | Slow pitch modulation of the tail, smearing metallic ringing into a lusher decay (Room and Hall). | 0 to 100 % |
| Er Level | Level of the early reflections versus the diffuse tail, adding room definition (Hall only). | 0 to 100 % |

## Tape

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Drive | How hard the signal is pushed into the tape saturation (a character control, not a volume; makeup keeps loudness steady). | 0 to 100 % |
| Speed | Tape transport speed: faster is cleaner with tighter low end, slower adds head bump and colour. | 7.5 / 15 / 30 ips |
| Bump | Low-frequency resonance from the tape head, adding weight and thump (stronger at slower speeds). | 0 to 100 % |
| Bias | Record bias level: correct bias is clean, underbiasing adds grit and rolls off the top, overbiasing dulls and compresses. | 0 to 100 % |
| Wow | Wow and flutter: slow pitch drift plus faster warble from the transport (0 is no pitch modulation). | 0 to 100 % |
| Hiss | Level of the tape noise floor, from silent up to an audible vintage hiss (louder at slower speeds). | 0 to 100 % |
| Curve | Saturation hardness: Gentle is a subtle warmth; Aggressive pushes far harder for a crunchy character. | Gentle / Aggressive |
| Reproduce EQ | Playback EQ standard: NAB and IEC apply their replay curves; Off bypasses the standard for a flatter response. | Off / NAB / IEC |
| Engine | Clean is a lighter tape colour; Authentic engages the full nonlinear head and bias modelling. | Clean / Authentic |
| Machine | Loads a documented tape-machine profile (head bump, bias, EQ and saturation as a set); Custom leaves the controls free. | Custom / profiles |

## Distortion

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Drive | Input gain pushed into the clipper: low is a gentle warmth, high slams the stage into hard saturation. | 0 to 100 % |
| Mode | Clipper archetype. | Tube / Transistor / Diode / Fuzz / Octave |
| Tone | Post-clip low-pass taming the fizz: down darkens and smooths, up leaves it bright and open. | 0 to 100 % |
| Bias | Waveshaping asymmetry: centre is symmetric (odd harmonics); moving away adds even-harmonic, tube-like warmth. | 0 to 100 %, centre neutral |
| Sag | Emulated power-supply sag: the stage breathes and compresses under loud transients, softening attacks. | 0 to 100 % |
| Output | Output makeup gain after the clipper (unity at centre): compensate for the level change heavy drive introduces. | 0 to 200 % |

## Bit-crusher

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Bits | Bit depth of the quantizer: high is clean, lower steps quantize the signal coarsely for gritty digital distortion. | 1 to 16 |
| Rate | Sample-rate reduction: holds each sample longer to fake a lower rate, folding aliasing back in (fully up is transparent). | 0 to 100 % |
| Tone | A gentle post low-pass taming the harsh aliasing and quantization fizz (fully up is off). | 0 to 100 % |
| Dither | Adds triangular dither, trading the correlated buzz of raw bit-reduction for a smoother, noisier grain. | Off / On |

## Compressor

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Mode | Compressor circuit character. VCA is clean glue; FET is fast and aggressive; Opto is smooth and program-dependent; Grit adds a driven waveshaper. | VCA / FET / Opto / Grit |
| Amount | Grit-mode one-knob macro: turns threshold down, ratio up, drive up and makeup up together (Grit mode only). | 0 to 100 % |
| Threshold | Level above which compression starts: lower it to catch more of the signal. | -60 to 0 dB |
| Ratio | How firmly the signal is held above the threshold: gentle at low ratios, near-limiting up high. | 1:1 to 20:1 |
| Attack | How fast the compressor clamps down once the signal crosses the threshold. | 0.02 to 200 ms |
| Release | How fast the gain recovers after the signal drops back. | 5 to 5000 ms |
| Knee | Width of the transition around the threshold: 0 is a hard corner, wider eases compression in. | 0 to 24 dB |
| Makeup | Manual output gain to make up the level lost to gain reduction (disabled when Auto makeup is on). | -12 to 24 dB |
| Auto Makeup | Auto keeps output level roughly constant as you compress harder; Manual leaves Makeup under your control. | Auto / Manual |
| Drive | Drives the waveshaper in the gain path harder for more harmonic dirt (Grit mode only). | 0 to 100 % |
| Tone | Tilts the brightness of the Grit-mode saturation around a mid pivot (Grit mode only). | 0 to 100 %, centre flat |

## Transient shaper

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Attack | Reshapes the onset without a threshold: positive makes hits punchier, negative softens them (centre is neutral). | signed, centre neutral |
| Sustain | Reshapes the body and tail without a threshold: positive lengthens and lifts, negative tightens and dries (centre is neutral). | signed, centre neutral |
| Output | Output makeup gain on the shaped signal (unity at centre). | 0 to 200 % |

## EQ

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Model | EQ voicing: Clean is transparent, Console adds desk-style colour, Passive adds the classic passive tube-EQ curve interaction. | Clean / Console / Passive |
| Low Freq | Corner frequency of the low shelf. | Hz |
| Low Gain | Boost or cut of the low shelf. | plus or minus dB |
| Mid Freq | Centre frequency of the sweepable mid bell. | Hz |
| Mid Gain | Boost or cut at the mid bell's centre. | plus or minus dB |
| Mid Q | Width of the mid bell: low Q is broad, high Q is a narrow, surgical notch or boost. | narrow to broad |
| High Freq | Corner frequency of the high shelf. | Hz |
| High Gain | Boost or cut of the high shelf. | plus or minus dB |
| Tilt | Tilts the whole spectrum around a centre pivot in one move: negative darkens, positive brightens. | signed |
| Channel | Which part of the stereo image each band affects (per band: Low, Mid, High). | Stereo / Mid / Side |

## Stereo imager

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Width | Stereo width via mid/side side gain: mono at zero, unity at centre, wide at maximum. | mono to wide |
| Balance | Mid/side energy tilt: all centre at one end, all sides at the other. | signed |
| Mono | Sums energy below this frequency to mono (bass-mono); 0 is off. | 0 to 500 Hz |
