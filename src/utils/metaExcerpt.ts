export const trimExcerptForMeta = (excerpt: string): string => {
  const trimmedExcerpt =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;
  return trimmedExcerpt;
};
