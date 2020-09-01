import { COLOR_PALETTE } from './colors';
import { FONTSIZES } from './fontsizes';

// Themes assemble!

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

export type DarkTheme = typeof darkTheme;
export type LightTheme = typeof lightTheme;

// Namespace merging: https://www.typescriptlang.org/docs/handbook/declaration-merging.html

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends DarkTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends LightTheme {}
}
