---
title: Recording & capture
description: "Capture a live take to WAV straight from the standalone — Record, and the retroactive Capture last take (grab the last ~45 seconds after the fact)."
---

Aconite is a performance instrument. You improvise hands-free against generated
harmony — the arpeggiator, the chord lane, the probability filter all throwing
ideas — and the best passages arrive unplanned. **Recording** and **Capture last
take** make sure a phrase you love doesn't vanish the moment it passes. No DAW
required: capture straight from the standalone app to an audio file.

## Two ways to capture

### Record

Arm **● REC**, play, and hit stop. Everything from arm to stop is written to a WAV
file. It's exactly what you played — one real, one-time take, which is the whole
point of a generative instrument. When you stop, reverb and delay tails are allowed
to ring out for a moment so the ending isn't chopped.

### Capture last take

This is the one that fits how you actually play. Aconite is *always* quietly
remembering the **last ~45 seconds** of output. When the engine throws a phrase you
love, press **⟲ Capture last take** — *after* it has already happened — and those
seconds are written to their own file. You don't have to have been recording, and
you don't have to react in time: the moment is already captured, you're just
choosing to keep it. It's the "keep the good bit" button.

Capture last take also has a **keyboard shortcut**, so you can grab a take with zero
mouse travel — even while your hands are on the keys.

## Where it lives

Recording controls sit in a slim **transport strip directly above the keyboard**:
the **● REC** button (its dot blinks red while recording), an elapsed timer, a live
left/right output meter, and the **⟲ Capture last take** button. It's placed where
your hands already are during a take, so reaching for it never breaks your flow.

Prefer a cleaner face? The strip is **completely hideable**. Open the **Options gear**
(top of the window) and switch off **Record strip** — it disappears and the keyboard
reclaims the space. The Capture-last-take keyboard shortcut keeps working even when
the strip is hidden, so you lose nothing but the clutter. The strip is shown by
default in the standalone app.

## The files you get

- **WAV**, at your session sample rate, in stereo.
- **24-bit** by default — clean, musical, and compact. Choose **32-bit float** if you
  want the exact internal signal with no ceiling and no rounding.
- Saved to **`~/Music/Aconite Renders/`** (created for you), named after the patch and
  the moment: `PatchName_YYYYMMDD_HHMMSS.wav`. You can pick a different folder from the
  Save dialog.
- Optional **Normalize on finish** (brings the peak up to −1 dBFS). Off by default, so
  your raw performance level is preserved.

If your disk can't keep up during a long take, a small dropout indicator tells you
honestly rather than silently spoiling the file.

## Good to know

- Recording **never changes your sound.** It's a read-only tap on the final output, so
  the file is exactly what you heard — the same whether you were recording or not.
- Realtime recording is a **free** feature. Faster-than-realtime **offline bounce**
  (for reproducible patch previews) is planned separately.

:::tip[The workflow]
Set a generative patch going — an arp or the chord lane over a held key — and just
play. Don't reach for Record when something great happens; keep playing, and press
**Capture last take** once it's passed. You'll keep the magic without ever
interrupting it.
:::
