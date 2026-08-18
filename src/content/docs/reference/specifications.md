---
title: Specifications & credits
description: Formats, system requirements, credits, and licensing.
---

The reference facts for Aconite: plugin formats, platform support, system
guidance, and credits.

---

## Plugin formats

| Format | Hosts |
|--------|-------|
| **VST3** | Most DAWs on macOS and Windows |
| **AU (Audio Unit)** | Logic Pro, GarageBand, and AU-compatible hosts on macOS |
| **Standalone** | Runs without a host on macOS and Windows |

All three formats install from a single installer. There is no harm in installing
all of them. For step-by-step installation instructions see
[Install & formats](/getting-started/install/).

---

## Platform support

| Platform | Supported |
|----------|-----------|
| macOS | Yes |
| Windows | Yes |
| Linux | Not supported |

---

## System requirements

Aconite is a CPU-intensive instrument. Specific minimum requirements are listed in
the installer and on the Alkaloid Audio website. General guidance:

- A modern multi-core processor is recommended. The plugin is multi-threaded and
  benefits from additional CPU cores, especially at higher voice counts and
  oversampling settings.
- A native Apple Silicon build is provided for macOS; an Intel build is also
  included.
- Standard 64-bit host required for VST3 / AU use.
- No minimum sample rate requirement beyond your host's normal operation; Aconite
  adapts to the host project sample rate automatically.
- RAM requirements are modest for a typical patch. Loading custom user wavetables
  adds a small additional memory footprint.

For authoritative system requirements, refer to the Alkaloid Audio website or the
installer readme.

---

## Audio specifications

| Specification | Detail |
|--------------|--------|
| Oscillators | 3 main + 1 sub + 1 noise; up to 8-voice unison per oscillator |
| Polyphony | Up to 16 voices |
| Scenes | 2 fully independent instruments — each with its own voice engine, effects rack, and sequencer/arp stage (Layer / Split / Channel modes; Shared or Per-Scene sequencer) |
| Filters | 2 independent filters; 7 models; 6 routing configurations |
| Envelopes | 6 (Env 1 amp, Env 2 filter, Env 3–6 free) |
| LFOs | 6 voice LFOs (2 drawable + 4 matrix-only) + 2 bus LFOs |
| Modulation matrix | 24 per-voice slots + 8 bus slots; 41 sources |
| Effects | 12 in a freely re-orderable chain |
| Oversampling | 1× / 2× / 4× / 8× (Quality setting) |

---

## Authorization

Aconite requires authorization to run after the trial period. For the full
authorization process, see
[Authorization](/getting-started/authorization/).

---

## Credits

**Aconite** is developed by **Alkaloid Audio**.

---

## Legal

Aconite and the Alkaloid Audio name are trademarks of Alkaloid Audio. All other
product names, company names, and trademarks mentioned are the property of their
respective owners and are used for identification purposes only. Refer to the
license agreement that accompanies the software for the complete terms of use.
