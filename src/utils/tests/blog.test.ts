import { FALLBACK_IMG as fallback } from '@/src/config';
import { checkIfImageExists, makeWebpFromGraphCMSImages } from '../blog';

describe('Checks if an image object exists', () => {
  beforeAll(() => {
    // eslint-disable-next-line
    (<any>window).gtag = function () {};
  });
  const params = { id: '1' };

  it('returns image if it exists', () => {
    const image = { url: 'http://google.com' };
    const imageObj = { image, ...params };

    expect(checkIfImageExists(imageObj)).toEqual(image);
  });

  it('returns fallback if no image exists', () => {
    const image = null;
    const imageObj = { image, ...params };

    expect(checkIfImageExists(imageObj)).toEqual(fallback);
  });

  it('returns custom fallback if no image exists', () => {
    const image = null;
    const fallback = { url: 'http://google.com' };
    const imageObj = { image, fallback, ...params };
    expect(checkIfImageExists(imageObj)).toEqual(fallback);
  });
});

describe('Adds webp url to jpeg image object', () => {
  it('returns new object with preview url', () => {
    const inputImages = [{ url: 'http://graphcms.com/output=:jpg/test' }];
    const outputImages = [
      {
        url: 'http://graphcms.com/output=:jpg/test',
        webp_url: 'http://graphcms.com/output=:webp/test',
      },
    ];

    expect(makeWebpFromGraphCMSImages(inputImages)).toEqual(outputImages);
  });

  it('logs a warning to the console if image is not from GraphCMS', () => {
    const spy = jest.spyOn(global.console, 'warn').mockImplementation();
    const inputImages = [{ url: 'http://images.com/output=:jpg/test' }];

    makeWebpFromGraphCMSImages(inputImages);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      'Warning! makeWebpFromGraphCMSImages should only be used with images from GraphCMS!',
    );

    spy.mockRestore();
  });
});
