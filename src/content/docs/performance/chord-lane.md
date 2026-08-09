---
title: The chord lane
description: "Play a whole chord progression under the arp from one held key: relative-diatonic chord blocks, smooth voice-leading, polymeter, and full voicing control."
---

![The chord lane, a band of chord blocks pinned above the note grid in Grid mode](../../../assets/screenshots/chord-lane-grid.png)

The **chord lane** lets you play a whole chord progression under the arp from a
single held key. Instead of holding a four-note chord and letting the arp walk it,
you draw a row of chord blocks (a I–vi–IV–V, say) and hold *one* note: the lane
supplies the chords, and the arp plays through each one in turn as the progression
cycles. Hold a different note and the whole progression transposes and stays in key.
It shares the [arpeggiator](/performance/arpeggiator/) clock and rhythm engine, so
everything you already know about rate, gate, swing, and probability still applies.

The lane is **relative-diatonic**: you write the progression in scale degrees, not
fixed pitches, so it follows both the key you set and the note you play. It is also
**polymetric**: give the lane its own loop length and it re-colours your pattern as
the two cycles drift against each other. One held key becomes an evolving, composed
performance.

## Turning it on

The chord lane starts off, so existing patches sound exactly as before. Two things
control it:

- The **Chord** toggle switches the harmony on and off. When it is off, the arp
  plays from the keys you hold, as usual. Turning it off **mutes the lane without
  deleting your chords**: they stay drawn, ready to switch back on.
- The sequencer **mode** decides *where you see the lane*. In **Grid** mode the
  chord blocks appear as a band pinned directly above the note grid (shown above),
  co-scrolling with it. In the pool-walking order modes (Up, Down, Up-Down, Random,
  As Played), where there is no note grid to align to, the lane appears as a compact
  **docked strip** instead.

![The chord lane as a docked strip in an order mode](../../../assets/screenshots/chord-lane-strip.png)

Both presentations edit the same progression with the same controls: only the layout
differs.

## How the chords play

What the lane does depends on the arp mode:

- **In the order modes** (Up, Down, Up-Down, Random, As Played) the arp walks the
  *current chord's tones* instead of the notes you hold. As the progression advances,
  the pool of notes the arp is cycling swaps to the next chord. In a mono voice this
  gives you an arpeggiated line that follows the changes; in a poly voice the chord
  tones can ring together.
- **In Grid mode** the chord lane **re-harmonizes your drawn step pattern**: the
  degree pattern you programmed in the step grid is re-anchored to each chord's root
  as the progression cycles, so the riff you drew transposes to follow the chords
  while keeping its rhythm and contour. Rhythm and harmony run on their own cycles,
  so the pattern keeps evolving.

Either way, the scale keeps everything in key: chord tones are the strong notes, and
any passing or extension notes stay legal.

## Editing chords

The chord blocks behave like notes. **Drag a block's body to move it**, drag its
**right edge to resize it**, and click empty space to add a new one. Blocks never
overlap: drawing over a neighbour trims it, so only one chord is active at a time. A
**gap between blocks is silence** (no chord covers that time, so nothing sounds).

**Click a block to open its picker**, where you build the chord:

- **Degree** sets the chord's root as a scale degree (I through vii), so it stays
  relative to the key.
- **Quality** picks the chord type. Left on **Auto** it derives the correct diatonic
  triad for that degree in the current scale (so no theory is required), or you can
  choose an explicit quality (major, minor, seventh, major seventh, minor seventh,
  sus2, sus4, diminished, add9, sixth) for a specific colour.
- **Accidental** (flat / natural / sharp) shifts the chord's root a semitone for
  borrowed chords.
- **Octave** moves the whole chord up or down a register.

Below the identity controls is the **voicing** section, which rearranges the chord's
own tones after they resolve, so a voiced chord still transposes with the key:

- **Inversion** (root, first, second, third) and **spread** (close, drop-2, drop-3,
  open) reshape the stack.
- **Slash bass** places any chord tone in the bass, so you can write a `C/E` or
  `C/G` that the label reflects automatically.
- A **per-tone strip** lets you nudge an individual voice up or down an octave,
  **omit** a tone (drop the fifth, say), or **double** one (double the root).
- A **mini-keyboard preview** lights up the exact notes the current voicing produces,
  so you can see the chord before you hear it.

## The lane controls

The lane-level controls sit in the chord band's header (in both presentations):

- **Key source** decides the key centre. **Played** follows the lowest note you hold,
  so the whole progression transposes as you play (the performance trick). **Fixed**
  pins the progression to a set key for fixed-song work.
- **Voice-Lead: Smooth** picks each chord's inversion to minimise the pitch movement
  from the previous chord, turning a run of root-position chords into a connected,
  composed progression. This is the single biggest polish lever; leave it off for
  strict root-position voicings.
- **Loop length** sets how many steps the lane runs before it repeats. Set it
  different from the arp's pattern length and the two cycles drift, producing
  **polymeter**: the same pattern re-colours over several bars before it lines up
  again. Repeated tiles of the lane are dimmed so you can read its loop against the
  grid.
- **Names / Roman** switches the block labels between the sounding chord name (`C`,
  `Am`, `B♭`, `C/G`), which updates live as you transpose, and Roman-degree labels
  (`I`, `vi`, `♭VII`).

## Chord-tone velocity

How hard the chord tones play follows the **Chord Velocity** setting:

- **Held-key** uses the velocity of the note you play, so your dynamics carry through
  the transposer: play softer and the whole progression plays softer.
- **Fixed** plays every chord tone at one set level, for an even, mechanical feel.

In Grid mode the re-harmonized pattern uses **each step's own velocity** from the
step lane, so the accents and dynamics you drew into the pattern are preserved as it
follows the chords.

:::tip
For an instant evolving performance: draw a I–vi–IV–V, set the arp to Up, turn the
**Chord** toggle on, switch **Voice-Lead** to Smooth, and give the lane a loop length
that differs from your pattern length. Hold one key and the progression cycles,
re-colouring itself as the two clocks drift; move your held key and the whole thing
transposes and stays in key.
:::
