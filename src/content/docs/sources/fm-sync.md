---
title: FM & operator feedback
description: Cross-oscillator frequency modulation routings, FM depth and mode, and per-oscillator operator feedback (self-FM).
---

Beyond simple mixing, the oscillators can interact. **FM** (frequency modulation)
is chosen as a routing between the oscillators, with FM depth and a mode
(exponential or through-zero), plus per-oscillator operator feedback for self-FM.
For **oscillator sync** — hard/soft sync, the routing topologies, and single-osc
Sync Ratio — see [Oscillator sync](/sources/sync/).

## Frequency modulation (FM)

FM lets one oscillator modulate the pitch of another at audio rate. At low depths
it fattens the tone with beating and sidebands; at high depths it generates
complex, clangorous harmonic structures, the same mechanism behind classic FM
synthesizers, with all three of Aconite's oscillators available as operators.

### Routing

A single **FM Routing** selector wires the oscillators together. Osc 1 is always
the carrier: it is what you hear as the output.

| Routing | What it does |
|---------|-------------|
| **No FM** | Oscillators run independently. |
| **2 → 1** | Osc 2 modulates the pitch of Osc 1. Classic two-operator FM. |
| **3 → 2 → 1** | Osc 3 modulates Osc 2, which in turn modulates Osc 1, a three-operator chain. |
| **2 → 1 ← 3** | Both Osc 2 and Osc 3 modulate Osc 1 independently, adding their FM contributions together. |

### FM Depth

**FM Depth** controls how much pitch modulation is applied to the carrier. At low
values you get subtle enrichment: added overtones and a slightly richer, more
complex timbre. Push it further and sideband pairs multiply, the sound
brightens dramatically, and you start to hear the inharmonic clang that makes FM
famous. Very high depths produce dense, metallic spectra.

:::tip
Modulating FM Depth with an envelope from the [modulation matrix](/modulation/matrix/)
is one of the fastest ways to create a bright-then-warm decay arc. Map a fast
attack/slow decay envelope to FM Depth and the attack snaps bright while the
tail settles back.
:::

### FM Mode: Exp vs Linear

**FM Mode** switches between two mathematical relationships between modulator and
carrier pitch:

- **Exp (exponential)**: modulation is applied in a way that preserves musical
  intervals. When Osc 2 rises a fifth, the effect on Osc 1's timbre is musically
  consistent regardless of Osc 2's pitch. This is the most intuitive mode and
  works well for harmonic enrichment and vibrato-adjacent effects at low depths.

- **Linear (through-zero)**: modulation is applied linearly in frequency. At high
  depths the carrier is swept through zero cycles per second, which generates the
  classic through-zero FM timbres: bell-like symmetry, cancellation nulls, and
  tones with a strong even-harmonic component. More unpredictable, more extreme,
  and the sound of classic digital FM synthesis.

Linear mode opens up territory that Exp cannot reach. If Exp FM sounds warm and
organic, Linear sounds metallic and electric.

## Operator feedback (self-FM)

Each oscillator has its own **FB** control that feeds a small amount of its own
output back into its own pitch input. This is the classic DX7 operator feedback
trick, and it works the same way here:

- On a **Sine** wave, low FB values add a gentle odd-harmonic brightness; higher
  values morph progressively from pure sine toward sawtooth as the sine folds back
  on itself. The feedback path is per-oscillator and separate from the cross-oscillator FM routing.
- On other waveforms (saw, square, triangle) feedback adds edge and harmonic grit
  on top of the existing waveform character. The effect is subtler than on a sine
  because there is already harmonic content, but it thickens and hardens the tone.

:::note
Operator feedback is an oscillator's self-modulation; it is distinct from the
**FM Routing** controls, which wire one oscillator into another. Both can be active
at once, and combining them (for example, Osc 2 with high FB feeding into Osc 1)
gives access to dense, complex timbres.
:::

## Oscillator sync

Hard and soft **oscillator sync** — the routing topologies (2 → 1 / 3 → 2 → 1 /
2 → 1 ← 3), the dial-able **Amount**, **Hard/Soft** mode, **Reset Phase**, and
**Sync Ratio** (a full sync sound from a single oscillator, with no second
oscillator spent) — has its own page, with the SYNC tab, the live sync view, and
the mod destinations: see [Oscillator sync](/sources/sync/).

Sync and FM can be active at once. This is deep, unusual territory: sync reshapes
the oscillator's cycle while FM pushes its instantaneous pitch around, for timbres
with sync's harmonic focus and FM's inharmonic complexity together. Start with
moderate amounts of each and use the [modulation matrix](/modulation/matrix/) to
sweep them separately, listening to how each dimension changes on its own.
