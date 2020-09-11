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
        url(transformation: { document: { output: { format: jpg } } })
      }
    }
    blogpostsConnection {
      aggregate {
        count
      }
    }
  }
`;

// We fetch the 18 latest posts first
export const blogpostsPreviewVars = (
  orderBy: BlogpostOrderByInput = BlogpostOrderByInput.CreatedAtDesc,
): BlogpostsPreviewQueryVariables => ({
  skip: 0,
  first: 18,
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
        url(transformation: { document: { output: { format: jpg } } })
      }
    }
  }
`;

export const ImageCollections = gql`
  query ImageCollections {
    imgCollections {
      id
      imageType
      collection {
        id
        url(transformation: { document: { output: { format: jpg } } })
      }
    }
  }
`;

// Todo node: Pagination
// https://github.com/GraphCMS/docs/blob/master/docs/api/API_relay.md

/* To query the first two artists after the artist with id cixnen2ssewlo0143bexdd52n:

{
  viewer {
    allArtists(first: 2, after: "cixnen2ssewlo0143bexdd52n") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
} */
