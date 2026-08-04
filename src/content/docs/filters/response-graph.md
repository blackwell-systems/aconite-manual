---
title: The response graph
description: Reading and grabbing the live, measured filter-response display.
---

The **filter response graph** plots the filter block's real magnitude response and
lets you drag the curve to set cutoff (horizontal) and resonance (vertical). Every
curve is measured from the DSP actually running, so it draws both filters, the
front-end high-pass, and the feedback bark exactly as they sound, and sweeps along
the frequency axis as cutoff is modulated.

## What you're looking at

The graph shows frequency on the horizontal axis (low on the left, high on the right) and
gain on the vertical axis. The curve traces the filter's actual frequency response at the
current settings, not an idealized diagram, but the real shape of what the filter is doing
to the signal right now.

A flat line at the top means the filter is passing all frequencies equally. As you lower
Cutoff, the curve bends downward at the corner frequency: everything to the right of that
bend is being attenuated. The steepness of the slope below the corner depends on the filter
model and, for Cascade, the slope setting. A narrow, upward spike at the corner is
Resonance; that spike is the peak you hear as the squelch or scream.

Because the curve is measured live, every model looks different, and changing between them
updates the graph immediately. The Ladder's gentle knee, the Acid's resonance-ahead-of-
cutoff character, and the SVF's crisp slope all look noticeably different here, a useful
sanity check when you're switching models and trying to hear what changed.

## Dragging to set Cutoff and Resonance

The graph is interactive. Each filter curve has a **handle** you can grab:

- **Filter 1**: a white handle at the cutoff frequency.
- **Filter 2**: a blue handle, shown whenever a two-filter routing is active.

**Drag horizontally** to move Cutoff. **Drag vertically** to change Resonance. The knobs in
the filter section update as you drag, and the curve redraws in real time. This is often the
fastest way to set a filter position precisely, especially when you want to match a Resonance
peak to a specific frequency band while hearing the result.

If you prefer the knobs, the graph follows them; there is no disconnect between the two
ways of working.

## The high-pass curve

When the front-end high-pass is set to Pre or Post, the graph adds a **pale curve** with its
own handle. Drag it horizontally to set HPF Freq; drag vertically to set Bite (the HPF's
resonance). The curve draws the real roll-off shape for whichever slope (6, 12, or 24 dB/oct)
is selected: a 24 dB/oct curve looks much steeper than a 6 dB/oct one, which makes the
slope choice visible at a glance. This also applies to the Cascade filter's own 12 vs. 24
dB/oct slope switch: switching slope is reflected immediately as a visibly steeper or
shallower curve in the graph, so you can see the difference before committing to it.

The HPF curve stays fixed as the main filter curves sweep. If you're running the HPF Pre, you
can see the combined shape that the signal actually experiences: the HPF cut on the left, the
main filter cut on the right, and the Resonance peaks of each wherever they land.

## Feedback in the graph

The Feedback ("bark") loop is visible in the graph. Because every curve is measured with the
real feedback loop closed, raising a filter's Feedback grows a broad hump in its drawn curve
just below the cutoff frequency. You can watch the Feedback control's effect directly: at zero
Feedback the curve is clean; as Feedback rises, the sub-cutoff hump grows and the cutoff peak
from Resonance changes shape. This makes the antagonism between Feedback and Resonance
(described in [Feedback & FB Sat](/filters/feedback/)) visible as well as
audible.

**FB Sat does not appear in the graph.** Its effect is tonal and harmonic; it shapes the
character of the feedback signal, not its frequency-domain shape. The curve will not change
when you adjust FB Sat. Judge it entirely by ear, ideally with Feedback turned up enough to
hear the loop contributing to the sound.

## Modulation and live sweeping

As cutoff is modulated (by an LFO, the filter envelope, the step sequencer, or any matrix
route) both filter curves sweep left and right along the frequency axis in real time. You can
watch a Cutoff LFO animate the curves, which makes it easy to see the sweep range, check
whether a modulation depth is musical or excessive, and observe how two filters in parallel
or serial relationship move relative to each other.

The HPF curve does not sweep with modulation: it reflects the front-end HPF's knob position
and updates when you change Freq or Bite, but it is not animated by per-cycle modulation.

:::tip
The response graph is a good diagnostic tool when a patch sounds unexpected. If the curve
shows both filters' Resonance peaks stacking at the same frequency in a Parallel routing, the
result is a very narrow, sharp combined peak, which may be what you want or may explain a
harshness you are trying to remove. Moving one filter's Cutoff slightly produces two peaks
and a much fuller result.
:::

## Reading Morph changes

On the SVF, Bite, and Multimode models, the Morph control continuously blends between filter
responses. The graph shows this in real time: as Morph moves from LP through BP toward HP,
the curve shape changes smoothly from a downward slope on the right, to a mid-frequency bump,
to a downward slope on the left. Watching this while listening makes the Morph control
immediately intuitive, and it is a good way to find the exact blend point where a filter
starts to sound right for a part.

For a full picture of what you can route to Cutoff, Resonance, and Morph, see the
[modulation matrix](/modulation/matrix/). For an overview of the oscillators
feeding the filter, see [Sources](/sources/oscillators/).
