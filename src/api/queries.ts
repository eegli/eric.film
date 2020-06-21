import gql from 'graphql-tag';
import { SortBy } from '@/components/types';

export const ALL_BLOGPOSTS_PREVIEW = gql`
  query ALL_BLOGPOSTS_PREVIEW(
    $first: Int!
    $skip: Int!
    $orderBy: BlogpostOrderByInput!
  ) {
    blogposts(first: $first, skip: $skip, orderBy: $orderBy) {
      id
      excerpt
      slug
      title
      type
      ytvideo
      createdAt
      previewImage {
        url
      }
    }
    blogpostsConnection {
      aggregate {
        count
      }
    }
  }
`;

// Setting default sort
export const allBlogPostsVars = (orderBy: SortBy = SortBy.createdAt_DESC) => ({
  skip: 0,
  first: 6,
  orderBy: orderBy,
});

export const SINGLE_BLOGPOST = (slug: string | string[]) =>
  `query SINGLE_BLOGPOST {
    blogpost(where: {slug: "${slug}"}) {
      id
      excerpt
      slug
      title
      type
      content
      ytvideo
      createdAt
      previewImage {
        url
      }
    }
  }
  `;

export const ALL_IMGS = gql`
  query ALL_IMGS {
    imgCollections {
      id
      imageType
      collection {
        url
      }
    }
  }
`;
