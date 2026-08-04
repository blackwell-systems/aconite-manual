---
title: FM & hard sync
description: Frequency modulation routings, FM depth and mode, operator feedback, and band-limited hard sync.
---

Beyond simple mixing, the oscillators can interact. **FM** (frequency modulation)
and **hard sync** are chosen as routings between the oscillators, with FM depth and
a mode (exponential or through-zero), per-oscillator operator feedback for
self-FM, and band-limited sync that stays clean.

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

## Hard sync

Hard sync forces Osc 1 to restart its waveform cycle every time a master
oscillator completes one of its own cycles. This creates a characteristic
sweeping, harmonically rich tone that was all over 1980s leads and remains a
go-to for aggressive, cutting sounds.

### Routing

The **Sync Routing** selector mirrors the FM routing structure. Osc 1 is always
the **slave**, the oscillator whose cycle resets. Osc 2 and Osc 3 are the
masters:

| Routing | What it does |
|---------|-------------|
| **Off** | No sync. Oscillators run freely. |
| **2 → 1** | Osc 2 resets Osc 1's phase on each of Osc 2's cycle completions. |
| **3 → 2 → 1** | Osc 3 resets Osc 2, which resets Osc 1, a sync chain. |
| **2 → 1 ← 3** | Both Osc 2 and Osc 3 independently reset Osc 1. |

### Making the sync sweep

The classic hard-sync sound comes from detuning Osc 1 (the slave) away from Osc 2
(the master). The master holds the played pitch; Osc 1's natural frequency is
tuned away (sharper, usually) using its **Coarse** and **Detune** controls. As
Osc 1's frequency climbs relative to the master, a sweep of harmonic notches and
peaks moves through the spectrum.

The two most expressive techniques:

1. **Static detune**: set Osc 1 several semitones sharp of the master. This
   locks in a specific harmonic character and lets you play pitched lines where
   every note has the same aggressive, synced quality.

2. **Swept detune**: route an envelope or LFO from the
   [modulation matrix](/modulation/matrix/) to Osc 1's pitch. The
   harmonic spectrum sweeps in real time, giving you the classic "rising sync
   scream" on attack or a slowly evolving sweep across held notes.

:::tip
For the classic hard-sync lead, set Osc 2 routing to **2 → 1**, put Osc 1 about
a fifth sharp with Coarse, then connect a fast envelope to Osc 1 pitch (positive
Amount, moderate Decay). The sync sweep brightens aggressively on each attack
and settles back. Nudge Resonance up on [the filter](/filters/the-two-filters/)
to emphasise the sweep further.
:::

### Why it stays clean

Aconite's sync is band-limited: the reset edge is smoothed in a way that
suppresses aliasing without dulling the characteristic sync snap. You can sweep
it at any speed and through the full pitch range without the digital crackling
that a naive sync implementation would introduce.

## Combining FM and sync

FM and hard sync can be active simultaneously. This is a deep and unusual
territory: the sync is reshaping Osc 1's cycle while FM is simultaneously
pushing its instantaneous pitch around. The combination produces timbres that
neither technique reaches alone: sounds with sync's harmonic focus and FM's
inharmonic complexity at once. Start with moderate amounts of each and use the
[modulation matrix](/modulation/matrix/) to sweep them separately,
listening to how each dimension changes independently.
