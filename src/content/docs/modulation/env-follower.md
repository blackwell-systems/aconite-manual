---
title: Envelope follower
description: The per-voice envelope follower, a source that tracks the signal's level, the classic auto-wah ingredient.
---

The **envelope follower** is a modulation source with an unusual quality: it listens to
the signal running through the voice and turns what it hears into a moving value you can
route anywhere. When the signal is loud, the follower's output is high. When the signal
is quiet, the output falls. Route that output to [filter cutoff](/aconite-manual/filters/the-two-filters/)
and the filter opens as the sound gets louder: the classic auto-wah, without any external
signal required.

It lives in the **Env Follow** tab of the [Modulators panel](/aconite-manual/modulation/overview/).

## What it does

Every note in Aconite carries its own envelope follower. As the voice produces audio, the
follower continuously tracks the signal's amplitude and outputs a smooth, time-averaged
level that rises and falls with the sound. That level is a modulation source like any
other; you route it in the [matrix](/aconite-manual/modulation/matrix/) or via a right-click
on any knob.

The result is **dynamics-as-modulation**: the harder you play, the stronger the signal,
and the further the follower pushes its destination. A soft note barely moves the target;
a hard note drives it fully open.

## The controls

Four controls shape how the follower tracks the signal:

- **Attack**: how quickly the follower responds to a rising signal. A short attack snaps
  to peaks immediately; a long attack smooths over transients and responds more to sustained
  levels.
- **Release**: how quickly the follower falls when the signal drops. A short release follows
  every dynamics fluctuation closely; a long release holds the high point longer, giving a
  slower, lazier swell.
- **Sense**: sets the input sensitivity, effectively scaling how loud a signal is needed to
  push the follower toward its maximum output. Turn it up to respond to quieter signals; turn
  it down to only react when the voice is driven hard.
- **Detect**: selects the detection mode, which governs how the follower reads the incoming
  signal. Different detection modes suit different source materials, from clean sine tones to
  harmonically rich, driven sounds.

## Using the envelope follower

The follower becomes a source in the [modulation matrix](/aconite-manual/modulation/matrix/)
the moment you select **Env Follow** as a source. You can also right-click any knob and
choose **Add modulation → Env Follow** to wire it directly.

**Auto-wah:** Route to Filter 1 Cutoff at a positive depth. The filter opens as you play
harder and closes as the note decays. Adjust the Attack and Release to taste: a short
attack with a medium release gives the classic "quack", while a longer attack with a long
release gives a slow swell.

**Tremolo and gating:** Route to the amp or waveshaper at a high depth. Playing harder
drives the voice into a more distorted or louder space; playing softly retreats. With a
short release, the follower can create subtle dynamic gating.

**Modulation depth scaling:** Route to an LFO's rate or depth destination in the matrix.
Now playing harder makes the LFO sweep faster or deeper: the modulation becomes
velocity-responsive in a continuous, natural way.

:::tip
The envelope follower responds to the *synthesized* signal inside the voice, not to
external audio. Its behavior depends on the oscillator mix, filter settings, and anything
in the chain. A heavily filtered voice produces a smoother, slower-changing follower output
than a bright, transient-rich one; use this to your advantage when shaping the response.
:::

Because the follower is per-voice, each note tracks its own dynamics independently. In a
polyphonic chord, each voice's follower responds to that voice's own signal; they do not
cross-talk. This makes the auto-wah effect feel natural across the whole keyboard.
