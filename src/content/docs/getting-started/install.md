---
title: Install & formats
description: Installing Aconite as VST3, AU, or Standalone on macOS and Windows, and where your files live.
---

Aconite installs as three formats from one installer. Pick the ones your setup
needs; there is no harm in installing all of them.

## Formats

- **VST3**: for most DAWs on macOS and Windows.
- **AU (Audio Unit)**: for Logic Pro, GarageBand, and other AU hosts on macOS.
- **Standalone**: a self-contained app that runs without a DAW, for practicing,
  sound design, or live use.

## Platforms

Aconite runs on **macOS** and **Windows**.

## Installing

1. Download the installer for your platform.
2. Run it and choose which formats to install.
3. Launch your DAW. If it caches its plugin list, rescan so Aconite appears. In
   Logic, AU validation runs the first time you launch after installing.
4. To confirm the install worked, open the **Standalone** app; it does not depend
   on a host, so it is the quickest way to verify the synth runs.

## Updating

Install a newer version over the old one; it replaces the plugin in place. Your
presets, themes, and saved projects are stored separately from the plugin binary,
so updating never touches them.

## Where your files live

Aconite keeps its user content in your user application-data folder, separate from
the plugin itself:

- **User presets** are `.synthpreset` files in Aconite's presets folder.
- **Themes** are `.labtheme` files you save from the theme editor.

Because these live in your user data and not inside the plugin, they survive
updates and are easy to back up: copy the folder. See
[Presets & A/B](/aconite-manual/master/presets/) for how presets are organized and
[Theming](/aconite-manual/interface/theming/) for themes.

:::note
The exact folder path depends on your operating system and follows the standard
user application-data location for your platform. Your DAW's plugin manager, or
the Standalone app, will point at the same content.
:::
