---
title: Mixer & Mix Drive
description: The Minimoog-style level mixer and Mix Drive, the mixer's overdrive stage.
---

The **mixer** sets the level of each source before the filter, in the classic
Minimoog style, and adds **Mix Drive** — an overdrive on the mix bus that fattens
and saturates the combined signal as you push it, giving you dirt before the filter
even touches it.

## The five faders

The mixer has a fader for each sound source. All five run simultaneously — this is
not a crossfade or an either-or selection:

| Fader | What it controls |
|-------|-----------------|
| **Osc 1** | Level of oscillator 1 into the mix. |
| **Osc 2** | Level of oscillator 2 into the mix. |
| **Osc 3** | Level of oscillator 3 into the mix. |
| **Sub** | Level of the [sub oscillator](/aconite-manual/sources/sub-noise/). |
| **Noise** | Level of the [noise source](/aconite-manual/sources/sub-noise/). |

Because the sources are independent faders — not a crossfade — any combination can
be active at once. You can run all three oscillators at full level, or bring in
just a whisper of noise, or silence Osc 2 entirely while Osc 1 and 3 play.

## Balancing oscillators for character

A few things worth knowing when you start tweaking levels:

- **Equal levels do not mean equal loudness.** Different waveforms and models have
  different peak amplitudes. A Unison saw at 50% fader will hit the mix harder
  than a sine at the same fader position. Trust your ears over the fader positions.

- **Detuned layering interacts with the fader mix.** When two oscillators are
  slightly detuned from each other, they beat against one another — a slow volume
  pulse at low detuning, a flangey shimmer at moderate amounts. Their relative
  level in the mixer affects how prominently the beating sits in the final tone.

- **The sub fader is easy to overdo.** At high levels — especially at −2 octave
  with a square wave shape — the sub can muddy the low end and drive the pre-filter
  stage hard even before Mix Drive enters the picture. Pull it back until you feel
  the weight rather than hear the sub as a separate element.

- **Oscillator levels are [modulation matrix](/aconite-manual/modulation/matrix/)
  destinations.** You can sweep Osc 2's level with an envelope for a swell, or
  modulate the noise level with an LFO for a trembling breath effect.

## Mix Drive

**Mix Drive** is an analog-style overdrive that sits between the mixer output and
the filter input. Every voice's mixed signal runs through it before anything else
in the signal path touches it, which means it colours the material that then gets
further shaped by the [filter](/aconite-manual/filters/the-two-filters/).

At low settings it is transparent — the signal passes through cleanly. As you push
it:

- The low end softens and thickens slightly, rounding off peaks in a way that
  feels warm rather than harsh.
- Harmonics accumulate across the frequency range, adding grit and presence to
  the midrange.
- The top end gets a subtle edge — not a fizz, but a livening of the high
  harmonics that can make a mix cut better through other instruments.

Push it further and the effect becomes obvious: a driven, saturated quality that
lives somewhere between tape saturation and the gain stage of an overloaded mixer.
This is not a clean gain stage. It responds dynamically to the signal — louder,
more complex mixes (multiple oscillators at high levels, high sub content) saturate
more heavily than sparse signals at the same Drive setting.

:::tip
Mix Drive interacts with filter resonance. A filter with moderate Resonance and
Drive pushed up will self-resonate differently when Mix Drive is adding harmonics
upstream. Try sweeping Mix Drive with a sustained resonant patch — you will hear
the filter character shift as the input gets richer.
:::

### Mix Drive before vs after the filter

This placement — before the filter — is the key design choice. It means:

- The filter shapes the saturated signal, not the other way around. Cutoff sweeps
  through the harmonics Mix Drive added, and those harmonics behave exactly like
  oscillator harmonics do — they open and close with the filter.
- Increasing Mix Drive makes the filter response feel more dynamic and "pushed",
  because the filter is now working with a denser input signal.
- The dirt is per-voice. Each voice saturates independently, which means a chord
  does not collapse into a single smeared distortion cloud — each voice's
  harmonics are generated separately, and the result is thicker and more
  three-dimensional than a bus-level overdrive would produce.

:::caution
If you are adding Mix Drive to a patch that already has Filter Drive up, keep an
ear on the overall level as you go. The two stages stack — Mix Drive enriches the
signal going into the filter, and Filter Drive amplifies the gain into the filter's
own non-linear stage. Combined, they can move a lot of energy through the voice.
Run a note at the loudest velocity you intend to use and check the output meter
before committing to a level.
:::

### Mix Drive as a sound-design tool

Beyond "add grit", Mix Drive has a few specific applications worth trying:

- **Fattening a thin oscillator mix.** A single DCO saw at modest level is clean
  and a little thin. Push Mix Drive up and the harmonic enrichment fills the
  midrange without changing the oscillator settings — effectively giving the
  oscillator more body.

- **Overdrive that scales with dynamics.** Because Mix Drive responds to the
  amplitude of the combined oscillator mix, playing harder (with velocity routed
  to oscillator levels or Osc level in the mod matrix) drives it harder
  automatically. The distortion becomes an expressive response to how hard you
  play.

- **Pre-filter grit for physical models.** The String and Modal oscillators have
  their own internal character, but feeding them through Mix Drive before the
  filter adds a layer of saturation that can make a plucked string sound
  amplified, worn, or wiry rather than pristine.
