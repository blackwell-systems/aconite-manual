---
title: "Modulation matrix and macros"
description: "Lookup reference for the per-voice and bus modulation matrix slots (Source, Via, Destination, Depth), the macro knobs, and the learnable MIDI CC sources."
---

A terse lookup for the modulation matrix. The matrix has a per-voice tier plus a
bus tier; each slot binds a source, an optional Via transform, a destination, and
a signed depth. See [The modulation matrix](/modulation/matrix/).

## Matrix slot columns

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Source | The modulation source feeding this slot: an LFO, envelope, sequencer, macro, MIDI control or bus LFO driving the destination by the Depth amount. | source list |
| Via | A transform applied to the source before it drives the destination. Invert flips its polarity; Rectify folds it positive; Quantize snaps it to discrete steps; Lag slews its motion. On a **Probability**-source row this cell becomes the **Cond** menu (below) instead. | Invert / Rectify / Quantize / Lag |
| Cond (Probability rows) | The condition that decides whether a Probability route may fire this note, on top of its own Depth. **Own die** = no condition. **Relate** reacts to the nearest Probability route above it — **If Prev** (fire only when that route fired) / **If ¬Prev** (only when it missed). **History** reacts to the route's own recent past — **Not-twice** (never two notes in a row), **Max per bar** (at most N fires per bar), **Follows** (fires cluster into runs or alternate, per the bias). | Own die / If Prev / If ¬Prev / Not-twice / Max per bar / Follows |
| Max per bar N | The fire cap per bar, shown next to the Cond menu when the condition is **Max per bar**. | 1 to 8 |
| Follows bias | The momentum, shown next to the Cond menu when the condition is **Follows**: toward one end fires cluster (a fire makes the next more likely), toward the other they alternate (a fire makes the next less likely), centre is neutral. | signed, centre neutral |
| Destination | The parameter this slot modulates, chosen from a grouped menu with cascading submenus (Pitch, Oscillator with Lo-fi and Additive submenus, Sub/Noise, Filter with Filter 1 / Filter 2 / Common, Waveshaper, Amp/Filter Envelope, Rates, Arp with the Random draw's Mutate / Spread / Bias, Acoustic, String, Modal, Kick, Voice, Macros, Output, then FX and the bus subsystems, with Off at the end to park the row). A per-voice destination modulates each note; a bus or FX destination modulates the whole channel. Set it to Off to keep a route's source, Via, and depth intact while it drives nothing. | grouped destination menu |
| Modal Mute | Under the Modal group: modulates the Modal oscillator's Ring / Choke note-off behaviour (free-ringing tail versus damped). | Ring / Choke |
| Depth | How much this slot moves the destination, and in which direction: right of centre adds, left subtracts, centre is off. | signed, centre off |

The bus tier uses the same Source, Destination, and Depth columns and targets the
post-mix effects and master. The bus tier has no Via column.

## Macros

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Macro 1 to 4 | Four assignable performance knobs, exposed as matrix sources. Each routes to any combination of destinations via the matrix and can be MIDI-learned to a hardware control. | 0 to 100 % |

## MIDI control sources

| Control | What it does | Range / values |
|---------|--------------|----------------|
| CC Source 1 to 8 | Each holds the incoming MIDI CC number this slot watches; the live value it streams becomes a matrix source. | CC 0 to 127 |
