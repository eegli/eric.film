import 'styled-components';

// Declaration merging for existing definitions
declare module 'styled-components' {
  export interface DefaultTheme {
    baseBgChromeGrey: string;
    textShadowColor: string;
    baseTextLightWhite: string;
    _timberwolf: string;
    _isabelline: string;
  }
}
