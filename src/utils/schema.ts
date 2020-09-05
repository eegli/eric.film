// https://developers.google.com/search/docs/data-types/article

// There is a type definition package for schema.org here:
// https://www.npmjs.com/package/schema-dts
// but adding 1mb overhead for one file is not worth it.

import { Blogpost } from '@/components/types';
import { SCHEMA_PUBLISHER_LOGO } from '@/src/config';

export const makeBlogSchemaForHead = (
  post: Blogpost,
  previewImage: string,
): string => {
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
    image: [previewImage],
  });
};
