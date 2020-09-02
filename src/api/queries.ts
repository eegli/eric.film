import { PostVars, PreviewVars, SortBy } from '@/components/types';
import gql from 'graphql-tag';

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
  orderBy: SortBy = SortBy.createdAt_DESC,
): PreviewVars => ({
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

export const singleBlogPostVars = (slug: string | string[]): PostVars => {
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

export const IMGS_PORTFOLIO = gql`
  query IMGS_HOME {
    imgCollections(where: { imageType: portfolio }) {
      id
      imageType
      collection {
        url
      }
    }
  }
`;

export const IMGS_HOME = gql`
  query IMGS_HOME {
    imgCollections(where: { imageType: home }) {
      id
      imageType
      collection {
        url
      }
    }
  }
`;
