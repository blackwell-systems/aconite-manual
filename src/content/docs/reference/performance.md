---
title: Performance & CPU
description: "An honest guide to CPU cost: oversampling Quality tiers, Auto-HQ on bounce, voice count, and what's expensive."
---

Aconite trades CPU for fidelity deliberately. This page explains what costs the
most, how to tune the balance for your session, and how to get the best of both
worlds at render time.

See [The Aconite philosophy](/getting-started/philosophy/) for why
these tradeoffs exist.

---

## The Quality setting

The **Quality** control in the Master band sets the internal oversampling rate.
Higher settings run the audio engine at a multiple of your project sample rate,
then filter it back down, which removes aliasing from hard sync, FM,
waveshaping, and the nonlinear filters, at the cost of proportionally more CPU.

| Setting | Oversampling | When to use |
|---------|-------------|-------------|
| 1× | Off | Fast draft mode; lowest CPU, some audible aliasing on heavy patches |
| 2× | 2× | The default; a good everyday balance |
| 4× | 4× | High-quality tracking and mixing |
| 8× | 8× | Offline / export; highest fidelity |

The audio path is the part that scales with Quality. Modulation, envelopes,
LFOs, and other control-rate processing always run at the host sample rate
regardless of the Quality setting, so only the audio is affected.

---

## Auto-HQ on bounce

**Auto-HQ on bounce** is in the Options (gear) menu. When it is on, Aconite
automatically switches to maximum oversampling (8×) whenever your host performs
an offline render or bounce, even if you were monitoring at a lower Quality
setting.

- **Auto-HQ off (default):** the bounce uses whatever Quality was active during
  playback. What you heard while working is exactly what you get in the file.
- **Auto-HQ on:** the bounce is always at maximum quality, regardless of your
  live setting. Monitor at 1× or 2× to keep CPU low; render pristine.

The tradeoff: with Auto-HQ on, the rendered file may sound subtly different from
what you heard live: the higher-quality decimation removes a small amount of
high-frequency character that was audible at lower settings. For most material
this difference is inaudible; for patches built around the sound of aliasing
(intentional lo-fi) you may prefer to leave it off.

---

## Voice count and polyphony

Every active voice runs the full oscillator, filter, envelope, and waveshaper
stack. CPU scales roughly linearly with the number of concurrent voices.

Factors that increase voice count:

- **Voices** setting: raising the polyphony cap from 4 to 16 allows more
  simultaneous voices.
- **Unison**: stacking voices per note multiplies the voice cost. Unison 8 with
  8-voice polyphony is 64 voice-equivalents. In practice the polyphony cap limits
  the total, but be mindful of how the two interact.
- **Scene mode Layer**: running both scenes on every note doubles the voice
  budget.
- **Sustain pedal and long releases**: held or slowly decaying voices keep
  running until they finish. A long release time with high polyphony means many
  voices overlapping.

---

## What costs the most

Ordered roughly by impact:

1. **Quality setting**: the single biggest lever. 8× costs roughly eight times
   as much audio-path CPU as 1×.
2. **Unison**: stacking eight voices per note at high polyphony is the heaviest
   voice configuration.
3. **Voice count**: more concurrent voices, more CPU. High polyphony with long
   releases keeps voices alive longer.
4. **Filter model**: heavier models (Ladder, Diode, Bite, Acid) include
   in-loop saturation that costs more than the clean SVF or Cascade models.
5. **Active effects**: each enabled effect in the FX bus adds processing.
   Reverb, multi-tap delay, and the EQ with spectrum analysis active are the
   heaviest. Effects that are disabled (bypass dot off) cost nothing.
6. **Scene mode Layer**: running both scenes simultaneously doubles most of
   the voice-path cost.

---

## Practical tips to reduce CPU

Use these when you need headroom during tracking or on a busy session:

- **Lower Quality to 1× or 2× while tracking**, then raise it (or turn on
  Auto-HQ) before export. Most editing and MIDI work does not require maximum
  fidelity.
- **Reduce Voices** to the minimum your patch musically needs. A mono bass
  patch does not need 16-voice polyphony.
- **Lower Unison** or reduce the Unison stack size for patches where the
  width is not musically essential.
- **Disable effects you are not hearing.** Each disabled effect costs nothing.
  Bypass reverb and delay while editing, then re-enable before mixing.
- **Prefer SVF or Cascade** over Ladder, Bite, Diode, or Acid when your patch
  does not specifically benefit from those models' saturation character.
- **Use Single scene mode** if you are not using Layer, Split, or Channel.
  Running both scenes doubles the voice budget even when scene B is silent.
- **Shorten release times** on busy patches. Long releases keep voices alive
  and eating CPU after the note is off.

---

## Balancing quality for tracking vs. export

A common workflow:

1. Track and edit with **Quality at 2×** (the default) and **Auto-HQ on**.
2. The session stays responsive while you write and arrange.
3. When you bounce or export, Aconite switches to 8× automatically.
4. The final file is full quality with no manual setting change required.

If you are on a slow machine or running many plugin instances, drop Quality to
1× during tracking and rely on Auto-HQ to clean up at export.
