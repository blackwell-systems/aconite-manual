---
title: Keyboard & mouse shortcuts
description: The mouse gestures and keyboard shortcuts that apply across the whole interface.
---

The gestures and shortcuts that apply everywhere in Aconite. As a head start:
**drag** a knob to change it, **double-click** to reset it, and **hold Shift or
Cmd** while dragging for fine control.

---

## Knob and slider interactions

These gestures apply to every knob and slider in the interface: filter Cutoff,
envelope times, LFO rates, FX mix levels, and all others.

| Gesture | What it does |
|---------|--------------|
| **Click + drag up / down** | Change the value. Drag up to increase, down to decrease. |
| **Shift + drag** | Fine control. Moves the value in smaller increments for precise adjustments. |
| **Cmd + drag** (macOS) / **Ctrl + drag** (Windows) | Fine control, same as Shift. |
| **Double-click** | Reset to the default value. |
| **Scroll wheel** | Nudge the value up or down. |
| **Right-click** | Open the context menu: Modulate, MIDI Learn, reset, and copy/paste options (see below). |

:::tip
Shift + drag is the fastest route to an exact value. Once you have roughly
the right position by dragging normally, hold Shift to fine-tune it.
:::

---

## Right-click context menu

Right-clicking any knob opens a menu with several options:

| Option | What it does |
|--------|--------------|
| **Modulate ▸** | Lists all routes currently targeting this knob (each with its depth and a remove button) above an **Add modulation ▸** submenu of every available source (LFOs, envelopes, velocity, macros, MIDI CC…). Pick a source to add a new route. |
| **MIDI Learn** | Arms MIDI learn for this parameter. Move a hardware knob or fader; Aconite catches the first CC and binds it. |
| **Forget MIDI mapping** | Removes the hardware CC assignment from this parameter (appears only when a mapping exists). |
| **Set value…** | Opens a text entry to type an exact value. |
| **Reset to default** | Resets to the default value, same as double-clicking. |
| **Copy value** | Copies the current value to the clipboard. |
| **Paste value** | Pastes a copied value onto this knob. |

After adding a modulation route via the right-click menu, a small coloured dot
appears on the knob to show it is modulated. A live arc on the knob animates in
real time to show where modulation is currently pushing the value.

To set the route's depth or add a Via transform, open the Master Matrix grid
in the modulation section.

See [Modulation matrix](/modulation/matrix/) for a full guide to
routing.

---

## On-screen keyboard

A one-octave on-screen keyboard runs along the bottom of the plugin window.

| Action | What it does |
|--------|--------------|
| **Click a key** | Play that note. |
| **Click and hold** | Sustain the note until you release. |
| **Drag horizontally while held** | Slide to adjacent notes (useful for testing filter sweeps continuously). |

The keyboard is a convenience for quick testing without a connected controller. It
does not transmit velocity: notes play at a fixed medium velocity.

---

## Panel collapse and pop-out

Some panels can be collapsed to save screen space or detached from the main
window.

| Action | What it does |
|--------|--------------|
| **Click the panel header arrow** | Collapse or expand that panel. |
| **Double-click the panel header** | Pop the panel out into a floating window. |
| **Close the floating window** | Re-docks the panel in its original position. |

The modulation section, FX rack, and keyboard panels all support this behavior.

---

## Global shortcuts

These apply anywhere in the Aconite window:

| Shortcut | What it does |
|----------|--------------|
| **PANIC (header button)** | Instantly silences everything: stops all notes, kills stuck voices across both scenes, clears held / mono / arp state, and flushes reverb and delay tails. The emergency stop for a runaway patch or stuck note. |
| **< / > arrows (preset browser)** | Step backward / forward through the preset bank. |
| **Click preset name** | Open the preset menu for direct selection from Factory or User banks. |

---

## MIDI Learn and hardware controls

| Action | What it does |
|--------|--------------|
| **Right-click a knob → MIDI Learn** | Arm learn mode; move a hardware control to bind it. |
| **Right-click a knob → Forget MIDI mapping** | Remove the hardware binding from that parameter. |
| **MIDI button (header)** | Open the MIDI map manager: a table of all CC→parameter bindings plus 8 learnable CC matrix source slots. Edit, reassign, or clear mappings from one place. |

Once learned, hardware controls use **soft takeover**: the parameter does not
jump when you grab the hardware control. It starts following only once the
incoming value sweeps past the current parameter value, so there are no sudden
jumps.

MIDI mappings are **per-machine** and are never saved into preset files. They
persist across sessions for the same machine and instance.

---

## Modulation depth rings

On compound knobs (the concentric ring controls in the oscillator and modulation
sections), each ring responds independently to all the gestures above. Right-click
the ring you want to modulate or learn; Aconite identifies which ring the cursor
is over and opens the correct menu for that parameter.

:::note
The wave-type selector (oscillator waveform menu) is a discrete choice rather
than a continuous knob. It supports **MIDI Learn** (so a hardware button can step
through waveforms) but not the Modulate submenu, since a stepped value cannot be
smoothly modulated.
:::
