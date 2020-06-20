import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
 @font-face {
  font-family: 'JetBrains Mono';
    src: local('static/fonts/JetBrainsMono-Regular.woff2') format('woff2'), /* Super Modern Browsers */
       local('static/fonts/JetBrainsMono-Regular.woff') format('woff'), /* Pretty Modern Browsers */
       local('static/fonts/JetBrainsMono-Regular.ttf')  format('truetype'), /* Safari, Android, iOS */
 }

 @font-face {
  font-family: 'Roboto', sans-serif;
    src: local('static/fonts/Roboto-Black.ttf')  format('truetype'),
    local('static/fonts/Roboto-BlackItalic.ttf')  format('truetype'),
    local('static/fonts/Roboto-Bold.ttf')  format('truetype'),
    local('static/fonts/Roboto-BoldItalic.ttf')  format('truetype'),
    local('static/fonts/Roboto-Italic.ttf')  format('truetype'),
    local('static/fonts/Roboto-Light.ttf')  format('truetype'),
    local('static/fonts/Roboto-LightItalic.ttf')  format('truetype'),
    local('static/fonts/Roboto-Medium.ttf')  format('truetype'),
    local('static/fonts/Roboto-MediumItalic.ttf')  format('truetype'),
    local('static/fonts/Roboto-Regular.ttf')  format('truetype'),
    local('static/fonts/Roboto-Thin.ttf')  format('truetype'),
    local('static/fonts/Roboto-ThinItalic.ttf')  format('truetype'),
    /* WOFF */
    local('static/fonts/Roboto-Black.woff')  format('woff'),
    local('static/fonts/Roboto-BlackItalic.woff')  format('woff'),
    local('static/fonts/Roboto-Bold.woff')  format('woff'),
    local('static/fonts/Roboto-BoldItalic.woff')  format('woff'),
    local('static/fonts/Roboto-Italic.woff')  format('woff'),
    local('static/fonts/Roboto-Light.woff')  format('woff'),
    local('static/fonts/Roboto-LightItalic.woff')  format('woff'),
    local('static/fonts/Roboto-Medium.woff')  format('woff'),
    local('static/fonts/Roboto-MediumItalic.woff')  format('woff'),
    local('static/fonts/Roboto-Regular.woff')  format('woff'),
    local('static/fonts/Roboto-Thin.woff')  format('woff'),
    local('static/fonts/Roboto-ThinItalic.woff')  format('woff'),
  }

 

  html {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  /* GLOBALS */
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.baseBg};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    width: 100vw;
    min-width: 320px;
  }

  p {
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize}
  }

  h1 {
    font-size: ${({ theme }) => theme.fontsizes.h1FontSize}
  }

  select {
    font-family: 'Roboto', sans-serif;
  }

  code {
    font-family: 'JetBrains Mono', Fallback, sans-serif !important;
  }

  /* PROGRESS BAR */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: rgb(231, 142, 165);
    background: linear-gradient(
      90deg,
      rgba(231, 142, 165, 1) 0%,
      rgba(254, 184, 206, 1) 74%
    );

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }
 /* SCROLL BAR */

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #8a8a8a;
    border: 0px none #ffffff;
    border-radius: 11px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.baseBg};
    border: 0px none #ffffff;
    border-radius: 11px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
}


`;
