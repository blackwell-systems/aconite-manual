---
title: Feedback ("bark") & FB Sat
description: The per-filter resonant feedback loop and the global feedback saturation.
---

Each filter has its own resonant **Feedback** loop (the "bark"), a band-limited
loop that tracks cutoff and adds a growl below it. Feedback is antagonistic to
Resonance at high Q: it dissolves the sharp peak into a broader growl, so it is a
distinct "growl / tame the scream" tool rather than "more resonance". The global
**FB Sat** adds harmonic warmth to both loops.

## What the Feedback loop does

Picture the filter already shaping your oscillators. The Feedback loop takes a portion of
the output and routes it back into the input, band-limited so it resonates and tracks the
cutoff frequency rather than sitting fixed or collapsing into DC rumble. As you sweep
Cutoff (with a knob, an envelope, or an LFO), the feedback peak follows the sweep.

The result is a growl that lives just below the cutoff point: denser and broader than pure
Resonance, less focused, and with a different physical texture. On a bass patch it adds
weight and chest. On a lead it can add an almost vocal quality, a bark or grunt that sits
underneath the initial filter peak.

Each filter has its own Feedback control (Filter 1 Feedback and Filter 2 Feedback), and
both are modulation matrix destinations. When you're running two filters in series or
parallel, you can set completely different feedback characters on each one.

## Feedback versus Resonance

This is worth being explicit about, because it is counterintuitive:

At high Resonance, turning Feedback up does not add more scream. It does the opposite:
it dissolves the sharp, singing peak at the cutoff frequency and spreads its energy into
a broader, lower growl. Feedback and Resonance are closer to antagonistic than additive.

In practice this means:

- **Low Resonance + high Feedback**: growl and body without a piercing peak. Good for
  basses and anything where you want filter color without harshness.
- **High Resonance + low Feedback**: the classic singing, squelchy cutoff peak. The
  focus is at cutoff.
- **Both up**: the Feedback starts to tame the Resonance peak. You lose some of the
  squelch and gain warmth and movement. A specific texture, not necessarily louder or more
  aggressive.

A good aim point is roughly 0–0.6 on the control's travel, the lower half. In that range
the bark adds weight and movement without overwhelming the patch. Past that point the effect
becomes quite strong and the interaction with Resonance can produce unexpected results,
worth exploring deliberately, but easy to overshoot.

:::caution
At extreme Feedback levels, especially with high Resonance, the filter can become
unpredictable. If a patch suddenly sounds wrong after automating Feedback, check both
controls before hunting elsewhere; the interaction is doing its job.
:::

## FB Sat: warmth on the feedback loop

**FB Sat** applies soft-clipping saturation to both filters' feedback loops simultaneously.
And it is worth emphasizing that word: *both*, together, as one. There is no way to warm
Filter 1's feedback loop while keeping Filter 2's clean. When FB Sat moves, it shapes the
character of both loops at once, which makes it a global filter texture control rather than
a per-filter one.

It is a tonal control, not a limiter: its main effect is harmonic warmth and coloration on
the feedback signal, and it barely moves the output level. The practical use is
straightforward: when Feedback is turned up and the loop starts to feel a little raw or
harsh, FB Sat smooths and colors it. Think of it the way you'd think of a tube stage in a
hardware feedback path: it adds even harmonics and a subtle compression that makes the growl
feel more musical and less synthetic.

Judge it entirely by ear: if Feedback is up and something sounds slightly brittle, try
nudging FB Sat. If Feedback is low, FB Sat has very little to act on.

FB Sat is also a modulation matrix destination, so a slow LFO can gently breathe the
feedback coloration over time, a subtle but effective way to add animation to a sustained
pad or slow lead.

## Musical applications

**Bass and low-end weight.** Low-to-mid Feedback on a Ladder or Diode filter adds a sub-
cutoff growl that thickens bass patches without brightening them. Keep Resonance moderate
so the peak and the growl coexist rather than fighting.

**Vocal and formant textures.** On a mid-range sweep, Feedback gives the filter a slightly
vocal, talking-box quality. Try routing the filter envelope to Cutoff with a short Decay and
moderate Feedback; each note has a small bark at the attack.

**Taming a screaming lead.** If a patch has high Resonance and the squelch is too intense,
a small amount of Feedback softens the peak without requiring you to reduce Resonance all
the way down.

**Animated feedback color.** Route a slow LFO to one of the Feedback destinations in the
[modulation matrix](/modulation/matrix/) and let the growl pulse gently on a
long pad. With FB Sat up slightly, the saturation coloration breathes alongside it.

**Dual-filter contrast.** When running two filters in parallel or series (see
[Routing & configs](/filters/routing/)), each filter's Feedback is
independent. Set high Feedback on Filter 1 for growl and none on Filter 2 for clarity, then
blend the parallel sum to taste. The two textures can sit in different frequency regions for
a layered, complex result.
