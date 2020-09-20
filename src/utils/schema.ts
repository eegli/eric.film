// https://developers.google.com/search/docs/data-types/article

// There is a type definition package for schema.org here:
// https://www.npmjs.com/package/schema-dts
// but adding 1mb overhead for one file is not worth it.

import { Blogpost } from '@/components/types';
import { SCHEMA_PUBLISHER_LOGO } from '@/src/config';

type BlogStructuredData = {
  dateModified: Date;
  datePublished: Date;
  headline: string;
  image: Array<string>;
  '@context': 'https://schema.org';
  '@type': 'BlogPosting';
  author: { '@type': string; name: string };
  publisher: {
    '@type': 'Organization';
    name: 'eric.film';
    logo: { '@type': 'ImageObject'; url: string };
  };
};

export const makeBlogpostSchema = (
  post: Omit<
    Blogpost,
    'stage' | 'documentInStages' | 'history' | 'previewImage'
  >,
  previewImage: string,
): BlogStructuredData => {
  return {
    '@context': 'https://schema.org',
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
    datePublished: new Date(post.createdAt),
    dateModified: new Date(post.updatedAt),
    headline: post.title,
    image: [previewImage],
  };
};
