import { FALLBACK_IMG as fallback } from '@/src/config';
import { checkIfImageExists } from '../blog';

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
