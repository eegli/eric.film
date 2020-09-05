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
};

// Spread in the default dark theme and replace if necessary
export const lightTheme = {
  ...darkTheme,

  colors: {
    ...darkTheme.colors,
    bgPrimary: COLOR_PALETTE.brightPrimary,
    bgSecondary: COLOR_PALETTE.brightSecondary,
    bgTertiary: COLOR_PALETTE.brightTertiary,

    textPrimary: COLOR_PALETTE.darkPrimary,
    textSecondary: COLOR_PALETTE.darkSecondary,

    pink: COLOR_PALETTE.pinktDark,
  },
};

type DarkTheme = typeof darkTheme;
type LightTheme = typeof lightTheme;

// We extend the default interface of styled-components so that we don't have to
// write everything twice (an object containing the styles and a type for it).
// Disabling eslint is not uncommon for this purpose, and the team behind
// styled-components does it too.

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends DarkTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends LightTheme {}
}
