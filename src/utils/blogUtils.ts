import * as Sentry from '@sentry/browser';

// Utility function that creates a html meta description from the first 120 letters of the corresponding blog post excerpt
export const trimExcerptForMeta = (excerpt: string): string => {
  const trimmedExcerpt =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;
  return trimmedExcerpt;
};

export const checkPreviewImage = <T>(
  preview: T | undefined,
  title: string,
  id: string,
  fallback: T,
): T => {
  if (!preview) {
    console.warn(`Error:
    No preview/meta image for post: '${title}'
    Post id: ${id}
    Fallback to default`);
    Sentry.captureException(`Error:
    No preview/meta image for post: '${title}'
    Post id: ${id}
    Fallback to default`);
  }
  return preview || fallback;
};
