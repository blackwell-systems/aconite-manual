---
title: Oscillator sync
description: Hard and soft oscillator sync — the routing topologies, single-osc Sync Ratio (no second oscillator needed), Amount, Hard vs Soft, Reset Phase, the SYNC tab, and the mod destinations.
---

Oscillator **sync** is one of the fastest ways to a bright, screaming, sweepable
tone. It restarts one oscillator's cycle against another's, and the reset edge
carves a moving comb of formants into the sound — the classic sync lead of the
1980s, and still a go-to for aggressive, cutting patches.

Aconite gives sync its own **SYNC tab** and makes it a full feature: the
osc-to-osc routing you'd expect, plus a **single-oscillator** sync mode that needs
no second oscillator, a dial-able and modulatable **Amount**, a **Hard/Soft**
mode, and a **Reset Phase** target. Everything defaults to off, so a patch pays
nothing until you turn sync on.

## What hard sync is

A **master** oscillator and a **slave** oscillator run at different frequencies.
Every time the master finishes a cycle, it forces the slave to restart its own
cycle part-way through. Because the perceived pitch follows the *master's* period
while the slave's (usually higher, detuned) frequency decides where the chop
lands, you get a rich, formant-shifting timbre that sweeps as you detune the
slave. That sweep is the sound of hard sync.

**Soft sync** is a gentler version: instead of resetting on every master cycle, it
only resets when the slave is in the back half of its own cycle at that moment. The
reset fires less often, so the snap is rounded off — the same idea, softened.

## Finding the controls: the SYNC tab

All sync controls live on the **SYNC** tab of the source-shaping deck — the deck
reads **Waveshaper | Resonator | SYNC**. Click **SYNC** and you get:

- A live **sync-waveform view** driven by the real oscillator — turn a control and
  the trace re-draws so you can *see* the sync edge move.
- The **Routing** selector, and the **Ratio**, **Amount** and **Reset φ** knobs,
  and the **Hard / Soft** toggle.

The SYNC tab is the only place to set the sync routing; there is no duplicate
control in the oscillator strip. The panel reads your oscillator selections and
greys out routings that would not produce sync — so if Osc 1 is set to FM (which
cannot sync), the panel shows a note rather than leaving an option that silently
does nothing. Hover any of the four main controls for a description of what it does.

When you load a preset that uses sync, the deck opens the SYNC tab for you
automatically, so you land on the controls the patch is actually using.

## Routing: sync between the three oscillators

The **Sync Routing** selector mirrors the FM routing, so the oscillator section
reads one way. Osc 1 is always the **slave** (the one whose cycle resets); Osc 2
and Osc 3 are the masters:

| Routing | What it does |
|---------|-------------|
| **Off** | No sync. Oscillators run freely. |
| **2 → 1** | Osc 2 resets Osc 1 on each of its cycles. Classic two-oscillator sync. |
| **3 → 2 → 1** | Osc 3 resets Osc 2, which resets Osc 1 — a sync chain. |
| **2 → 1 ← 3** | Both Osc 2 and Osc 3 independently reset Osc 1. |

To make the sweep, detune Osc 1 (the slave) away from the master with its
**Coarse** and **Detune**, while the master holds the played pitch. Set it sharp
and every note gets the same synced bite; sweep it with an envelope or LFO for the
classic "rising sync scream."

The **Osc 1 Coarse** modulation destination covers a full **three octaves** of
range at maximum depth, so a single envelope route can drive the whole sweep in one
shot — no need to combine Coarse and Detune destinations. The factory preset
**Prophet Sync Lead** uses exactly this: an Env 3 → Osc 1 Coarse route attacks
from a bright, biting sync timbre and sweeps the full range as the envelope falls.

## Sync Ratio: sync from one oscillator, no second one spent

Here's the part worth knowing. Normally sync costs you an oscillator — you have to
give up Osc 2 or Osc 3 to be the master. **Sync Ratio** removes that cost. Turn the
**Ratio** knob (1 to 8) and the oscillator syncs against a **built-in internal
master** instead: the oscillator you hear runs at its pitch times the ratio, while
a hidden master runs at the played pitch and fires the reset. The pitch you hear
stays put; the ratio brightens and sweeps the tone, exactly like a detuned-slave
sync sweep — but **without spending a second oscillator**.

So the fast workflow is:

1. Pick **any** oscillator and a sync-capable model (any of the six below).
2. Leave the other two oscillators doing whatever you like.
3. Open the SYNC tab and turn **Ratio** up.

That's a full sync sound out of one oscillator. Ratio applies to all three
oscillators, and it's independent of the Routing selector — you can run osc-to-osc
routing *and* per-oscillator Ratio at the same time.

:::tip
Route an envelope or LFO to **Sync Ratio** from the
[modulation matrix](/modulation/matrix/) and the sync sweep animates on its own —
a fast attack/slow decay envelope gives you the rising-sync-scream attack from a
single oscillator, no detuning and no second oscillator required.
:::

## Amount: how deep the sync bites

**Amount** sets how far the slave resets on each master cycle. At the top (its
default) it's a full reset — the classic, hardest hard sync. Turn it down and the
slave only moves part-way toward the reset each time, softening the sync edge
continuously; at the bottom there's effectively no reset at all. Amount is a
modulation destination (**Sync Amt**), so you can open and close the sync depth
over a note with an envelope, LFO, or sequencer for animated sweeps. The edge
stays clean at any Amount.

## Hard vs Soft

The **Hard / Soft** toggle picks the two flavours described above: **Hard** resets
on every master cycle (the brightest, most aggressive sync), **Soft** only resets
in the back half of the slave's cycle for a rounder, less brutal tone. Try Soft
when Hard sync feels too harsh for the part.

## Reset Phase

**Reset φ** (Reset Phase) sets *where* in its cycle the slave snaps to, instead of
always snapping to the start. Nudging it moves where the reset seats and changes
the harmonic colour of the sync edge — a subtle voicing control on top of Amount.
It's a modulation destination too (**Sync Phase**), so the target can move under an
LFO or envelope.

## Which oscillators can sync

Sync needs an oscillator with a running cycle to reset, so it works on the six
**phase-based** models:

- **Standard**, **Moog**, **SuperSaw** (the whole ensemble resets together),
  **Juno**, **Wavetable** (a full sync source *and* target), and **Chip** — both
  the NES 2A03 (its pulse and triangle voices; the noise voice has no pitch to
  sync) and the C64 SID.

The struck and additive models — **String**, **Modal**, **Kick**, **Additive**,
**Acoustic**, and **FM** — don't sync, by their nature: they're plucked, struck, or
built from summed partials rather than run from a single cycle, so the sync
controls simply have no effect on them.

## Modulating sync

Three sync controls are modulation destinations in the
[modulation matrix](/modulation/matrix/), so you can animate them:

- **Sync Amt** — the sync depth.
- **Sync Phase** — the reset target.
- **Sync Ratio** — the single-oscillator sync sweep.

Right-click the **Ratio** knob to modulate it directly and watch its live mod ring.

:::note
Sync is off by default, and a patch that never touches it sounds exactly as it did
before — so you can add it to any existing sound without changing what's already
there.
:::
