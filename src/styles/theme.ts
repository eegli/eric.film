// Palette: https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129

// Legacy
// _blackPrimary: '#262626',
// _blackSecondary: '#313131',
// _whitePrimary: '#f7f7f7',
// _whiteSecondary: '#e1e1e1',

const PALETTE = {
  /*
   * Base gray palette
   * https://coolors.co/121212-222222-3b3b3b-b1b1b1-f1f1f1-f7f7f7
   *
   */
  darkPrimary: '#121212',
  darkSecondary: '#222222',
  darkTertiary: '#3b3b3b',

  brightPrimary: '#f7f7f7',
  brightSecondary: '#F1F1F1',
  brightTertiary: '#b1b1b1',

  /*
   * Base accent palette
   * https://coolors.co/034363-53272d-365952
   *
   */
  accentBlue: '#034363',
  accentRed: '#53272D',
  accentGreen: '#365952',

  /*
   * Branding pink
   *
   */
  pinktBright: '#feb8ce',
  pinktDark: '#ff80a8',
};

export const darkTheme = {
  colors: {
    bgPrimary: PALETTE.darkPrimary,
    bgSecondary: PALETTE.darkSecondary,
    bgTertiary: PALETTE.darkTertiary,

    textPrimary: PALETTE.brightPrimary,
    textSecondary: PALETTE.brightSecondary,

    pink: PALETTE.pinktBright,

    accents: {
      melon: PALETTE.accentBlue,
      eggshell: PALETTE.accentRed,
      brightBlue: PALETTE.accentGreen,
    },
  },

  fontsizes: {
    baseFontSize: '16px',
    secondaryFontSize: '14px',
    baseIconFontSize: '18px',
    h1FontSize: '22px',
    h2FontSize: '20px',
  },
};

export const lightTheme = {
  ...darkTheme,

  colors: {
    ...darkTheme.colors,
    bgPrimary: PALETTE.brightPrimary,
    bgSecondary: PALETTE.brightSecondary,
    bgTertiary: PALETTE.brightTertiary,

    textPrimary: PALETTE.darkPrimary,
    textSecondary: PALETTE.darkSecondary,

    pink: PALETTE.pinktDark,
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
