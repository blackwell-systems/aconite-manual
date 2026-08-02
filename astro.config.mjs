// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub project Pages serves this repo under a sub-path, so `site` + `base`
// must both be set or assets (CSS, images) will resolve to the wrong URL.
// A custom domain (e.g. docs.alkaloid.audio) can later drop `base` and point
// `site` at the domain instead.
export default defineConfig({
  site: 'https://blackwell-systems.github.io',
  base: '/aconite-manual',
  integrations: [
    starlight({
      title: 'Aconite',
      tagline: 'The analog-modeling polysynth: user manual',
      description:
        'The user manual for Aconite, a filters-forward analog-modeling polysynth by Alkaloid Audio.',
      customCss: ['./src/styles/custom.css'],
      social: [],
      // Dark-mode only: override the theme components so the header has no
      // light/dark toggle and the site always renders dark (ignores OS
      // `prefers-color-scheme` and any stored `starlight-theme`).
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      // Sidebar groups mirror the manual outline's Part structure so the whole
      // manual is browsable end to end.
      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'Welcome', link: '/' },
            { label: 'The Aconite philosophy', link: '/getting-started/philosophy/' },
            { label: 'Install & formats', link: '/getting-started/install/' },
            { label: 'Authorization', link: '/getting-started/authorization/' },
            { label: 'Quick start: your first sound', link: '/getting-started/quick-start/' },
          ],
        },
        {
          label: 'The interface',
          items: [
            { label: 'The window at a glance', link: '/interface/overview/' },
            { label: 'Header & global controls', link: '/interface/header/' },
            { label: 'How every control works', link: '/interface/controls/' },
            { label: 'Theming', link: '/interface/theming/' },
            { label: 'Signal flow', link: '/interface/signal-flow/' },
          ],
        },
        {
          label: 'Sound sources',
          items: [
            { label: 'Oscillators', link: '/sources/oscillators/' },
            { label: 'Additive oscillator', link: '/sources/additive/' },
            { label: 'FM & hard sync', link: '/sources/fm-sync/' },
            { label: 'Sub oscillator & noise', link: '/sources/sub-noise/' },
            { label: 'Mixer & Mix Drive', link: '/sources/mixer/' },
          ],
        },
        {
          label: 'Filters',
          items: [
            { label: 'Saturation & drive', link: '/filters/saturation/' },
            { label: 'The two filters', link: '/filters/the-two-filters/' },
            { label: 'Feedback (“bark”) & FB Sat', link: '/filters/feedback/' },
            { label: 'Routing & configs', link: '/filters/routing/' },
            { label: 'The response graph', link: '/filters/response-graph/' },
          ],
        },
        {
          label: 'Envelopes & amp',
          items: [
            { label: 'The envelope pool', link: '/envelopes/pool/' },
            { label: 'Drawable envelopes', link: '/envelopes/drawable/' },
          ],
        },
        {
          label: 'Modulation',
          items: [
            { label: 'Modulators overview', link: '/modulation/overview/' },
            { label: 'LFOs', link: '/modulation/lfos/' },
            { label: 'Envelope follower', link: '/modulation/env-follower/' },
            { label: 'The modulation matrix', link: '/modulation/matrix/' },
          ],
        },
        {
          label: 'The effects rack',
          items: [
            { label: 'Using the FX rack', link: '/effects/using-the-rack/' },
            { label: 'Effect by effect', link: '/effects/effect-by-effect/' },
          ],
        },
        {
          label: 'Arp, sequencer, scenes, voicing',
          items: [
            { label: 'Arpeggiator', link: '/performance/arpeggiator/' },
            { label: 'Step sequencer', link: '/performance/step-sequencer/' },
            { label: 'Voice & play', link: '/performance/voice-and-play/' },
            { label: 'Scenes', link: '/performance/scenes/' },
          ],
        },
        {
          label: 'Master, MPE, presets',
          items: [
            { label: 'The Master band', link: '/master/master-band/' },
            { label: 'MPE & MIDI-learn', link: '/master/mpe-midi-learn/' },
            { label: 'Presets & A/B', link: '/master/presets/' },
          ],
        },
        {
          label: 'Tutorials',
          items: [{ label: 'Learn by doing', link: '/tutorials/' }],
        },
        {
          label: 'Parameter reference',
          items: [
            { label: 'Oscillators, sub & noise', link: '/parameter-reference/oscillators/' },
            { label: 'Filters & waveshaper', link: '/parameter-reference/filters/' },
            { label: 'Envelopes', link: '/parameter-reference/envelopes/' },
            { label: 'LFOs & modulators', link: '/parameter-reference/lfos-modulators/' },
            { label: 'Modulation matrix & macros', link: '/parameter-reference/modulation-matrix/' },
            { label: 'Effects', link: '/parameter-reference/effects/' },
            { label: 'Arp & step sequencer', link: '/parameter-reference/arp-sequencer/' },
            { label: 'Voice, performance & scenes', link: '/parameter-reference/voice-performance/' },
            { label: 'Master, MPE & scope', link: '/parameter-reference/master/' },
          ],
        },
        {
          label: 'Reference appendices',
          items: [
            { label: 'Parameter list', link: '/reference/parameters/' },
            { label: 'MIDI CC & automation', link: '/reference/midi-cc/' },
            { label: 'Keyboard & mouse shortcuts', link: '/reference/shortcuts/' },
            { label: 'Performance & CPU', link: '/reference/performance/' },
            { label: 'Troubleshooting & FAQ', link: '/reference/troubleshooting/' },
            { label: 'Glossary', link: '/reference/glossary/' },
            { label: 'Specifications & credits', link: '/reference/specifications/' },
          ],
        },
      ],
    }),
  ],
});
