import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body {
    font-family: 'Lato', sans-serif;
    color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #373737;
   
  }
  h1 h2 h3 {
    text-shadow: 2px 2px 0px #feb8ce;
    letter-spacing: 0.5rem;
    color: #000;
  &:hover {
    text-decoration: line-through;
  }
  }

  iframe {
    width: 500px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

/* 

integrative pig pink
#E78EA5
multiscreen baby pink
#FEB8CE
eerie dark grey
#373737

*/

/* 2D4B52
62B1AF
F4EEDA
F4917E
CE666A */
