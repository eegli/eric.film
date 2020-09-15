import { gql } from '@apollo/client';

// Fetch the first 18 posts, skip 0 and sort by latest by default

export const BlogpostsPreview = gql`
  query BlogpostsPreview(
    $first: Int! = 18
    $skip: Int! = 0
    $orderBy: BlogpostOrderByInput! = createdAt_DESC
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
