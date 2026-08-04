---
title: Additive oscillator
description: "Build an oscillator from its individual harmonics: the drawable 32-bar spectrum, starting-point presets, brightness tilt, evolving group envelopes, and analog character."
---

<!-- SCREENSHOT: a labelled shot of the Additive spectrum panel (the 32 harmonic
bars, presets, tilt control, and tools) will be added here once the panel art is
finalised. -->

Most oscillators hand you a finished waveform: you pick **Saw**, **Square**,
**Triangle**, and the shape of the tone is decided for you. The **Additive**
oscillator turns that around. Instead of choosing a ready-made wave, you build
the tone up from its individual **harmonics**, one partial at a time, and see the
whole harmonic spectrum laid out in front of you. Every waveform is really just a
particular recipe of harmonics; Additive lets you write that recipe yourself.

That means direct control over the timbre at its source. Want a saw with the
third harmonic pulled down and the seventh boosted? Draw it. Want only the first
few partials for a soft, hollow tone? Draw that instead. Nothing is off-limits,
because you are shaping the spectrum itself rather than reaching for the nearest
preset shape.

## Additive versus Wavetable

Additive and the [Wavetable](/sources/oscillators/#special-oscillators)
oscillator both give you more than a single fixed wave, but they get there in
opposite ways:

- **Wavetable** morphs *through* a set of pre-made waves. You sweep the
  **Position** control and the tone glides from one finished shape to the next.
  The waves already exist; you choose where along them to sit.
- **Additive** lets you *draw* the harmonics live. There is no pre-made set to
  move through: the spectrum is exactly what you put there. You are building the
  wave, not selecting from a shelf of them.

Reach for Wavetable when you want to sweep between characterful shapes over time.
Reach for Additive when you want to design one specific harmonic tone by hand.

## Two tabs: Spectrum and Analog

The additive editor is split into two tabs. The **Spectrum** tab is where you draw
the 32 bars and set the base shape, tilt, stretch, noise, partial groups, and the
shaping tools: everything that decides the harmonic recipe itself. The **Analog**
tab holds the parts that add movement and life over that recipe: the per-partial
life controls (drift, variance, drive) and the per-group envelope faders.

Draw the tone on the Spectrum tab first, then move to the Analog tab to set it
breathing.

## The drawable spectrum

The heart of the Additive oscillator is a row of **32 harmonic bars**. The
left-most bar is the fundamental (the pitch you play); each bar to the right is
the next harmonic up. The height of a bar is how much of that harmonic is present
in the tone. Drag a bar up to bring that partial forward; drag it down to thin it
out or silence it entirely.

Building a spectrum bar by bar from silence is possible, but you will usually
start from a familiar shape and sculpt from there. The **starting-point presets**
fill all 32 bars with a classic recipe in one click:

- **Saw**: every harmonic present, falling off gently. Bright and full, the
  richest starting point.
- **Square**: odd harmonics only, hollow and woody.
- **Triangle**: odd harmonics again, but falling away much faster: softer and
  rounder than a square.
- **Sine**: just the fundamental, nothing above it. The cleanest possible
  starting canvas.
- **Flat**: every harmonic at equal height. Not a musical waveform on its own,
  but the most neutral base to draw on.

A preset is a *starting point*, not a lock. Once the bars are filled, draw on top
of them freely: pick **Saw**, then pull down a couple of harmonics that feel
harsh, or nudge one partial up to add a formant-like peak. The preset gets you in
the neighbourhood; your drawing does the rest.

## Tilt (brightness)

Adjusting 32 bars by hand is precise but slow when all you want is "a bit
brighter" or "a bit darker". **Tilt** does that in one move: it slopes the whole
spectrum at once, lifting the high harmonics relative to the low ones (brighter)
or the low relative to the high (darker), without you having to touch a single
bar.

Tilt also keeps the tone **full-bandwidth above the range you drew**. The 32 bars
cover the lower, most character-defining part of the spectrum; Tilt lets the tone
stay open and airy above them rather than falling off a cliff at the last bar. In
practice it is the fastest way to match the Additive oscillator's overall
brightness to the rest of a patch: draw the character you want in the bars, then
use Tilt to seat it in the mix.

## Stretch (inharmonicity)

A pure harmonic spectrum stacks every partial at a whole-number multiple of the
fundamental: that exactness is what makes it read as a clean, in-tune "note".
Real instruments are rarely that tidy. A struck string or a bar leans its upper
partials slightly sharp, and that gentle drift is a big part of why a piano
sounds like a piano and a bell sounds like a bell.

**Stretch** lets you dial that drift in. At the centre the partials sit on the
pure harmonic series, exactly as you drew them. Push it one way and the upper
partials spread apart, sharpening as they climb: a little gives you the warm,
slightly-detuned body of a struck string or a plucked piano note, and more takes
you toward the clangy, metallic ring of a bell or a tuned bar. The lower you play
and the further you push, the more pronounced the effect, just as it is on the
real instruments.

Stretch is musical rather than technical: there is no formula to reason about,
just a control you turn until the tone stops sounding like a synth and starts
sounding struck.

## Noise and texture

Harmonics alone are perfectly pitched, which is exactly why some sounds stay out
of reach. Breath on a flute, the air in a pad, the scrape of a bow, the wash of a
cymbal: none of those live on the harmonic series. They are noise, sitting
alongside the pitched partials rather than replacing them.

The **Noise** layer adds that residual texture on top of your spectrum. Two
controls shape it:

- **Level** sets how much noise sits under the harmonics: off for a clean tone, a
  touch for breath and air, more for an overtly textured, hissy or scraped
  character.
- **Colour** tilts the noise from dark to bright. Dark is a low, airy rush good
  for breath and body; bright is a fine, hiss-like top end that suits cymbal
  wash, brushed textures, and the edge of a bowed string.

A little noise is often the difference between a spectrum that sounds synthetic
and one that sounds played. Set the pitched character in the bars, then use Level
and Colour to seat some real-world texture around it.

## Partial groups

Nudging 32 bars one at a time is precise, but sometimes you want to move a whole
region of the spectrum at once: "bring the low end forward", "thin out the top",
"lean on the odd harmonics". **Partial groups** do exactly that. They divide the
harmonics into a handful of bands and give you one level per band, so you sculpt
the tone by region instead of partial by partial. It works like a small spectral
EQ built right into the oscillator.

A **Group Mode** chooses how the harmonics are divided:

- **Octave bands**: groups the partials into octave-wide ranges, low to high. The
  natural choice for broad "darker / brighter" shaping across the whole spectrum.
- **Odd / Even**: splits the harmonics into the odd set and the even set. Lean
  toward odd for a hollow, reedy, square-ish character; lean toward even for a
  fuller, rounder tone.
- **Low / Mid / High**: three broad regions, the body, the presence, and the air.
  Quick to grab when you just want to balance the tone in thirds.

Set a mode, then ride the per-band levels to shape the drawn spectrum by region.
It is a fast way to rebalance a sound without redrawing it: pull the high band
down to tame a harsh preset, push the odd band up to hollow a tone out, or lift
the low band to add weight.

Each oscillator keeps its own group mode and band levels, and they save with the
patch alongside the bars.

Each partial group's level is also a modulation destination, so you can route an
envelope or an LFO to a single group for spectral movement beyond the built-in
group envelopes.

## Group envelopes (evolving harmonics)

The bands above are static: set a level and the group holds it for the whole note.
**Group envelopes** let those bands move instead. The group-envelope faders live on
the **Analog** tab. Each of the groups can have its
own gentle envelope that starts the band louder or quieter than its resting level
and then eases back to it over a time you set, all while the note plays.

This is the difference between a spectrum that sits still and one that breathes.
Start the high bands bright and let them settle, and a note opens with an airy
attack that mellows the way a plucked or struck sound does. Give the higher bands
shorter times than the lower ones and the top of the tone fades first, the natural
motion of a real harmonic sound decaying. Push a band the other way and it swells
in from below its resting level instead.

- **Depth** (per band) sets how far above or below its resting level the band
  begins: positive starts it louder, negative starts it quieter, centre leaves it
  static.
- **Time** (per band) sets how long that band takes to ease back to rest.

The ease back to rest carries a subtle **analog snap**: rather than settling in a
straight, purely mathematical curve, it eases in with the slightly-overshooting
character of a real hardware envelope, sharpening the knee of the movement without
ever changing where the band finally lands. It is a small thing you feel more than
hear, part of what keeps the movement from sounding mechanical.

Because each band has its own depth and time, several regions of the spectrum can
be moving at once, in different directions and at different speeds, giving the tone
a living, evolving character that a fixed spectrum cannot.

## Analog character

A drawn spectrum is perfectly precise, and left completely still it can sound a
little clinical, more computer than instrument. The **analog character** controls
add the small imperfections that make a real oscillator feel alive, without
disturbing the harmonics you drew. These controls live on the **Analog** tab.

- **Variance** gives each harmonic a tiny, fixed detuning that is slightly
  different every time you play a note. The partials drift a hair apart from a
  perfect tuning, so stacked notes beat gently against one another and a chord
  shimmers instead of sitting dead still. It is the difference between a spectrum
  that sounds sampled and one that sounds played.

- **Drift** keeps that movement going. Where Variance is a fixed offset for the
  life of a note, Drift lets each harmonic slowly wander in tuning as the note
  holds, the way a real analog oscillator is never quite still. A companion
  **rate** control sets how quickly that wander moves, from a slow, almost
  imperceptible float to a more obvious, restless motion.

- **Drive** adds analog-style saturation and warmth to the whole tone. It runs the
  finished sound through a soft, tube-like saturation that thickens it and brings
  out extra harmonics from the ones you drew. A touch adds body and glue; more
  pushes toward an overtly warm, driven character.

All three sit at their off position by default, so the additive oscillator stays
perfectly clean until you reach for them. Turn them up and the tone gains the
movement, beating, and warmth of hardware while keeping the exact spectrum you
designed.

**Drive and Drift can be modulated.** Both are available as destinations in the
[modulation matrix](/modulation/matrix/), so an LFO or an envelope
can open the warmth or the wander up over the course of a note, breathing the
analog character in and out rather than leaving it fixed.

## Shaping tools

Four tools speed up the drawing itself:

- **Snap**: constrains your drawing so bar heights land on clean steps rather
  than wherever the mouse happens to fall. Good for deliberate, tidy spectra and
  for matching harmonics to one another by eye.
- **Odd**: keeps only the odd harmonics and clears the even ones, the recipe
  behind hollow, square-and-triangle-flavoured tones. A one-click way to move a
  spectrum toward that reedy character.
- **Normalize**: rescales the whole spectrum so its loudest harmonic sits at the
  top of the range, without changing the *balance* between harmonics. Use it to
  bring a quiet, sculpted spectrum back up to full level after you have drawn it
  down.
- **Reset**: clears your drawing back to a clean starting state, ready to begin
  again.

## Working with the Additive oscillator

A few practical things worth knowing:

The 32 bars you draw define the character band, but the tone carries more harmonics
than that above the range you draw, so it stays open and full rather than stopping
dead at the last bar. Very high notes automatically shed their top harmonics as they
climb, so the sound stays clean and never turns harsh no matter how high you play.

- **All three oscillators can be Additive, each with its own spectrum.** You can
  run three independently drawn Additive tones at once, or mix one Additive
  oscillator against a Saw and a Wavetable. Each oscillator keeps its own set of
  32 bars.
- **Your spectrum saves with the patch.** The bars, tilt, stretch, noise, group
  mode and band levels, and the preset you land on are all stored with the
  preset, so a sound you draw today loads back exactly as you left it. Each
  oscillator keeps its own set.
- **Tune it like any other oscillator.** The normal
  [Octave, Coarse, and Detune](/sources/oscillators/#tuning)
  controls work as they always do: shift it by octaves, tune it to an interval,
  or detune it slightly against another oscillator for beating and width.
- **Leaving Additive is just a type change.** To go back to a fixed waveform or
  any other oscillator type, reselect it from the oscillator's type menu, exactly
  as you would switch between Saw, Square, or Wavetable. Your drawn spectrum stays
  with the patch, so you can return to it later.

:::note
At heart the Additive oscillator lets you **shape a harmonic spectrum by hand**:
you draw the tone (bars, tilt, stretch, noise, and group levels) and it plays back
what you drew. The group envelopes and the analog character controls then add
movement and life on top of that drawn spectrum (bands that evolve, harmonics that
beat and wander, a touch of warmth), but the drawn shape itself is still the thing
you design, not a set of individual harmonics animated one by one. For sweeping
between wholly different waves over time, reach for the
[Wavetable](/sources/oscillators/#special-oscillators) oscillator
and the [modulation matrix](/modulation/matrix/).
:::

:::tip
A quick way in: pick the **Saw** preset, run a little **Tilt** toward the darker
side, then pull down two or three of the lower harmonics that feel harsh. You get
a warm, hand-tuned saw that no fixed waveform gives you, in about four moves.
:::
