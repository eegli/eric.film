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

// TODO clean this up
type InputImageObj = Array<{ url: string }>;

type OutputImageObj = Array<{ url: string; webp_url: string }>;

export const getWebpUrl = (_images: InputImageObj) => {
  const images: OutputImageObj = [];

  // TODO Make sure the image is provided by graphcms, otherwise return normal images
  const isFromGraphCMS = _images[0].url.match(/graphcms.com\/output=/g);

  _images.forEach(img => {
    const webpUrl = img.url.replace(/:jpg/g, ':webp');
    const newImg = Object.assign({ webp_url: webpUrl }, img);
    images.push(newImg);
  });
  return images;
};
