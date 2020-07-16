// Palette: https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129
// Accents: https://coolors.co/ffa69e-faf3dd-b8f2e6-aed9e0-5e6472
const PALETTE = {
  // FIX dark / white to black / white
  darkPrimary: '#121212',
  darkSecondary: '#222222',
  darkTertiary: '#3b3b3b',
  // darkQuaternary: '#3b3b3b',
  // darkQuinary: '#515151',

  whitePrimary: '#f7f7f7',
  whiteSecondary: '#e1e1e1',

  pinktBright: '#feb8ce',
  pinktDark: '#ff80a8',

  // Legacy
  // _darkPrimary: '#262626',
  // _darkSecondary: '#313131',
  // _whitePrimary: '#f7f7f7',
  // _whiteSecondary: '#e1e1e1',
};
export const darkTheme = {
  colors: {
    accents: {
      melon: '#034363',
      eggshell: '#53272D',
      brightBlue: '#365952',
    },
    // Replace these
    darkPrimary: PALETTE.darkPrimary,
    darkSecondary: PALETTE.darkSecondary,
    darkTertiary: PALETTE.darkTertiary,

    whitePrimary: PALETTE.whitePrimary,
    whiteSecondary: PALETTE.whiteSecondary,

    pinkPrimary: PALETTE.pinktBright,
  },

  fontsizes: {
    baseFontSize: '16px',
    secondaryFontSize: '14px',
    baseIconFontSize: '18px',
    h1FontSize: '22px',
    h2FontSize: '20px',
  },
};

// Reversing the dark theme
export const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    blackPrimary: PALETTE.whitePrimary,
    blackSecondary: PALETTE.whiteSecondary,
    whitePrimary: PALETTE.darkPrimary,
    whiteSecondary: PALETTE.darkSecondary,
    // A slightly darker pink for the light theme
    pinkPrimary: PALETTE.pinktDark,
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
