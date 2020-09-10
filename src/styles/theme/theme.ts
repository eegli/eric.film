import { BREAKPOINTS } from './breakpoints';
import { COLOR_PALETTE } from './colors';
import { FONTSIZES } from './fontsizes';

// Themes assemble!

// Dark is our default
export const darkTheme = {
  colors: {
    bgPrimary: COLOR_PALETTE.darkPrimary,
    bgSecondary: COLOR_PALETTE.darkSecondary,
    bgTertiary: COLOR_PALETTE.darkTertiary,

    textPrimary: COLOR_PALETTE.brightPrimary,
    textSecondary: COLOR_PALETTE.brightSecondary,
    textTertiary: COLOR_PALETTE.brightTertiary,

    pink: COLOR_PALETTE.pinktBright,

    accents: {
      melon: COLOR_PALETTE.accentBlue,
      eggshell: COLOR_PALETTE.accentRed,
      brightBlue: COLOR_PALETTE.accentGreen,
    },
  },

  fontsizes: {
    ...FONTSIZES,
  },

  breakpoints: {
    ...BREAKPOINTS,
  },
};

// Next, we spread in the default dark theme and override styles if necessary.
// Also, we make sure the theme objects have the exact same shape - otherwise,
// switching between themes can become dangerous since some properties may not
// exist on both!

// Try to add a unique property to "lightTheme". Typescript will complain
// unless you add it to the default dark theme first.
export const lightTheme: Theme = {
  ...darkTheme,

  colors: {
    ...darkTheme.colors,
    bgPrimary: COLOR_PALETTE.brightPrimary,
    bgSecondary: COLOR_PALETTE.brightSecondary,
    bgTertiary: COLOR_PALETTE.brightTertiary,

    textPrimary: COLOR_PALETTE.darkPrimary,
    textSecondary: COLOR_PALETTE.darkSecondary,
    textTertiary: COLOR_PALETTE.darkTertiary,

    pink: COLOR_PALETTE.pinktDark,
  },
};

type Theme = typeof darkTheme;

// We extend the default interface of styled-components so that we don't have to
// write everything twice (an object containing the styles and a type for it).
// Disabling eslint is not uncommon for this purpose, and the team behind
// styled-components does it too for their empty DefaultTheme.

// If we don't do this, we get no indication of what properties exist on our
// theme and everything has a type of "any". Not so cool.

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
