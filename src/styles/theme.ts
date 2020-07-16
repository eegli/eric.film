// Palette: https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129
// Accents: https://coolors.co/ffa69e-faf3dd-b8f2e6-aed9e0-5e6472

export const darkTheme = {
  colors: {
    accents: {
      melon: '#034363',
      eggshell: '#53272D',
      brightBlue: '#365952',
    },

    baseBg: '#121212',
    baseBgraised: '#222222',
    // Unused atm
    baseBgraised_2: '#3b3b3b',
    baseBgraised_3: '#515151',

    // Text shadow color, pink
    textShadowColor: '#feb8ce',

    textPrimaryColor: '#f7f7f7',
    textSecondaryColor: '#e1e1e1',

    // Old - use if new design is shit!
    // baseBg: '#262626',
    // baseBgraised: '#313131',
    // textPrimaryColor: '#f7f7f7',
    // textSecondaryColor: '#e1e1e1',
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
    baseBg: '#e1e1e1',
    baseBgraised: '#f7f7f7',
    textPrimaryColor: '#121212',
    textSecondaryColor: '#222222',
    textShadowColor: '#ff80a8',
  },
};

type DarkTheme = typeof darkTheme;
type LightTheme = typeof lightTheme;

// Namespace merging: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends DarkTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends LightTheme {}
}
