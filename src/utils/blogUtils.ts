import * as gtag from '@/src/lib/gtag';

// Utility function that creates a html meta description from the first 120 letters of the corresponding blog post excerpt
export const trimExcerptForMeta = (excerpt: string): string => {
  const trimmedExcerpt =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;
  return trimmedExcerpt;
};

export const checkPreviewImage = <T>(
  preview: T | undefined,
  id: string,
  fallback: T,
): T => {
  if (!preview) {
    gtag.actionEvent('Missing preview image', 'blog', `Id: ${id}`, 1);
  }
  return preview || fallback;
};

/* `Error:
    No preview/meta image for post: '${title}'
    Post id: ${id}
    Fallback to default` */
