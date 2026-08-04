---
title: MIDI CC & automation
description: The default CC map, MIDI-learn, and host automation notes.
---

This page covers how Aconite receives MIDI and responds to host automation:
how MIDI-learn maps a hardware control to any parameter, how the pitch and
mod wheels route through the modulation matrix, MPE per-note expression, and
how your DAW sees Aconite's parameters for automation.

---

## Host automation

When Aconite runs as a plugin (VST3 or AU), your host automatically exposes
every parameter in Aconite's parameter list as an automation lane. Parameters
appear in your DAW's automation browser under the plugin's name.

- **Drawing or recording automation** in the host moves the corresponding
  Aconite control in real time.
- Automation and MIDI-learn work side by side: a parameter can be automated
  from the host and controlled by a hardware CC at the same time.
- The Macro knobs (Macro 1–4) are particularly useful automation targets
  because one macro can be routed to many internal destinations simultaneously
  via the modulation matrix.

---

## MIDI-learn

MIDI-learn binds a hardware MIDI controller's knob, fader, or button to any
Aconite parameter. The mapping is per-machine (stored locally), not per-preset,
so your hardware layout stays consistent across every patch.

### Arming a mapping

1. **Right-click** the Aconite control you want to control.
2. Choose **MIDI Learn** from the context menu. The control highlights to show
   it is listening.
3. **Wiggle or press** the hardware control you want to use. Aconite captures
   the first incoming CC and binds it.
4. The control's highlight clears and the binding is live.

### Removing a mapping

Right-click the control and choose **Clear MIDI Learn** (or the equivalent
option in your DAW's MIDI assignment panel).

### What you need to know

- Mappings are **per-machine, not per-preset**: saving or loading a preset does
  not affect your hardware layout. Your controller map persists across sessions.
- Any modulatable control in Aconite can be MIDI-learned, including the Macro
  knobs, filter Cutoff, Resonance, individual LFO rates, and effect parameters.
- The wave-selector menu supports MIDI-learn (to step through wave choices from
  a hardware control), but not modulation.

---

## Pitch wheel and mod wheel

The **pitch wheel** is wired to pitch by default, bending all voices together.
The standard bend range is ±2 semitones; in MPE mode, per-note bend range is
set separately (see below).

The **mod wheel** (MIDI CC 1) is a modulation matrix source, labelled **Mod
Wheel** in the source list. Route it to any destination (filter cutoff, LFO
rate, vibrato depth, or anything else) by adding a matrix slot with Mod Wheel
as the source. It arrives pre-assigned to nothing by default, so it only acts
once you route it.

The **sustain pedal** (MIDI CC 64) works in all play modes. In
[Latch](/performance/voice-and-play/) mode it holds arp and step
sequencer patterns running after you lift the keys.

---

## MIDI CC sources in the modulation matrix

Eight freely assignable **MIDI CC** slots appear in the modulation matrix source
list, labelled **MIDI CC 1** through **MIDI CC 8**. Each slot listens on one CC
number you choose, letting any incoming CC drive any modulation destination.

This is distinct from MIDI-learn: MIDI-learn moves the control's value directly,
while a MIDI CC matrix slot feeds the value into the modulation signal path and
can be scaled, transformed via Via (Invert, Rectify, Quantize, Lag), and summed
with other modulation sources.

---

## MPE

MPE turns on per-note expression so each voice responds to its own channel's
messages independently.

| MPE source | What it carries | Matrix label |
|-----------|----------------|--------------|
| Per-note pitch bend | Continuous pitch per note | - (wired to voice pitch) |
| Pressure | Channel aftertouch per note | MPE Press |
| Slide | Per-note Y-axis position (typically CC 74) | MPE Slide |

- **Bend Range** sets the per-note pitch range (1–96 semitones, default 48).
- **MPE Press** and **MPE Slide** are modulation matrix sources: route them to
  any destination (filter cutoff, LFO depth, envelope times, and so on) in the
  same way as any other source.
- When MPE is off, the standard channel-level pitch, pressure, and mod-wheel
  paths are active and unaffected.

For setup guidance and examples, see
[Voice and play](/performance/voice-and-play/).

---

## No fixed CC map

Aconite does not publish a fixed default CC number for each parameter. Instead,
every parameter can be mapped to any CC via MIDI-learn, giving you a controller
layout that matches your hardware rather than a predetermined table. The only
pre-wired message is the pitch wheel (to voice pitch) and the sustain pedal
(CC 64 to note hold). Everything else is opt-in via MIDI-learn or the matrix CC
slots.
