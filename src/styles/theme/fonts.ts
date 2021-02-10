import { css } from 'styled-components';

export const FONTS = css`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
      url('/fonts/Roboto-MediumItalic.woff2') format('woff2'),
      url('/fonts/Roboto-MediumItalic.woff') format('woff'),
      url('/fonts/Roboto-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium'), local('Roboto-Medium'),
      url('/fonts/Roboto-Medium.woff2') format('woff2'),
      url('/fonts/Roboto-Medium.woff') format('woff'),
      url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Regular'),
      url('/fonts/Roboto-Regular.woff2') format('woff2'),
      url('/fonts/Roboto-Regular.woff') format('woff'),
      url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'),
      url('/fonts/Roboto-Light.woff2') format('woff2'),
      url('/fonts/Roboto-Light.woff') format('woff'),
      url('/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Italic'), local('Roboto-Italic'),
      url('/fonts/Roboto-Italic.woff2') format('woff2'),
      url('/fonts/Roboto-Italic.woff') format('woff'),
      url('/fonts/Roboto-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
      url('/fonts/Roboto-BoldItalic.woff2') format('woff2'),
      url('/fonts/Roboto-BoldItalic.woff') format('woff'),
      url('/fonts/Roboto-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold'), local('Roboto-Bold'),
      url('/fonts/Roboto-Bold.woff2') format('woff2'),
      url('/fonts/Roboto-Bold.woff') format('woff'),
      url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
      url('/fonts/Roboto-BlackItalic.woff2') format('woff2'),
      url('/fonts/Roboto-BlackItalic.woff') format('woff'),
      url('/fonts/Roboto-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
      url('/fonts/Roboto-LightItalic.woff2') format('woff2'),
      url('/fonts/Roboto-LightItalic.woff') format('woff'),
      url('/fonts/Roboto-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Black'), local('Roboto-Black'),
      url('/fonts/Roboto-Black.woff2') format('woff2'),
      url('/fonts/Roboto-Black.woff') format('woff'),
      url('/fonts/Roboto-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
      url('/fonts/Roboto-ThinItalic.woff2') format('woff2'),
      url('/fonts/Roboto-ThinItalic.woff') format('woff'),
      url('/fonts/Roboto-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Thin'), local('Roboto-Thin'),
      url('/fonts/Roboto-Thin.woff2') format('woff2'),
      url('/fonts/Roboto-Thin.woff') format('woff'),
      url('/fonts/Roboto-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Droid Sans';
    src: local('Droid Sans Bold'), local('DroidSans-Bold'),
      url('/fonts/DroidSans-Bold.woff2') format('woff2'),
      url('/fonts/DroidSans-Bold.woff') format('woff'),
      url('/fonts/DroidSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Droid Sans';
    src: local('Droid Sans'), local('DroidSans'),
      url('/fonts/DroidSans.woff2') format('woff2'),
      url('/fonts/DroidSans.woff') format('woff'),
      url('/fonts/DroidSans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    src: local('JetBrains Mono Regular'), local('JetBrainsMono-Regular'),
      url('/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
      url('/fonts/JetBrainsMono-Regular.woff') format('woff'),
      url('/fonts/JetBrainsMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    src: local('JetBrains Mono Medium'), local('JetBrainsMono-Medium'),
      url('/fonts/JetBrainsMono-Medium.woff2') format('woff2'),
      url('/fonts/JetBrainsMono-Medium.woff') format('woff'),
      url('/fonts/JetBrainsMono-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    src: local('JetBrains Mono Light'), local('JetBrainsMono-Light'),
      url('/fonts/JetBrainsMono-Light.woff2') format('woff2'),
      url('/fonts/JetBrainsMono-Light.woff') format('woff'),
      url('/fonts/JetBrainsMono-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
`;
