import { FALLBACK_IMG } from '@/src/config';
import * as gtag from '@/src/lib/gtag';

// In GraphCMS, the preview image is set to required. It is, however, possible
// that an image that is being used as preview is deleted from GraphCMS. This
// doesn't give a warning and results in some posts having no preview image (===
// null), even though it is required according to the schema. This utility
// checks if there REALLY is a preview image and if not returns a fallback
type PreviewImage = {
  image: { url: string };
  id: string;
  fallback?: { url: string };
};

export const checkIfImageExists = (params: PreviewImage) => {
  const { image, id, fallback = FALLBACK_IMG } = params;
  if (!image) {
    gtag.actionEvent('Missing preview image', 'blog', `Id: ${id}`, 1);
  }
  return image || fallback;
};
