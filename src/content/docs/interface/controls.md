---
title: How every control works
description: "The shared control behaviors: knob dragging, fine-adjust, reset, the right-click Modulate menu, MIDI-learn, and tooltips."
---

Aconite's controls behave the same way everywhere, so you only learn them once.
Knobs respond to **drag**, **double-click to reset**, and **hold Shift or Cmd for
fine adjustment**. Right-clicking a control opens the **Modulate** menu and shows
its live modulation rings; controls can be **MIDI-learned**; and hovering reveals
a tooltip where it teaches something non-obvious.

This page covers those shared behaviors in one place, so the rest of the manual
can focus on what each control does rather than how to operate it.

## Turning a knob

**Drag** a knob up or down to change its value. Aconite uses vertical drag by
default (move up to increase, down to decrease) which feels natural on any
pointing device and gives you smooth, continuous travel across the full range.

- **Hold Shift** (or **Cmd** on macOS) while dragging to enter fine-adjust mode.
  The knob still responds to the same drag gesture, but the value moves in much
  smaller steps. Use this any time you need surgical precision: dialing in a
  specific cutoff frequency, trimming an envelope time, nudging a pitch interval.
- **Double-click** any knob to snap it back to its default value. If you have made
  a mess and want to start that parameter over, double-click is the fastest reset.

:::tip
The same behaviors apply to sliders and other continuous controls, not just knobs.
Drag to change, Shift-drag for fine, double-click to reset: everywhere.
:::

## Entering a value directly

Right-clicking a knob opens its context menu. At the bottom of that menu is an
**Enter value** option; choose it and type the number you want. This is useful
when you know the exact value you are after: a 440 Hz reference frequency, a round
envelope time, a precise semitone detune.

You can also double-click the value readout (the small number displayed near the
knob while it is active) in some sections to jump straight into text entry.

## The right-click context menu

Right-clicking any knob or slider opens a small menu with several options:

- **Set to default**: same as double-clicking. Resets to the parameter's default
  value.
- **Enter value**: opens a text field for direct numeric entry.
- **Modulate**: opens the modulation assignment panel for this control (see below).
- **MIDI-learn**: arms MIDI-learn for just this control. Move a physical
  controller and the CC is mapped. A control that already has a mapping shows a
  **Clear MIDI mapping** option instead.

## Modulation rings and assignment

When a modulation source is routed to a knob, the knob grows one or more colored
**rings** around its outer edge. Each ring corresponds to one active modulation
connection. The ring fills and empties as the modulation signal moves, so you can
watch modulation happening in real time while you play: an LFO sweeping a ring
around the Cutoff knob, or an envelope pulling the Resonance ring as each note
decays.

To assign modulation to a control:

1. Right-click the knob and choose **Modulate**.
2. The modulation panel opens, listing every available source: envelopes, LFOs,
   the mod wheel, velocity, aftertouch, and more.
3. Click a source to connect it. A depth slider appears; drag it to set how much
   that source moves the control. Positive depth pushes the value up from its
   current position; negative depth pulls it down.
4. The panel also exposes a **Via** selector for each connection. Via is a
   curve or transform that sits between the source signal and the depth amount;
   it reshapes the modulation before it reaches the destination. You can use it to
   make a linear LFO act exponential at one end, gate the modulation so it only
   kicks in above a threshold, or invert the response. Via is the difference between
   "this source moves that knob" and "this source moves that knob in a specific
   shape."
5. You can connect multiple sources to the same knob: each gets its own ring, its
   own depth, and its own Via.

To remove a connection, open the Modulate panel again and click the source to
deselect it, or drag its depth slider all the way to zero.

The full modulation system (sources, depths, the matrix view) is covered in
[Modulation matrix](/modulation/matrix/).

## MIDI-learn

Any knob or button can be mapped to a physical MIDI CC. The fastest way is through
the header's global **MIDI-learn arm** button: arm it, click a control, move a
knob on your controller. But you can also right-click any specific control and
choose **MIDI-learn** directly without arming global mode first.

Mapped controls show a small indicator when MIDI-learn mode is active. To clear a
mapping, right-click the control and choose **Clear MIDI mapping**.

Full MIDI-learn details (scope, session behavior, and CC conflicts) are in
[MPE & MIDI-learn](/master/mpe-midi-learn/).

## Tooltips

Hovering over a control for about a second reveals a tooltip. The name and current
value are always shown. Where a control does something non-obvious (like how
**FB Sat** works differently from **Drive**, or what the **Voicing** setting
changes inside the filter model) the tooltip adds a short explanation.

Tooltips are intentionally sparse: if a label is self-evident, there is no tooltip.
If one appears, read it; it is there because the behavior rewards knowing it.
