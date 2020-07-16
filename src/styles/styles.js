import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  html {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  /* GLOBALS */
  body {
    position: relative;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    color: ${({ theme }) => theme.colors.whitePrimary};
    height: 100%;
    width: 100%;
    min-width: 320px;
    text-decoration: none;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }

  p {
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize}
  }

  h1 {
    font-size: ${({ theme }) => theme.fontsizes.h1FontSize}
  }

  h2 {
    font-size: ${({ theme }) => theme.fontsizes.h2FontSize}
  }

  p, h2 {
    line-height: 1.7rem;
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
    background: ${({ theme }) => theme.colors.darkPrimary};
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
