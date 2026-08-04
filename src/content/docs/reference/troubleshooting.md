---
title: Troubleshooting & FAQ
description: 'Common questions and fixes: activation, CPU, "why does it sound alive?", and where your files live.'
---

Answers to the questions that come up most: activation and authorization,
managing CPU, why an "alive" patch's voices differ slightly from one another (the
character layer, by design), where your presets and themes live on disk, and what
to try when something is not behaving.

---

## No sound

**Q: I played a note and heard nothing. Where do I start?**

Work through this list:

1. **Is Aconite receiving MIDI?** Play a note; the on-screen keyboard along the
   bottom should light up. If it does not, your DAW's MIDI routing is not
   reaching the plugin. Check the instrument track's MIDI input assignment in your
   host.
2. **Is the master gain up?** The master level knob is at the top right of the
   interface. It defaults to 0 dB; if it was pulled down, bring it back up.
3. **Is the preset using a very long attack?** Pads often have attack times of
   several seconds. Hold the note for a few seconds and see if the sound appears.
4. **Are all voices in use?** If the Voices count is set low and every voice is
   held, a new note steals the oldest; you might have notes stuck on. Press
   **PANIC** (see below) to clear all state and start fresh.
5. **Is the filter closed?** On some patches, Cutoff can be swept down to near
   silence. Find the filter Cutoff and drag it up while holding a note.
6. **Is the FX chain muting the signal?** If you have a compressor or distortion
   effect enabled with extreme settings, the signal may be over-attenuated. Try
   disabling the FX rack effects one at a time.

---

## Plugin not showing up in the DAW

**Q: I installed Aconite but my DAW does not list it. What should I do?**

After installation, most DAWs need a **plugin rescan** before they will find a
newly installed instrument. In your DAW's plugin manager or preferences, run a
full rescan. Consult your DAW's documentation if you cannot find the option; the
location varies across hosts.

If after rescanning the plugin still does not appear:

- Make sure you installed the **correct format** for your host. Aconite ships as
  VST3 and AU (macOS). Some older DAWs do not support VST3; check which formats
  your host accepts.
- Confirm the plugin was installed to the **correct folder** for your system.
  Re-running the installer should place it correctly; if you installed manually,
  move the file to the expected location and rescan.

See [Installing Aconite](/getting-started/install/) for
format-specific path guidance.

---

## Authorization and activation

**Q: Aconite is asking for activation. How do I do it?**

See [Authorization](/getting-started/authorization/) for the
complete step-by-step guide. The short version: Aconite needs a one-time online
activation per machine. Once activated, the synth works fully offline.

**Q: I moved to a new computer and Aconite is locked again. Do I have to buy it
again?**

No. Deactivate on your old machine (or, if that is no longer possible, use the
deactivation option in your account portal), then activate on the new one. See
[Authorization](/getting-started/authorization/) for details.

**Q: Can I use Aconite without an internet connection?**

Yes, after the initial activation. Aconite does not phone home during normal use.

---

## High CPU usage

**Q: A certain patch is using a lot of CPU. Is something wrong?**

Not necessarily; it is most likely the Quality setting. Aconite's analog
modeling, especially the Ladder and Diode filter modes, uses oversampling to stay
clean. Higher Quality settings cost more CPU by design, and that expense buys
audibly better high-end and resonance behavior.

To reclaim CPU headroom:

- Lower the **Quality** setting (in the Voice / Play section, or in the plugin
  header). **2×** is the default and a good balance for playing and mixing; **1×
  (draft)** is nearly free, useful for arranging when you care about feel over
  fidelity.
- Enable **Auto HQ on bounce** so you can monitor at a lower Quality setting and
  still render at maximum automatically.
- Reduce the **Voices** count if the patch uses heavy polyphony and you do not
  need it.
- Disable FX effects you are not using: reverb and multi-tap delay carry the
  most cost.

See [The Aconite philosophy](/getting-started/philosophy/) for a
fuller explanation of what oversampling is buying.

---

## MIDI input not working

**Q: I pressed keys on my controller and nothing happened, Aconite shows no
activity.**

- Confirm your MIDI controller is connected and recognised by your operating
  system.
- In a DAW: make sure the instrument track's MIDI input is set to your controller
  (or All MIDI Inputs).
- In the standalone app: check Aconite's audio/MIDI preferences (gear icon in
  the header) and confirm your device is selected as a MIDI input.

If the on-screen keyboard along the bottom of the plugin produces sound but your
hardware controller does not, the issue is upstream of Aconite: the DAW or
system is not routing MIDI to it.

---

## Hardware knob not moving a parameter

**Q: I turn a knob on my MIDI controller but nothing moves in Aconite.**

You need to assign that hardware knob to a parameter using MIDI Learn:

1. Right-click the parameter you want to control.
2. Choose **MIDI Learn** from the menu.
3. Move the hardware knob or fader; Aconite catches the first incoming CC and
   binds it.

Once learned, Aconite uses **soft takeover** (pickup mode): the parameter will
not jump when you first grab the hardware control. It starts following only once
the incoming value sweeps past the parameter's current value, so there are no
sudden jumps.

To see, edit, or remove all your MIDI assignments, open the **MIDI** manager
(the MIDI button in the header).

See [Keyboard & mouse shortcuts](/reference/shortcuts/) for more
on the right-click menu, and the
[Modulation matrix](/modulation/matrix/) chapter for using
hardware controls as mod-matrix sources.

---

## A preset sounds different on another machine

**Q: I sent a preset to a friend and it sounds noticeably different on their
machine. Why?**

MIDI-learn mappings (the assignments between your hardware controllers and
Aconite's parameters) are **per-machine** and are never saved into preset files.
This is by design: a preset file carries the sound, not your hardware setup.
When your friend loads the preset, any parameters you had mapped to hardware
controllers will simply sit at their saved values, not follow their controllers.

If the sound itself is different (not just the hardware response), check:

- **Quality setting.** If your friend has a different Quality setting, the
  filtering character may differ subtly, especially on Ladder and Diode patches.
- **Plugin version.** If you are on different versions, a new preset may have
  used features not present in the older version. Make sure you are both on the
  same release.

---

## Stuck / hanging notes

**Q: A note is sustaining forever and won't stop. What do I do?**

Press the red **PANIC** button in the header. PANIC instantly silences everything:
it stops all notes, kills any stuck or hung voices across both scenes, clears
held, mono, and arp state, and flushes the effect bus so reverb and delay tails
go quiet. It is the emergency stop for a runaway patch.

If stuck notes happen repeatedly with the same patch, check whether the host's
MIDI routing is sending note-off messages. Some older MIDI setups or looped clips
can drop note-off events, which leaves voices open indefinitely.

---

## "Why do my voices sound slightly different from one another?"

**Q: I play a chord and the individual notes seem to have slightly different
character. Is Aconite out of tune?**

This is the **analog character layer**; it is working as intended and is a
feature, not a bug. Aconite models the personality variation you find in hardware
synthesizers where each voice card is slightly different: voices can drift
slightly in pitch, cutoff, envelope timing, pulse width, and glide.

The amount of this variation is controlled by four knobs in the Voice / Play
section: **Voice Detune**, **Drift**, **Variance**, and the **Transient** mode.
At zero, every voice collapses to identical and the synth is clinically precise.
Higher settings model looser, older hardware. A patch that feels "alive" or
"shimmering" usually has these set up deliberately.

See [The Aconite philosophy](/getting-started/philosophy/) for
more on why this layer exists.

---

## I cannot find my saved presets

**Q: I saved a preset but I cannot find it in the browser.**

User presets appear under the **User** section in the preset browser menu. Click
the name button in the header to open the menu and look under User. If your
preset does not appear there, make sure you clicked **Save** and gave the preset
a name; stepping away without saving will discard the changes.

Preset files are stored in your user application data directory. The exact path
depends on your operating system; see
[Installing Aconite](/getting-started/install/) for the default
location.

---

## Need more help?

If you cannot find an answer here, reach out to Alkaloid Audio support with a
description of your host, operating system, Aconite version, and what you were
doing when the problem occurred.
