---
title: MPE & MIDI-learn
description: The MPE expression path, MIDI-learn with soft-takeover, the pitch and mod wheels, and the drawable velocity curve.
---

Aconite supports **MPE** for per-note expression: a per-note bend range, plus
Pressure and Slide exposed to the modulation matrix as sources. **MIDI-learn**
maps hardware controls to parameters with soft-takeover; the pitch and mod wheels
route through the matrix; and a drawable **velocity curve** reshapes how hard you
play into the synth's response.

## MPE

MPE (MIDI Polyphonic Expression) lets an expressive controller give each note
its own real-time pitch, pressure, and slide independently. On a standard MIDI
keyboard every note you hold shares the same pitch wheel, the same channel
pressure, and the same mod wheel. On an MPE controller each finger gets its own
channel, so you can bend a high note up while a lower note stays put, or increase
pressure on one key while releasing another.

To use MPE, enable the **MPE** toggle in the performance zone and set a **Bend
Range**: the number of semitones each note's pitch bend spans (1 to 96 semitones;
the default is 48, which gives two full octaves of per-note pitch travel). The
Bend Range control appears when MPE is on.

What Aconite exposes per note:

- **Per-note pitch bend.** Each voice tracks its own note's pitch bend channel
  independently of all others. Slide up on one finger; leave the rest untouched.
- **MPE Press.** The per-note pressure signal (often called Pressure or Channel
  Aftertouch on a note's own channel) is available in the modulation matrix as the
  source **MPE Press**. Route it to filter cutoff, LFO depth, drive, or any other
  destination to make pressure expressively reshape the sound note by note.
- **MPE Slide.** The per-note slide signal (often CC74, controlled by vertical
  finger position on some controllers) is available as **MPE Slide**. A common use
  is routing it to LFO rate or vibrato depth so your finger's up-down position
  controls the expression.

With MPE turned off the non-MPE path is unchanged: a standard MIDI controller
works exactly as expected.

## The pitch and mod wheels

The pitch wheel and mod wheel on a standard MIDI controller are available as
modulation sources in the matrix. **Mod Wheel** is a dedicated matrix source:
route it to any destination (filter cutoff, vibrato depth, tremolo amount) and
your hardware wheel controls that destination live. The pitch wheel routes to voice
pitch as standard.

For more complex controller routing, eight **MIDI CC slots** in the MIDI manager
let you assign any CC to a matrix source, then route that source anywhere the
matrix reaches.

## Drawable velocity curve

The **velocity curve** reshapes how your playing dynamics are translated into the
synth's velocity signal. By default the curve is linear (hit harder, get more
velocity), but you can redraw it to anything you like. Soften the response in the
middle of the range so quiet playing stays quieter longer before it brightens. Push
the curve up to make the synth jump quickly to full volume even from light touches.
Or draw an S-curve to add expression at both ends.

The velocity curve is a global setting and travels with saved presets, so the
response you dialed in for a particular patch comes back every time you load it.

## MIDI-learn

MIDI-learn maps any hardware knob, fader, or slider directly to any parameter in
Aconite, so you can reach controls physically without mousing around. The mapping
uses soft-takeover so your hardware control never causes a jarring jump.

**To learn a parameter:**

1. Right-click any knob in Aconite; you will see a **MIDI Learn** option in the
   context menu.
2. Click **MIDI Learn**. Aconite is now listening.
3. Move the hardware control you want to assign: turn a knob, push a fader. The
   binding happens immediately.
4. Play or move the parameter to confirm it responds.

**To remove a mapping:** right-click the same knob and choose **Forget MIDI
mapping**.

**Soft-takeover** is on by default. After you learn a mapping, moving the
hardware control will not snap the parameter to the hardware's current position;
instead Aconite waits until the incoming value crosses the parameter's current
value, then follows from there. No zipper noise, no sudden jumps when you
re-engage a knob mid-patch.

### The MIDI manager

The **MIDI** button in the header opens the MIDI manager window. It shows a table
of every mapping you have set (the CC number, MIDI channel, target parameter, and
value range) with a clear button on each row. At the bottom are eight **CC source
slots**. Each slot lets you assign a CC number and then route that CC anywhere in
the modulation matrix as a named source (MIDI CC 1 through MIDI CC 8). This gives
you up to eight hardware knobs that behave like LFOs or envelopes: scalable with
the matrix's depth slider, combinable with Via transforms, and routable to multiple
destinations at once.

### Value range and Invert

Each mapping in the manager table has an editable **low** and **high** value. By
default a mapping spans the full parameter range, but you can narrow it: for
example, constraining a hardware knob to sweep only the top half of a filter
cutoff's travel. The **Invert** checkbox reverses the direction: push the hardware
knob up and the parameter goes down. This is handy when a fader's physical
"closed" end should correspond to a parameter's maximum, or for dialing in a
feel that matches the hardware control's natural motion.

### Pickup and Jump

Each mapping also has a **takeover** mode that controls what happens the first time
you move a hardware control after loading a patch or switching presets:

- **Pickup** (the default) is soft-takeover. The parameter does not change until
  the incoming CC value crosses the parameter's current value: the knob "picks up"
  from wherever the sound already is, with no jump. This is the safe choice for
  live performance.
- **Jump** snaps the parameter to the hardware position the instant you move the
  control. Useful when you want instant response and your controller's position
  always reflects reality (motorized faders, for example).

You can set each mapping to whichever mode suits the controller and the context.

### Default CC assignments

The eight CC source slots default to **CCs 20–27**, so if your controller already
sends on those channels, the slots respond out of the box without any setup. You
can reassign any slot to a different CC at any time using the learn button on that
row.

### What MIDI-learn does NOT save in presets

This is an important distinction. **MIDI-learn mappings are stored per machine
and per session; they are never saved inside a preset.**

That is intentional. Your hardware mappings belong to your setup, not to the
sound. If mappings lived inside presets, loading a patch from another computer (or
from a friend's library) would silently remap your physical knobs, which is
almost never what you want.

In practice this means:

- Load a different preset and your hardware mappings stay exactly as they were.
  The new sound's filter cutoff is still on the knob you assigned.
- Share a preset with someone else and they get the full patch state (every
  parameter, every drawn shape, the current theme), but not your hardware
  assignments.
- Your mappings persist across a session: save the project in your DAW and they
  come back when you reopen it, because the host session carries them separately.
- A/B compare flips between two patch states without touching your mappings.
  See [Presets & A/B](/master/presets/) for the A/B workflow.
