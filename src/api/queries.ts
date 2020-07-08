import gql from 'graphql-tag';
import { SortBy } from '@/components/types';

export const ALL_BLOGPOSTS_PREVIEW = gql`
  query ALL_BLOGPOSTS_PREVIEW(
    $first: Int!
    $skip: Int!
    $orderBy: BlogpostOrderByInput!
  ) {
    blogposts(first: $first, skip: $skip, orderBy: $orderBy) {
      idss
      excerpt
      slug
      title
      type
      ytvideo
      updatedAt
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
export const allBlogPostsPreviewVars = (
  orderBy: SortBy = SortBy.createdAt_DESC
) => ({
  skip: 0,
  first: 12,
  orderBy: orderBy,
});

export const SINGLE_BLOGPOST = gql`
  query SINGLE_BLOGPOST($slug: String!) {
    blogpost(where: { slug: $slug }) {
      id
      excerpt
      slug
      title
      type
      content
      ytvideo
      updatedAt
      createdAt
      previewImage {
        url
      }
    }
  }
`;

export const singleBlogPostVars = (slug: string | string[]) => {
  if (Array.isArray(slug))
    return {
      slug: slug[0],
    };
  else {
    return {
      slug: slug,
    };
  }
};

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
