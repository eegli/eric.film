import {
  BlogpostOrderByInput,
  BlogpostsPreviewQueryVariables,
} from '@/components/types';
import gql from 'graphql-tag';

export const BlogpostsPreview = gql`
  query BlogpostsPreview(
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

// We fetch the 12 latest posts first
export const blogpostsPreviewVars = (
  orderBy: BlogpostOrderByInput = BlogpostOrderByInput.CreatedAtDesc,
): BlogpostsPreviewQueryVariables => ({
  skip: 0,
  first: 12,
  orderBy,
});

export const Blogpost = gql`
  query Blogpost($slug: String!) {
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

export const ImgsPortfolio = gql`
  query ImgsPortfolio {
    imgCollections(where: { imageType: portfolio }) {
      id
      imageType
      collection {
        url
      }
    }
  }
`;

export const ImgsHome = gql`
  query ImgsHome {
    imgCollections(where: { imageType: home }) {
      id
      imageType
      collection {
        url
      }
    }
  }
`;
