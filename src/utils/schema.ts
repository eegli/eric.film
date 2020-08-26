// https://developers.google.com/search/docs/data-types/article

// There is a type definition package for schema.org here:
// https://www.npmjs.com/package/schema-dts
// but adding 1mb overhead for one file is not worth it.

import { BlogPostContent } from '@/components/types';
import { BLOG_PREVIEW_IMG_FALLBACK } from '@/src/config';

export const makeBlogSchema = (post: BlogPostContent): string => {
  const image = post.previewImage
    ? post.previewImage.url
    : BLOG_PREVIEW_IMG_FALLBACK.url;
  return JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    headline: post.title,
    image: [image],
  });
};
