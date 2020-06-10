export const darkTheme = {
  // Base bg color, chrome grey
  baseBg: '#323639',

  // Text shadow color, pink
  textShadowColor: '#feb8ce',

  // Light grey, unused
  textLinkColor: '#daddd8',

  // // Sand, unused
  // isabelline: '#ecebe4',

  // Text color on base bg
  textColor: '#eef0f2',

  // Scrollbar
  scrollbarDark: '#8a8a8a',
};

type DarkTheme = typeof darkTheme;

declare module 'styled-components' {
  interface DefaultTheme extends DarkTheme {}
}
