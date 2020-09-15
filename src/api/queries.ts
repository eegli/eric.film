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
        url(
          transformation: {
            document: { output: { format: jpg } }
            image: { resize: { height: 400, fit: clip } }
          }
        )
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
        url(
          transformation: {
            document: { output: { format: jpg } }
            image: { resize: { height: 630, fit: crop, width: 1200 } }
          }
        )
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
// Get the post before and after a specific blogpost

/* query Blogpost($item: String!, $type:BlogType) {
  nextPost: blogposts(first: 1, after: $item, where: {type: $type}) {
    id
    title
  }
  lastPost: blogposts(last: 1, before: $item, where: {type: $type}) {
    id
    title
  }
}
 */
