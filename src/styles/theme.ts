export const theme = {
  // Base bg color, chrome grey
  baseBg_old: '#323639',
  baseBg: '#262626',
  baseBgraised: '#313131',

  // Text shadow color, pink
  textShadowColor: '#feb8ce',

  // Light grey, unused
  textLinkColor: '#daddd8',

  textSecondaryColor: '#c2c2c2',

  // Text color on base bg
  textColor: '#eef0f2',

  // Scrollbar
  scrollbarDark: '#8a8a8a',

  // Accents, taken from https://coolors.co/ffa69e-faf3dd-b8f2e6-aed9e0-5e6472
  colors: {
    accents: {
      melon: '#FFA69E',
      eggshell: '#FAF3DD',
      brightBlue: '#B8F2E6',
      powderBlue: '#AED9E0',
      coral: '#5E6472',
    },
  },

  fontsizes: {
    baseFontSize: '16px',
    secondaryFontSize: '14px',
    baseIconFontSize: '18px',
    h1FontSize: '20px',
    h2FontSize: '18px',
  },
};

export type DarkTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends DarkTheme {}
}
