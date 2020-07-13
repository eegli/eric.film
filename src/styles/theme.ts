export const theme = {
  // Accents, taken from https://coolors.co/ffa69e-faf3dd-b8f2e6-aed9e0-5e6472
  colors: {
    accents: {
      melon: '#034363',
      eggshell: '#53272D',
      brightBlue: '#365952',
    },

    // Base bg color, chrome grey
    baseBg: '#262626',
    baseBgraised: '#313131',

    // Text shadow color, pink
    textShadowColor: '#feb8ce',

    // Light grey, unused
    textLinkColor: '#daddd8',

    textSecondaryColor: '#c2c2c2',

    // Text color on base bg
    textPrimaryColor: '#eef0f2',
  },

  fontsizes: {
    baseFontSize: '16px',
    secondaryFontSize: '14px',
    baseIconFontSize: '18px',
    h1FontSize: '22px',
    h2FontSize: '20px',
  },
};

export type DarkTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends DarkTheme {}
}
