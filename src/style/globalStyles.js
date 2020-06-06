import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`


  /* GLOBALS */
  body {
    font-family: 'Lato', sans-serif;
    color: #eef0f2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #323639;
  }
  h1,
  h2,
  h3 {
    text-shadow: 1px 1px 0px #feb8ce;
    letter-spacing: 0.2rem;
    font-weight: 400;
  }

  iframe {
    width: 500px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
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

  /* BG VIDEO */
  #bg-video{
  height: 100%;
  width: 100%;
  top: 0;
  padding: none;


}
`;
