---
title: The Aconite philosophy
description: "Why Aconite sounds the way it does: faithful analog character without the vintage limitations, per-voice aliveness, and a Quality control that trades CPU for fidelity."
---

Before you turn a single knob, it helps to know what Aconite is trying to be.
That "why" explains a lot of what you will find later: why there are so many
filter models, why voices are allowed to drift slightly out of lockstep, and why
there is a Quality control that trades CPU for fidelity.

## It models hardware, on purpose

Analog synthesizers sound the way they do partly because they are imperfect.
Filters saturate and compress as you push them. Two "identical" voices are never
quite identical. Resonance does not blow up cleanly to infinity; it growls, folds,
and pushes back. Aconite models these behaviors rather than smoothing them away.

That is why, for example, the filters have controls that seem to overlap. Cutoff,
Resonance, Drive, Voicing, Feedback, and FB Sat each act at a physically different
point in the signal path, and they interact. Learning how they push against one
another is the depth that makes the filter section reward exploration, not a set
of redundant knobs.

## An instrument, not a rack of modules

Most synths hand you a set of good parts and leave it to you to make them sound
like one thing. Aconite is built the other way round. It models the whole
instrument, including the parts you never see on a panel, so the pieces cohere
into a single voice instead of stacking into layers.

Some of that lives in the sound sources. The chip oscillator carries the real
output stage of the console it models, so stacking its channels compresses and
blends them into one voice the way the hardware does, not a clean digital sum.
The string model has a full resonating body behind it that any sound source can
drive.

The rest is the glue further down the chain: the console-style bus saturation,
the power supply that sags and blooms under a heavy chord, and the sympathetic
resonance that lets held strings ring with what you play. None of these are
effects bolted on the end. They are the connective tissue that makes a signal
path sound like an instrument.

The practical upshot is that the parts are meant to interact. A choice you make
in one place is felt in another, on purpose. That is what gives a patch the sense
that it was played on something, rather than assembled.

## The character, not the constraints

We believe analog modeling does not have to come at the price of limited
functionality. We faithfully model many pieces of vintage gear for their spectral
character (how a particular filter saturates, how a classic circuit compresses
and colors the signal) but we do not let the technological limitations of the
past leak into the present.

The original hardware was often confined to a few voices, a fixed signal path, or
a single modulation route because that was all the era's circuitry allowed. Those
were constraints of the technology, not part of the sound. Aconite keeps the tone
those instruments were loved for and drops the shackles: modulate almost anything
to almost anything, route the voice and effects freely, recall every setting
exactly, and trade fidelity against CPU whenever you like. You get the character
without inheriting the era's ceiling.

## Per-voice character is a feature, not a bug

Aconite has an "aliveness" layer: a small set of controls that loosen each voice
away from perfect digital precision, the way separate analog voice cards each have
their own personality. Turn them up and voices detune slightly from one another,
drift slowly over time, and vary in cutoff, envelope timing, pulse width, and
glide. A separate transient control decides whether each note picks up wherever
the oscillators and filter happen to be (for a punchy, slightly different attack
every time) or resets them for a clicky, consistent one.

At zero, every voice collapses to identical and the synth is clinically precise.
That is a valid choice. But the character controls are there so a stacked chord
can shimmer and move instead of sitting perfectly still. When something sounds
"alive" rather than static, this layer is usually why.

## The catch: fidelity costs cycles

Here is the trade-off we are not going to hide from you. Modeling analog behavior
accurately, especially the in-loop saturation in the Ladder and Diode filters,
generates harmonics that want **oversampling** to stay clean. Oversampling costs
CPU.

So Aconite gives you a **Quality** control that sets how hard it works:

- **1× (draft)**: no oversampling, the lightest path, for arranging.
- **2× (live)**: the default, a good balance for playing.
- **4× (high)**: cleaner high end for exposed, resonant, or driven patches.
- **8× (offline)**: pristine, for final renders.

Only the audio path pays the oversampling cost; your control-rate parameters and
modulation always run at host rate. And an optional **Auto HQ on bounce** setting
lets you monitor at a light Quality to keep CPU low, then render at maximum
oversampling automatically, so your export is pristine even if your live setting
was not.

The point: if a patch is expensive, that expense is usually buying you something
audible. Turn Quality down when you need headroom; turn it up when the detail
matters. You are in control of where the synth spends its cycles.

## What this means for you

- Expect the character controls to interact. That is intended.
- Expect a heavily driven, resonant, high-oversampling patch to cost more CPU
  than a clean pad. That is also intended.
- Expect two voices of the same note to differ slightly when the aliveness layer
  is up. Turn it down for surgical precision.

Everything else in this manual is detail on top of these core ideas.
