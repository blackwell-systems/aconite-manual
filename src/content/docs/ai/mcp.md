---
title: AI over MCP
description: "Let an external AI (Claude Desktop, Claude Code, or any MCP client) drive Aconite headlessly: compose with the generative engines, author any parameter, save a complete plugin-loadable preset, and ask the synth to explain itself."
---

Aconite ships a small **MCP server** that lets an external AI drive the
instrument. Point Claude Desktop, Claude Code, or any
[Model Context Protocol](https://modelcontextprotocol.io) client at it and you can
ask, in plain language, for a chord progression, an evolving generative pattern, a
whole patch, or an explanation of how any part of the synth works. The AI reads a
structured map of the instrument and then sets real Aconite parameters, so what it
builds is an actual Aconite patch you keep sculpting, not a black box.

The AI can author an **entire, real Aconite patch**: set any of the instrument's
roughly 1,600 parameters, compose the generative layer (scale, chord progression,
arpeggiator, probability filter, clip notes), and save a complete, plugin-loadable
`.synthpreset` that loads and sounds exactly like one you built by hand. Everything
it makes is **editable instrument state**, a real chord lane and a real set of
parameters, so you load its work into Aconite and keep tweaking, never a black box.

:::note
**One honest caveat: the AI can't hear yet.** The server renders **notes and a
musical analysis, not audio**, so the AI can reason about the *music* but cannot
audition *timbre* live. That is the only gap, and it does not limit what it
authors: every parameter it sets is written into the preset, and a saved preset is
**complete and sounds fully in the plugin**. You load it and you are the ears.
:::

## What it is, and why it is powerful

The server exposes two surfaces to the AI:

- **Compose generatively.** Set the key and a chord progression, configure the
  arpeggiator and the probability filter, or write literal clip notes, then
  **render** to a deterministic stream of note events plus a musical analysis
  (roman-numeral progression, density, pitch range, how many notes the probability
  filter thinned). The AI iterates against that analysis and can **export a
  standard `.mid`** file when it is happy.
- **Author any parameter, and whole patches.** Browse the full parameter catalog,
  set any of Aconite's parameters by name, and **save a complete, plugin-loadable
  preset** (or load one back to keep working on it).

On top of both, the AI can read a **structured knowledge map** of the whole
instrument, so it makes musically intelligent choices instead of poking random
values. That is what turns "give me a patch" from a lucky guess into a considered
one.

## Prerequisites: build and run the server

The MCP server is a small self-contained program that ships with Aconite. You run
it once and leave your MCP client to talk to it.

There are two pieces:

1. **The render helper** — a headless program that renders the generative engines
   to notes.
2. **The MCP server** — the program your AI client connects to, which drives the
   helper and holds the current session (your scale, progression, arp, parameters,
   and so on).

Build both, then run the server:

```sh
# 1. build the render helper (once)
clang++ -std=c++17 -O2 -I Source tools/mcprender.cpp -o build_tools/mcprender

# 2. build the MCP server (a single static binary)
cd mcp && go build -o ../build_tools/aconite-mcp .

# 3. run it (a stdio server; your MCP client launches it for you)
./build_tools/aconite-mcp
```

:::note
The server is a **local stdio** program: your MCP client launches it and talks to
it over standard input/output, so nothing listens on a network port. It holds one
session at a time. Building the server needs Go 1.24+; building the render helper
needs a C++ toolchain (`clang++`).
:::

## Connect an MCP client

Your MCP client launches the server for you; you just tell it where the binary is.

**Claude Desktop** — add an `mcpServers` block to your `claude_desktop_config.json`
(macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`), then
restart Claude Desktop:

```jsonc
{
  "mcpServers": {
    "aconite": {
      "command": "/absolute/path/to/build_tools/aconite-mcp",
      "env": {
        "ACONITE_MCPRENDER": "/absolute/path/to/build_tools/mcprender"
      }
    }
  }
}
```

**Claude Code** — add the same server from the CLI:

```sh
claude mcp add aconite /absolute/path/to/build_tools/aconite-mcp \
  --env ACONITE_MCPRENDER=/absolute/path/to/build_tools/mcprender
```

Point `command` at your `aconite-mcp` binary. The `ACONITE_MCPRENDER` variable is
optional if you launch the server from inside the Aconite source tree (it finds
the render helper on its own), but setting it makes the config work from anywhere.

Once connected, ask your client to list the server's tools, or just start
describing what you want; the AI picks the right tools itself.

## A tour of what the AI can do

You never call the tools by hand. You talk to the AI in plain language and it
reaches for the right one. Under the hood, these are the capabilities it has.

### Compose with the generative engines

The AI can build the same [generative stage](/performance/arpeggiator/) you drive
by hand:

- **`set_scale`** — the key: a root note and a scale (major, minor, dorian, and so
  on).
- **`set_progression`** — the [chord lane](/performance/chord-lane/): a timeline of
  chord blocks, each a scale degree with a quality and a voicing.
- **`set_arp`** — the [arpeggiator](/performance/arpeggiator/): mode (Up, Down,
  Random, and so on), rate, octave span, per-step probability, and whether it plays
  single notes or whole-chord stabs.
- **`set_prob`** — the [probability filter](/performance/probability-filter/): thin
  the note stream by register, range, or harmonic function.
- **`write_clip_notes`** — literal notes on a timeline, for a finite written line
  rather than an infinite generative process.
- **`render`** — turn the current setup into note events plus a musical analysis.
  It is **deterministic**: the same setup and the same seed give the same notes, so
  the AI (and you) can reproduce a result exactly.
- **`describe_state`** — read back the current composition and the last render's
  analysis in plain text.
- **`export_midi`** — write the last render to a standard `.mid` file you can drop
  into any DAW.

### Author any parameter, and complete patches

Beyond the generative layer, the AI can set **any** Aconite parameter and save the
whole thing as a real preset:

- **`list_params`** — browse the full parameter catalog. It is large, so the AI
  pages it by group (`oscillator`, `filter`, `envelope`, `modulation`,
  `generative`, `fx`, `scene`, `master`, `mod-matrix`, `other`) or by a search
  substring.
- **`get_param`** / **`set_param`** — read or set one parameter by its id (for
  example `filter1Cutoff`, `arpMode`, `scB_osc1Type`). Values can be given in real
  units (Hz, dB), as a normalized 0–1 amount, or, for menu parameters, by the
  choice name (for example the filter type `"Ladder"`). Everything is validated and
  clamped, so the AI cannot set an out-of-range value.
- **`save_preset`** — serialize the whole session into a **complete, plugin-loadable
  `.synthpreset`**: every parameter, plus the chord lane and any clip notes. This is
  the same preset format Aconite writes itself, so it loads straight into the plugin.
- **`load_preset`** — read an Aconite preset back into the session, so the AI can
  keep working on a patch you already have.

:::note
A saved preset is **complete and real**: it loads into Aconite exactly like a
preset you saved from the plugin. Just remember the audio is realized by the plugin
when you load it, not by the server. A few engines with their own drawable data
(the additive spectrum, an FM patch, hand-drawn envelope contours) are edited in
the plugin editor; a preset saved over MCP carries all the *parameters* and leaves
those drawn shapes at their defaults.
:::

### Ask the synth to explain itself

- **`describe_synth`** — a structured knowledge map of the whole instrument: the
  oscillator models, the two filters, the envelopes, the modulation matrix
  (including the probability and [distribution-cloud](/modulation/matrix/) sources),
  the generative stage, the effects rack, and the two scenes, each with a short
  "what it does and how to use it," plus a handful of idiomatic patch **recipes**.
  This same knowledge is also available as an MCP **resource**
  (`aconite://knowledge/synth`), so a client can load it as context.

This is the part that makes the AI good rather than merely capable: it reads how
Aconite is actually meant to be used and then authors patches that reflect it.
Asking it "how does the filter section work?" or "what oscillator models are
there?" is a fast way to learn the instrument yourself.

## Worked examples

Talk to the AI the way you would to a patch designer. A few prompts to try, and
what the AI does behind them.

**"Build me an evolving generative pad in C minor."**
The AI sets the scale to C minor, lays down a progression (say i–VI–III–VII on the
chord lane), turns on the arpeggiator in Random mode across two octaves with a
per-step probability so notes come and go, points the chord lane at the arp so each
step walks the current chord's tones, and renders to check the result. Ask it to
save a preset and you have a hands-free, non-repeating pad to load and play.

**"Make a probability pan and velocity cloud patch."**
The AI uses the two independent
[distribution-cloud](/modulation/matrix/) modulation sources: it routes Probability Cloud 1 to
**Pan** and Probability Cloud 2 to **Amp** in the modulation matrix, then shapes each cloud
(how locked-versus-random it is, its spread, its centre) so every note scatters
independently in the stereo field and in level. Saved as a preset, it gives you a
living, shimmering stereo texture.

**"Brighten the filter and save it as a preset."**
The AI reads the current filter with `get_param`, raises `filter1Cutoff` (and maybe
a touch of resonance), confirms the new value, and calls `save_preset`. You load
the `.synthpreset` and hear the brighter patch in the plugin.

:::tip
Because the AI reads `describe_synth` first, you can be vague and still get a
considered result. "Give me something dark and generative that breathes" is enough:
it will reach for the arpeggiator, the chord lane, the probability filter, and a
slow modulation sweep, because the knowledge map tells it those are the tools for
"evolving" and "breathing."
:::

## The one caveat

Everything above is here today: the AI authors complete, real patches, sets any
parameter, saves and loads real presets, and understands the instrument. The single
gap is audition. The headless server renders **notes and analysis, not audio**, so
the AI can reason about the *music* (what notes, what harmony, how dense) but cannot
yet hear the *timbre* (how bright, how gritty, how wide) to tweak it by ear. That
judgement stays with you: a preset it saves is complete and sounds fully in the
plugin, so you load it and listen. Live, real-time audition over MCP is on the
roadmap; it is the one thing this surface does not yet do.
