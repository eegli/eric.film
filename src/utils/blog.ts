import { EnrichedImageObj, JpegImageObj } from '@/components/types';
import { FALLBACK_IMG } from '@/src/config';
import * as gtag from '@/src/lib/gtag';

// In GraphCMS, the preview image is set to required. It is, however, possible
// that an image that is being used as preview is deleted from GraphCMS. This
// doesn't give a warning and results in some posts having no preview image (===
// null), even though it is required according to the schema. This utility
// checks if there REALLY is a preview image and if not returns a fallback

type PreviewImage = {
  image: { url: string } | null;
  id: string;
  fallback?: { url: string };
};

export const checkIfImageExists = (params: PreviewImage) => {
  const { image, id, fallback = FALLBACK_IMG } = params;
  if (!image?.url) {
    gtag.actionEvent('Missing preview image', 'blog', `Id: ${id}`, 1);
  }
  return image || fallback;
};

// In GraphCMS, assets can be transformed and requested in various formats and
// sizes. This utility takes the "raw" array of jpeg images and transforms the
// url to generate webp urls. It's important to note that it should only be used
// for images coming from GraphCMS. In any case, the app won't break because
// replace won't replace anything and return the input urls.

export const makeWebpFromGraphCMSImages = (_images: JpegImageObj[]) => {
  const images: EnrichedImageObj[] = [];

  const isFromGraphCMS = _images[0].url.match(/graphcms.com\/output=/g);
  if (!isFromGraphCMS)
    console.warn(
      'Warning! makeWebpFromGraphCMSImages should only be used with images from GraphCMS!',
    );

  // Replace jpg with webp
  _images.forEach(img => {
    const webpUrl = img.url.replace(/:jpg/g, ':webp');

    // Create new image object
    const newImg = Object.assign({ webp_url: webpUrl }, img);
    images.push(newImg);
  });

  return images;
};
