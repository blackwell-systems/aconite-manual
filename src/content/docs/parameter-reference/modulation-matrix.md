---
title: "Modulation matrix and macros"
description: "Lookup reference for the per-voice and bus modulation matrix slots (Source, Via, Destination, Depth), the macro knobs, and the learnable MIDI CC sources."
---

A terse lookup for the modulation matrix. The matrix has a per-voice tier plus a
bus tier; each slot binds a source, an optional Via transform, a destination, and
a signed depth. See [The modulation matrix](/aconite-manual/modulation/matrix/).

## Matrix slot columns

| Control | What it does | Range / values |
|---------|--------------|----------------|
| Source | The modulation source feeding this slot: an LFO, envelope, sequencer, macro, MIDI control or bus LFO driving the destination by the Depth amount. | source list |
| Via | A transform applied to the source before it drives the destination. Invert flips its polarity; Rectify folds it positive; Quantize snaps it to discrete steps; Lag slews its motion. | Invert / Rectify / Quantize / Lag |
| Destination | The parameter this slot modulates. A per-voice destination modulates each note; a bus or FX destination modulates the whole channel. | destination list |
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
