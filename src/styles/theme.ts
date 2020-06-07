export const darkTheme = {
  // Base bg color
  baseBgChromeGrey: '#323639',

  // Text shadow color
  textShadowColor: '#feb8ce',

  // Light grey, unused
  timberwolf: '#daddd8',

  // Sand, unused
  isabelline: '#ecebe4',

  // Text color on base bg
  baseTextLightWhite: '#eef0f2',

  // Scrollbar
  scrollbarDark: '#8a8a8a',
};

type DarkTheme = typeof darkTheme;

declare module 'styled-components' {
  interface DefaultTheme extends DarkTheme {}
}
