---
title: "Tutorials: learn by doing"
description: End-to-end walkthroughs that build whole patches and teach a subsystem in context.
---

The reference chapters explain each control in isolation; the tutorials put them
together. Each walkthrough builds a complete patch from an empty starting point and
teaches a technique along the way. By the end of each one you will have both a
usable sound and a transferable skill.

Before you start, load the **Init** preset from the factory bank; it is the bare
default patch with everything at neutral values.

---

## Tutorial 1: A punchy pluck bass

**What you will learn:** shaping a fast filter envelope, setting up a mono bassline
voice, and using portamento for expression.

**Technique:** envelope shaping, mono play mode, glide.

**Takes about:** 10–15 minutes.

### Build the sound

**Step 1: Start from Init.** Open the preset browser, click the name button, and
select **Init** from the factory bank. You now have a single sine oscillator, no
modulation, and all effects off.

**Step 2: Choose a plucky waveform.** Find the oscillator section (Osc 1) and click
its waveform menu. Select **Saw (Analog)**. This gives you the harmonically rich,
warm-edged character of a vintage bass oscillator. Play a few low notes; you should
hear a buzzy, bright saw tone.

**Step 3: Set the range.** On Osc 1, set **Octave** to **-1**. This drops everything
down an octave, placing it in bass territory. Play around C2–C3 on your keyboard.

**Step 4: Shape the amp envelope.** Find the **Amp Env** (Envelope 1). Set these
values:
- **Attack:** nearly all the way down, very fast, around 5–10 ms.
- **Decay:** about one-third up, roughly 120–200 ms.
- **Sustain:** all the way down (zero). The note will die completely after the Decay.
- **Release:** short, around 30–50 ms.

Now every note you play snaps on and dies away: the basic pluck shape. The tail
length is controlled by Decay.

**Step 5: Add filter snap to the pluck.** The amp envelope gives you the volume
shape; now give the sound a bright attack that darkens over time using the filter.

Find the **Filter** section and the **Filter Env** (Envelope 2):
- Set the filter **Cutoff** to about one-third up, relatively dark to start.
- On the **Filter Env**, set **Attack** fast (like the amp env), **Decay** to about
  100–150 ms, **Sustain** to zero, and **Release** short.
- Turn the Filter Env's **Amount** up to about half. This opens the filter on each
  note-on and closes it as the note decays.

Play some notes. You should hear a snapping brightness on the attack that fades into
a duller body: the classic pluck character.

:::tip
The Amount control on the filter envelope is bipolar. Positive values open the
filter on attack; negative values close it. Try a small negative amount on a high
Cutoff setting for a different take: the filter briefly darkens on each hit.
:::

**Step 6: Go mono.** Open the **Voice / Play** section and set **Play Mode** to
**Mono**. Now only one note sounds at a time; new notes cut off the previous one.
This is the standard setup for a bass part.

**Step 7: Add a touch of glide.** Still in Voice / Play, turn **Glide** up a small
amount, just enough to bend a semitone or two over about 40–60 ms. Set the glide
mode to **Fingered** so glide only kicks in when you overlap notes, leaving staccato
hits clean.

Play overlapping notes (hold one, press another before lifting). The pitch slides
between them. Staccato notes still snap cleanly to pitch.

**Step 8: Dial in the filter character.** Experiment with:
- **Resonance** (a moderate amount emphasises the snap point).
- **Drive** (adds harmonic richness and compression through the filter's own
  saturation, fattening the body).
- If you want the full acid-bass flavour, change the filter **Model** to **Acid** and
  bring Resonance up to about 70%. The Acid model's resonance eats the lows and
  creates a distinctive squelch.

**Step 9: Add a small amount of drive or compression (optional).** In the FX rack,
enable the **Compressor** and set a moderate ratio with a fast attack and medium
release. This glues the bass and lets you push the level without clipping.

**Step 10: Save.** Click **Save** in the preset browser and give it a name.

### What to try next

- Route **Velocity** → filter **Cutoff** in the modulation matrix (right-click Cutoff
  → Add modulation → Velocity) so harder playing opens the filter more.
- Try different filter models: Ladder for growl, Diode for a gentler squelch, SVF
  for a clean, modern pluck.
- See [The two filters](/filters/the-two-filters/) for a complete guide
  to the filter character controls.

---

## Tutorial 2: An evolving pad

**What you will learn:** using an LFO to animate the filter, building slow attack
envelopes, and using the modulation matrix to wire movement into a pad.

**Technique:** LFO modulation, slow envelopes, unison, reverb.

**Takes about:** 15–20 minutes.

### Build the sound

**Step 1: Start from Init.** Load the Init preset.

**Step 2: Layer two oscillators.** Aconite has three main oscillators. Use at least
two:
- **Osc 1** → **Saw (Unison)**. This is a stacked super-saw with seven detuned copies.
  Turn **Detune** up to about 30% (the second ring on the compound knob). This gives
  you immediate width and movement.
- **Osc 2** → **Square**. In the Mixer, pull Osc 2's level down to about 40% so it
  sits under Osc 1. This adds a hollow, woody undertone.

Osc 3 can stay off (fader down in the Mixer) for now.

**Step 3: Set a dark, open filter.** On the Filter, set **Cutoff** to about 40%
(roughly mid-low). You want it dark enough that the LFO sweep has somewhere to go.
Set **Resonance** to about 15%, just a gentle emphasis, not a squelch.

Choose filter model **SVF**, Mode **LP** (low-pass). SVF is clean and efficient, good
for pads at high polyphony.

**Step 4: Slow amp and filter attack.** The amp and filter envelopes together define
how the pad breathes in.

For the **Amp Env** (Envelope 1):
- **Attack:** about two-thirds up, 2–4 seconds.
- **Decay:** moderate, 1–2 seconds.
- **Sustain:** around 70%.
- **Release:** 3–5 seconds so the pad lingers after you lift your hands.

For the **Filter Env** (Envelope 2):
- **Attack:** similar to the amp, 2–4 seconds.
- **Decay:** moderate, 1 second.
- **Sustain:** around 50%.
- **Release:** long.
- **Amount:** turn it up about a third. The filter should open slowly over the attack,
  as the sound blooms.

Hold a chord. You should hear it slowly swell in, brighten gently, and fade out long
after you release.

**Step 5: Add an LFO to the filter.** This is where the pad starts to feel alive
rather than static.

Find **LFO 1** in the Modulators section. Set:
- **Rate:** very slow, around 0.3–0.5 Hz. One cycle every 2–3 seconds.
- **Shape:** Sine (the default gentle wave).

Now route LFO 1 to Cutoff. The fastest way: right-click the **Cutoff** knob → **Add
modulation** → **LFO 1**. A modulation route is created at a default depth.

Hold a chord and watch (and hear) the filter slowly breathe open and closed. In the
mod matrix, find the LFO 1 → Cutoff row and adjust **Depth**. A value around 0.25
is a good starting point, enough to hear movement without sweeping too far.

:::tip
The mod-dot on the Cutoff knob glows to show it is modulated, and a live arc
animates to show where LFO 1 is currently pushing the value. This is a read-only
display; author routes via the right-click menu or the matrix grid.
:::

**Step 6: Draw a custom LFO shape (optional, but rewarding).** Click **LFO 1**'s
shape editor. You will see a drawable canvas. By default it is a sine wave. Try
adding a slow rise followed by a plateau and a faster fall: an asymmetric contour
that lingers open before closing. This teaches the core technique that makes Aconite's
LFOs different from a basic sine wave: you author the shape exactly.

After drawing, play your chord again and listen to how the custom contour changes the
feel of the filter movement.

**Step 7: Add unison and spread.** In the **Voice / Play** section:
- **Unison:** 3 or 4 voices per note.
- **Unison Detune:** about 15–25% for gentle beating.
- **Unison Spread:** about 50% to pan the stacked voices across the stereo field.

The pad should now feel wide and slightly shimmering.

**Step 8: Add reverb.** Enable the **Reverb** in the FX rack. Set a large **Size**,
long **Decay**, and Mix at about 30–40%. The pad should now sound like it exists in a
real space.

:::note
Reverb Mix interacts with the pad's release time: a very long release into a
very long reverb can blur notes together. If your chord changes become muddy,
shorten the amp Release slightly, or lower the Reverb Mix.
:::

**Step 9: Wire Variance for more life (optional).** In the Voice / Play section, turn
**Variance** up a small amount, around 10–15%. This adds per-voice differences in
cutoff, envelope timing, and pulse width, so each stacked voice has a slightly
different character. The pad goes from wide-but-static to genuinely alive.

**Step 10: Save.** Name and save your preset.

### What to try next

- Try **LFO 2** on Resonance, at an even slower rate (0.1 Hz) for very slow resonance
  breathing. Right-click Resonance → Add modulation → LFO 2.
- Route **Keytrack** to Cutoff in the matrix so higher notes are brighter.
- Try the **Morph** destination in the matrix: route LFO 1 to **Morph 1** instead of
  (or alongside) Cutoff, and the LFO will sweep the filter's response mode from LP to
  BP and back: a character sweep rather than a frequency sweep.
- See [LFOs](/modulation/lfos/) and
  [Modulation matrix](/modulation/matrix/) for the full guide.

---

## Tutorial 3: A 303 acid line

**What you will learn:** setting up the acid filter, programming a bassline in the
step sequencer, and using slide and accent for the classic 303 gesture.

**Technique:** Acid/Diode filter, step sequencer, slide, accent, MIDI-learn macros.

**Takes about:** 20–30 minutes.

### What makes the acid sound

The classic Roland TB-303 sound has three defining features: a resonant filter with a
"squelchy" envelope sweep that "eats the lows", a slide that bends pitch smoothly
between chosen steps (not every step), and accent notes that hit louder and open the
filter further. All three are directly supported in Aconite.

### Build the sound

**Step 1: Start from Init.** Load the Init preset.

**Step 2: Set up an acid oscillator.** On Osc 1:
- Waveform: **Saw** (the plain, clean-bandlimited saw; the 303 is a clean DCO, not a
  fat super-saw).
- Octave: **-1** for bass register.
- Leave Detune at zero; the 303 is monophonic and in tune.

In the Mixer: Osc 1 all the way up, everything else off.

**Step 3: Select the Acid filter.** In the Filter section, click the **Model** menu
and select **Acid**. This is Aconite's strict 303-style filter: spread poles, an
uncompensated passband so resonance eats the lows, and a resonance that sits right at
the edge of self-oscillation.

Set these values:
- **Cutoff:** about 30% up, dark and nearly closed.
- **Resonance:** about 65–75%. The Acid filter at high resonance is where the squelch
  character comes from.
- **Drive:** a small amount, around 15–20%, to add the slight grit of the original
  circuit.

Play a low note and slowly drag Cutoff up and down. You should hear the characteristic
acid filter: resonance emphasised and slightly crunchy, the low end disappearing as
resonance rises, and a singing peak right at the cutoff point.

**Step 4: Set the filter envelope for acid.** The 303 envelope is fast and
aggressive.

On the **Filter Env** (Envelope 2):
- **Attack:** very fast, nearly zero, or just a few milliseconds.
- **Decay:** short to medium, around 80–150 ms. This is the parameter that most
  defines how "snappy" or "long" the acid sweep sounds.
- **Sustain:** zero. The filter snaps open and then closes back down.
- **Release:** very short.
- **Amount (Env Amt):** turn it up to about 60–70%. Each note should snap the filter
  open and then close as the envelope decays. Try longer and shorter Decay times; this
  single parameter controls how "punchy" versus "swooping" the patch sounds.

Hold a low note. You should hear the characteristic acid snap: the filter opens bright
and closes to dark over the decay time.

**Step 5: Set Mono and Glide.** In **Voice / Play**:
- **Play Mode:** Mono (one note at a time, essential for the slide to work).
- **Glide Mode:** Fingered.
- **Glide time:** around 40–80 ms. This is the slide speed: a shorter time gives a
  sharper bend, longer gives a slower portamento. The 303 canonical range is 50–70 ms.

**Step 6: Program a step sequence.** Open the **Step Sequencer** section. Select
**Mode: Step Seq** if it is not already set.

Set **Length** to 16 steps. You are going to program a classic-style acid line. Here
is a simple pattern to get started; remember that steps are scale degrees (1 = root),
so the pattern transposes as you play:

| Step | Degree | Octave | Slide | Accent |
|------|--------|--------|-------|--------|
| 1 | 1 | 0 | - | on |
| 2 | 1 | 0 | - | - |
| 3 | 1 | -1 | slide | - |
| 4 | 5 | -1 | - | on |
| 5 | 1 | 0 | - | - |
| 6 | 1 | 0 | slide | - |
| 7 | 3 | 0 | - | - |
| 8 | 5 | 0 | - | on |
| 9–16 | (rest, or vary as you like) | | | |

To enter a step: click the degree number in the step's column. To set Slide, click
the Slide cell on that step. To set Accent, click the Accent cell. For the octave,
click the step's Octave control up or down.

With the sequencer running and a note held (the held root is the key the pattern
plays in), hold down a low C and let the pattern run. You should hear a simple acid
line that transposes with whatever root you hold.

:::tip
The **Slide** flag on a step triggers the 303-style portamento into the *next*
note. For a slide to bend pitch audibly, you need **Mono** mode active and
**Glide** turned up. Without both, slides play as plain notes.
:::

**Step 7: Hear the accent.** Accented steps hit at a higher velocity. Because the
Filter Env has velocity sensitivity by default, accented steps also open the filter
slightly further. If you want the accent to open the filter dramatically (the
classic 303 "accent boom"), route **Velocity** → **Cutoff** in the mod matrix:
right-click Cutoff → Add modulation → Velocity. Set Depth around 0.2–0.3. Now
accented steps cause a bigger filter snap than unaccented ones.

**Step 8: Sync the sequencer to your DAW.** On the step sequencer panel, enable
**Sync** and choose a division, typically **1/16**. The pattern now locks to your
host's BPM and bar position, so it starts in time when your DAW plays.

**Step 9: Add character.** A 303 acid line benefits from a few small touches:
- Enable the **Chorus** in the FX rack, set Model to **BBD I** or **BBD II**, Mix
  very low (10–15%), and Rate slow. This adds the subtle bucket-brigade "spreading"
  of the original unit.
- A small amount of **Delay** (Tape model, synced, 1/8 or 1/16 division, low mix)
  adds the ghost-echo effect common in acid tracks.

**Step 10: Vary the pattern live.** While the pattern runs, try:
- Holding a different root note; the pattern transposes and stays in key.
- Tweaking **Decay** on the filter envelope in real time; this is the primary
  expressive control on a 303, and a slow sweep of it while the line plays is a
  classic performance move.
- Slowly dragging **Cutoff** up while the pattern runs, opening the filter over several
  bars for a build.
- Adjusting **Resonance** upward until the filter is just at the edge of self-oscillation.

**Step 11: Save.** Name and save the preset.

### What to try next

- Explore the **Diode** filter model as an alternative to Acid: slightly gentler knee,
  the passband stays fuller as resonance rises, a more "restrained" acid character.
- Try **Ratchet** on one of the steps (set it to 2 or 3) for a stuttered roll on that
  note.
- Use the **Accidental** field on a step (±1) to add chromatic approach notes that
  step outside the scale for a moment: a key 303 gesture.
- Add a **Macro** knob routed to Cutoff and Resonance with opposite signs, so one knob
  sweeps the filter through its full character arc in a single turn.
- See [Step sequencer](/performance/step-sequencer/) for the full step
  model reference and [The two filters](/filters/the-two-filters/) for
  deeper filter guidance.

---

## Where to go from here

These three tutorials cover the core gesture of subtractive synthesis (source,
filter, envelope, modulation) plus the step sequencer. Every other sound in the
factory bank is built from the same principles, applied in different combinations.

A few directions to explore next:

- **Physical models.** Load **Felt Piano**, **Handpan**, or **Steel Drum** from the
  factory bank and compare the String and Modal oscillator modes to the virtual-analog
  oscillators you used above. The approach is different but the filter, envelopes, and
  modulation matrix all work the same way.
- **Draw a modulator.** Open LFO 1's shape editor and draw a completely custom shape.
  Route it to Cutoff, envelope times, or oscillator detune. The
  [LFOs](/modulation/lfos/) chapter covers the full editor.
- **Build a beat.** Use the Kick oscillator type on one instance and the Modal model on
  another to synthesize a kick and a percussion hit, then layer them in the Mixer.
- **Explore scenes.** Switch to Layer mode (Voice / Play → Scene Mode → Layer), edit
  scene B to a completely different patch (a pad under a lead, for instance), and play
  both at once. See [Voice & play](/performance/voice-and-play/) for
  the scene system.
