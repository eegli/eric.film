// https://developers.google.com/search/docs/data-types/article

import { BlogPostContent } from '@/components/types';
import { BLOG_PREVIEW_IMG_FALLBACK } from '@/src/config';

export const makeBlogSchema = (post: BlogPostContent) => {
  const image = post.previewImage
    ? post.previewImage.url
    : BLOG_PREVIEW_IMG_FALLBACK.url;
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    headline: post.title,
    image: [image],
  };

  return JSON.stringify(schema);
};
