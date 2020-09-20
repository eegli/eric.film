// https://developers.google.com/search/docs/data-types/article

// There is a type definition package for schema.org here:
// https://www.npmjs.com/package/schema-dts
// but adding 1mb overhead for one file is not worth it.

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

type Post = {
  createdAt: string;
  updatedAt: string;
  title: string;

  previewImage: {
    size1_1: string;
    size4_3: string;
    size16_9: string;
    sizeOG: string;
  };
};

export const makeBlogpostSchema = (
  post: Post,
): BlogStructuredData | undefined => {
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
    image: [
      post?.previewImage.size16_9,
      post?.previewImage.size1_1,
      post?.previewImage.size4_3,
    ],
  };
};
