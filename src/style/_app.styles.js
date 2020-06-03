import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace,
      serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #eee;
    width: 100vw;
    height: 100vh;
  }
  iframe {
    width: 500px;
  }
`;
