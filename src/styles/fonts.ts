const FontFaceObserver = require('fontfaceobserver');

const Fonts = (): void => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const roboto = new FontFaceObserver('Roboto');
  try {
    roboto.load().then(() => {
      document.documentElement.classList.add('roboto');
    });
  } catch (e) {
    console.error('Could not load Roboto font, ' + e);
  }
};

export default Fonts;
