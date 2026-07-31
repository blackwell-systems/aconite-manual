---
title: Effect by effect
description: A reference to each of the twelve effects — what it's for, its key controls, and its hero visualization.
---

Aconite ships **twelve effects**: Chorus (8 models), Phaser, Delay (3 voicings),
Multi-tap / SuperTap (with per-tap tempo sync), Reverb (Plate / Room / Hall), Tape,
Distortion (5 modes), Bit-crusher, Compressor (4 topologies), Transient shaper, EQ
(3 voicings), and Stereo Imager. This chapter covers each one: what it's for, its
key controls, and its hero visualization.

For how the rack chain works as a whole — enabling slots, reordering, insert vs
send — see [Using the FX rack](/aconite-manual/effects/using-the-rack/).

---

### Chorus

Eight distinct models, each voiced after a specific classic rather than one generic
engine with a relabelled knob. You pick a model and the controls reorganise to show
only what suits it — there is no clutter from knobs that don't apply.

**BBD I** and **BBD II** capture bucket-brigade delay character: a soft companding
saturation and a warm reconstruction low-pass give repeats a gentle, slightly
rounded quality. **BBD I+II** layers both. **Ensemble** is a rich, multi-voice
string-section style based on classic ensemble chips. **Spatial** widens the image
without obvious pitch modulation. **Compact** gives you a four-way **Dim Mode**
selector that steps through tonal and depth presets for quick, decisive choices.
**Clean** is a transparent, pristine chorus. **Flanger** uses a short delay line for
a metallic, resonant comb sweep — feedback sharpens it to a hard jet effect.

Both Clean and Flanger add a **Feedback** knob. All models support tempo sync via a
**Sync** toggle and **Division** selector.

**Key controls:** Model, Mix, Width, Tone, Rate, Depth, Feedback (Clean / Flanger),
Dim Mode 1–4 (Compact), Sync + Division.

---

### Phaser

A cascade of all-pass stages swept by an LFO, summed against the dry signal to
produce a comb of moving notches. As the LFO sweeps the notch positions, you hear
the characteristic whooshing sweep — silky at low feedback, sharp and nasal with
feedback turned up.

**Feedback** controls how pronounced the notches are: low values give a transparent,
wide sweep; high values make the peaks and notches ring out. **Stages** sets the
number of all-pass sections (2, 4, 6, or 8): more stages mean more notch pairs and
a deeper, more complex sweep character. **Width** applies a per-channel LFO phase
offset to open the stereo image.

**Key controls:** Mix, Rate, Depth, Feedback, Stages (2 / 4 / 6 / 8), Width,
Sync + Division.

---

### Delay

A stereo delay with smooth, pitch-correct time adjustment and three character
voicings.

**Clean** is a transparent digital delay — repeats at exactly the level you set,
with no added colour. **Tape** adds wow and flutter for a drifting, organic quality,
applies saturation inside the feedback loop so repeats warm up as they accumulate,
and adds a head-bump lift in the low end. **BBD** models bucket-brigade character:
companding compression, dark reconstruction filtering, and a feedback high-pass so
repeats thin out as they decay — classic analogue multi-repeat.

When you change the delay time, you choose how it behaves: **Slew** pitches the
repeats up or down as time shifts (the tape-machine pitch glide), while
**Crossfade** changes seamlessly with no pitch artifact. **Tone** damps the
feedback path, darkening repeats as they decay. **Ping-pong** bounces echoes across
the stereo field. **Spread** sets the stereo width of the echo itself.

**Key controls:** Mix, Time, Feedback, Tone, Spread, Ping-pong, Character (Clean /
Tape / BBD), Sync + Division.

---

### Multi-tap delay (SuperTap)

A rhythmic multi-tap delay that reads up to six independent taps off one delay
line. Each tap has its own time, level, pan, and three-band EQ, so you can sculpt a
complete rhythmic pattern where each repeat lives at its own place in the stereo
field with its own tonal character.

A dedicated **feedback tap** sits separately, with its own time, gain, pan, and EQ.
It controls the regeneration independently from the main taps, letting you dial in
exactly how the pattern repeats and decays. Feedback can regenerate from the
dedicated tap alone or from the summed output of all taps — auto-normalised so
adding more taps doesn't send the feedback runaway.

Per-tap tempo sync works independently: each tap can run **free** (in milliseconds)
or lock to a note division of the host tempo, so a syncopated multi-tap pattern
can lock precisely to the grid. **Rotate** sweeps the pans of all taps together
for a spinning, animated stereo image. **Delay mod** adds subtle pitch drift to the
taps. A **Direct** dry send and **Output** makeup sit alongside the main mix.

The hero visualisation is a semicircular **pan graph** that plots each tap by its
time and pan around a half-disc — you can see the rhythmic pattern and stereo spread
at a glance, with per-tap editing rows below.

This effect is **insert-only** — it cannot run as a send/return.

**Key controls:** Mix, Taps (1–6), Feedback, Tone, Feedback mode (Tap / Normal),
rotate rate/depth, delay-mod rate/depth, Direct, Output; per tap: Time or
Sync + Division, Level, Pan, Enable, EQ type / frequency / gain; feedback tap:
Time or Sync + Division, Gain, Pan, EQ.

---

### Reverb

One reverb with three algorithms, each suited to a different acoustic context.

**Plate** produces a lush, dense, diffuse tail — the kind of reverb most people hear
when they think "reverb." An input **Tone** control shapes how bright the signal
enters the plate. **Room** is a feedback-delay-network room with adjustable
**Mod Depth** for tail lushness — more modulation gives the reverb a shimmer.
**Hall** is a large concert-hall wash with prominent early reflections (**Er Level**)
and warm, frequency-dependent decay that naturally darkens at the tail — the algorithm
the sound takes the longest to decay on.

Near-maximum **Decay** on any algorithm yields an effectively infinite tail: the
reverb becomes a pad in itself, sustaining long past any note you play. **Pre-Delay**
pushes the reverb onset back in time, keeping the dry attack clean before the room
opens up.

**Key controls:** Algorithm (Plate / Room / Hall), Mix, Size, Decay, Damp,
Pre-Delay, Tone (Plate), Mod Depth (Room + Hall), Er Level (Hall).

---

### Tape

Tape saturation and character, with controls that go well beyond a single warmth
knob. The heart of the effect is the **Engine** switch: **Clean** applies a fitted
soft-clip saturation curve that captures the gentle harmonic profile of tape without
modelling every physical detail — ideal when you want warmth without CPU overhead.
**Authentic** engages a hysteresis model and physics-based head loss, which responds
more dynamically to transients and captures the way real tape compresses and
saturates differently at the core versus the surface.

**Speed** (7.5, 15, or 30 ips) sets the character of the tape machine: slower speeds
produce deeper wow and flutter and a higher hiss floor; faster speeds are cleaner
and tighter. **Character** switches between a gentler or more aggressive saturation
curve. The **Reproduce EQ** applies the standard playback equalization curves:
**NAB** for a warmer, low-end-lifted sound, and **IEC** for a brighter, more open
response. Switching it off leaves the frequency response flat.

Additional controls shape the analogue physics: **Bump** raises the low-end head
resonance, **Bias** shifts the tape's operating point for subtle colouration, **Wow**
and **Flutter** add the pitch drift characteristic of mechanical transport, and
**Hiss** sets the hiss floor. **Machine profile** selects between voicing presets
based on different machine characters.

**Key controls:** Mix, Drive, Speed (7.5 / 15 / 30 ips), Engine (Clean /
Authentic), Character (Gentle / Aggressive), Bump, Bias, Wow, Flutter, Hiss,
Reproduce EQ (Off / NAB / IEC), Machine profile.

---

### Distortion

A front-and-centre overdrive and distortion unit with five distinct clipping modes.
Drive pushes the signal into the mode-selected curve; **Tone** tames fizz at the
top; **Output** sets the post-distortion level after any makeup.

Each mode has a different harmonic character:

- **Tube** — warm asymmetric soft-clip, emphasising even harmonics for a thick,
  musical overdrive reminiscent of a pushed tube amp.
- **Transistor** — aggressive hard clip, rich in odd harmonics, more abrasive and
  cutting than Tube.
- **Diode** — a soft-clip topology in the style of classic overdrive pedals: slightly
  asymmetric, with a rounded top that retains articulation.
- **Fuzz** — cascaded high-gain stages that push toward a near-square wave, with the
  dense harmonic content of a germanium or silicon fuzz.
- **Octave** — a full-wave rectification that shifts the fundamental up an octave and
  produces a cocked-wah-style tonal character.

**Bias** injects a DC offset into the signal before the clipper, which unbalances
the positive and negative half-cycles and introduces even harmonics on any mode.
**Sag** models the power supply rail collapsing under load — the amp breathes and
compresses dynamically with the signal level, the way an overdriven amp behaves when
it runs out of headroom.

The hero visualisation shows a **transfer curve** that reacts live to Drive and Bias
settings, alongside the shaped waveform — so you can see the clipping action as well
as hear it.

**Key controls:** Drive, Mode (Tube / Transistor / Diode / Fuzz / Octave), Tone,
Bias, Sag, Output, Mix.

---

### Bit-crusher

Two independent lo-fi operations that you can engage separately or together.

**Bit-depth reduction** uses a mid-tread quantizer to reduce the word length of the
signal down to around one bit at the extreme end. The result is a stepped, gritty,
aliased texture — subtle at 14–15 bits, obvious and aggressive below 8. An optional
**Dither** toggle adds TPDF noise before quantization, which trades the harsh
quantization distortion for a gentler hiss, preserving perceptual detail in quiet
passages the way it does in professional digital audio mastering.

**Sample-rate reduction** is a sample-and-hold decimator that drops the effective
sample rate, generating aliasing deliberately for the character. Unlike most
anti-aliasing in the signal path, this aliasing is the point — the staircase
artefacts and foldback produce the crunchy, digital lo-fi texture of early samplers
and video game sound hardware.

A gentle post **Tone** control rolls off the harshest top end when the aliasing gets
too aggressive, so you can keep the crunch without the ice-pick frequencies.

**Key controls:** Mix, Bits (1–16), Rate, Dither (Off / On), Tone.

---

### Compressor

Four selectable compression modes, each a different circuit topology with its own
ballistics and colour:

- **VCA** — clean feed-forward compression with no added harmonics. The fastest and
  most neutral mode; ideal for transparent bus glue and gain control without changing
  the sound's character.
- **FET** — fast, feed-back compression in the style of the classic 1176 limiter. The
  gain-reduction circuit introduces saturation that increases with heavier compression,
  adding brightness and grip as the compressor works harder. Great on transient-heavy
  material.
- **Opto** — an opto-coupler style compressor with a fixed ~10 ms attack and a
  two-stage, program-dependent release. The release responds to the signal itself: it
  moves quickly for brief peaks, then settles slowly for sustained material. Warm and
  gentle, flattering on melodic content.
- **Grit** — a pumping, characterful mode that puts a real waveshaper in the gain
  path for distortion that varies with how hard the compressor is working. A single
  **Amount** knob scales threshold, ratio, drive, and makeup together, making it easy
  to go from light squeeze to heavily pumped saturation in one move. **Tone** tilts
  the compressed signal brighter or darker.

The hero visualisation shows a **live gain-reduction meter** alongside a
**transfer-curve plot** with a moving dot that follows the operating point as you
play, plus a scrolling gain-reduction trace — so you can see compression happening
in real time rather than reacting to a static display.

**Key controls:** Mix, Mode (VCA / FET / Opto / Grit), Threshold, Ratio, Attack,
Release, Knee, Makeup, Auto/Manual makeup, Amount (Grit), Drive (Grit), Tone (Grit).

---

### Transient shaper

A threshold-free transient designer that reshapes a sound's dynamic envelope without
any gain-reduction threshold to set. There are only two controls that matter:
**Attack** and **Sustain**.

**Attack** controls the onset of the sound — drag it toward punchier and transients
sharpen and snap forward; drag it toward softer and the attack becomes more rounded,
blending into the texture. **Sustain** controls the body and tail — longer stretches
the decay out, tighter shortens and tightens the body so the sound clears more
quickly.

Both channels are processed with the same gain so the stereo image never shifts
under compression. An **Output** level sits at the end for makeup.

The transient shaper works well on plucks, mallets, percussion, and any sound where
you want to control how much of the attack vs. sustain reaches the listener without
touching EQ or compression thresholds.

**Key controls:** Mix, Attack (softer ↔ punchier), Sustain (tighter ↔ longer),
Output.

---

### Parametric EQ

A three-band parametric EQ — low shelf, mid bell, high shelf — plus a single
**Tilt** knob for a whole-patch brighter/darker sweep. Three voicings change how the
bands behave:

- **Clean** — textbook parametric response. The mid bell's **Q** is exposed directly,
  so you set the bandwidth yourself.
- **Console** — the mid Q is derived from the gain amount rather than set manually.
  Wide on cuts, tight on boosts. This proportional-Q behaviour matches the feel of
  classic mixing desk EQs (API, Neve style), where the bandwidth tracks the amount.
- **Passive** — a summed-shelf voicing: a broad boost pairs with a resonant dip just
  above it, giving each band a more complex, musical shape. The high band becomes a
  tube-influenced bell rather than a straight shelf.

Each band has an independent **channel** selector — Stereo, Mid, or Side — so you
can, for example, EQ only the centre of the stereo field without touching the sides,
or tilt only the Side content darker to focus the mix.

The hero visualisation is a **live spectrum analyser** with the EQ response curve
overlaid and draggable band nodes — drag a node in the display to move its frequency
and gain together, for a direct, visual approach.

**Key controls:** Mix, Model (Clean / Console / Passive), Low frequency / gain, Mid
frequency / gain / Q, High frequency / gain, Tilt, per-band channel (Stereo / Mid /
Side).

---

### Stereo imager

Width and image control for the final output — almost always the last slot in the
chain, shaping the finished mix rather than feeding into further effects.

**Width** narrows or widens the side signal. At centre it is unity; pull it below
centre to mono; push it above to exaggerate the stereo spread. **Balance** shifts
energy between the centre (mid) and the sides without changing Width, useful for
correcting a mix that is too centred or too diffuse. **Mono<** is a bass-mono
crossover: below the set frequency, the signal is summed to mono, keeping kick and
bass centred and solid in mono playback while the top end remains wide.

The hero visualisation is a **live goniometer** — the classic X–Y stereo scope — with
a correlation meter below it. A perfectly mono signal draws a vertical line; a wide
stereo signal fills a broad ellipse; out-of-phase content appears as a horizontal
smear. The correlation meter gives a quick numeric read of how compatible the signal
is with mono playback.

This effect is **insert-only** — it cannot run as a send/return.

**Key controls:** Width, Balance, Mono<.

---

## The voice-path waveshaper

The waveshaper is not a rack effect — it lives inside each voice, in the signal path
around the [filter](/aconite-manual/filters/the-two-filters/), and processes audio
per voice before the amp stage. It is documented here because it is the main
distortion tool that works at the voice level, distinct from the rack's Distortion
slot (which processes the post-mix stereo bus) and the master-band saturation (which
applies to the final output).

The waveshaper adds harmonics by passing the voice signal through a fixed transfer
curve, from gentle saturation to hard clipping, wavefolding, and a fully hand-drawn
shape.

**Placement around the filter.** A **Place** selector sets where in the signal path
the shaper sits:

- **Pre-filter** — the shaper distorts the raw oscillator mix before the filter
  carves it. Sweeping the filter then sweeps which generated harmonics survive: a
  bright, aggressive "distort then EQ" placement.
- **Post-filter** — after the filter (the default). The filter shapes the waveform
  first, including its resonant peak, then the shaper distorts the result. This makes
  resonance sing and self-compress, and tames near-self-oscillation — the classic
  "synth scream" placement.
- **Mid-filter** — between the two filters in Serial routing. The first filter
  pre-shapes, the shaper distorts, the second filter post-carves. In routings without
  a clean between-filter slot it falls back to Post-filter.

**Curves.** A **Curve** selector chooses the transfer shape:

| Curve | Character |
|-------|-----------|
| **None** | Pure passthrough; the shaper is inert and all controls step aside. |
| **Soft** | Gentle rational soft-clip: subtle warmth and thickening. |
| **Tanh** | Smooth symmetric saturation: classic overdrive that rounds the peaks. |
| **Hard Clip** | Brick-wall clip: aggressive, buzzy, rich in odd harmonics. |
| **Cubic** | Polynomial soft-knee: musical drive between Soft and Hard. |
| **Sine** | Saturates, then folds once the input passes its peak: hollow, wavefolder-lite, adds upper partials. |
| **Fold** | Triangle wavefolder: metallic, West-Coast timbres, harmonics that brighten with drive. |
| **Asym** | Asymmetric curve with a **Bias** control: even harmonics, tube-like colour. |
| **Draw** | A fully hand-drawn transfer curve: any shape you draw becomes the waveshaping function. |

Peaks stay level-matched as you push harder, so switching curve or raising drive
does not jump the loudness.

**Key controls:** Curve, Place (Pre-filter / Post-filter / Mid-filter), Drive, Mix,
Trim, Bias (Asym curve only).

**The Draw curve.** Selecting **Draw** turns the shaper's display into an interactive
transfer-curve editor. A live waveform preview shows how the curve transforms the
signal in real time, and a dot rides the curve to show the input-to-output mapping
as audio passes through. You build the curve with breakpoints: add them by clicking,
drag them to reshape, double-click to remove. Drawing tools:

- **Sym** — locks odd symmetry so both halves of the curve mirror each other; you only
  need to draw one side.
- **Spline** — smooth curve segments between breakpoints, rather than straight
  piecewise segments.
- **Snap** — snaps breakpoints to a grid for clean, deliberate shapes.
- **Reset** — returns the curve to the identity line (a straight diagonal, no
  shaping) so you can start fresh.

The drawn shape is saved with the patch and is shared across both scenes. The same
drawing interface appears for drawable LFOs, envelope contours, step-sequencer Curve
Lanes, and the Performer — so the feel is consistent everywhere a curve can be
hand-drawn in Aconite.
