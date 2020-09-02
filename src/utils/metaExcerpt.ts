// Utility function that creates a html meta description from the first 120 letters of the corresponding blog post excerpt

export const trimExcerptForMeta = (excerpt: string): string => {
  const trimmedExcerpt =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;
  return trimmedExcerpt;
};
