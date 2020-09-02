// https://developers.google.com/search/docs/data-types/article

// There is a type definition package for schema.org here:
// https://www.npmjs.com/package/schema-dts
// but adding 1mb overhead for one file is not worth it.

import { BLOG_PREVIEW_IMG_FALLBACK, SCHEMA_PUBLISHER_LOGO } from '@/src/config';

// TODO Fix this
export const makeBlogSchemaForHead = (post: any): string => {
  const image = post.previewImage
    ? post.previewImage.url
    : BLOG_PREVIEW_IMG_FALLBACK.url;
  return JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    author: {
      '@type': 'Person',
      name: 'Eric Egli',
    },
    publisher: {
      '@type': 'Organization',
      name: 'eric.film',
      logo: {
        '@type': 'ImageObject',
        url: SCHEMA_PUBLISHER_LOGO.url,
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    headline: post.title,
    image: [image],
  });
};
