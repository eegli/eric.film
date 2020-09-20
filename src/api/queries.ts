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
            image: { resize: { height: 400, fit: crop } }
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
// TODO use fragments
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
        size1_1: url(
          transformation: {
            document: { output: { format: jpg } }
            image: { resize: { height: 1000, fit: crop, width: 1000 } }
          }
        )
        size4_3: url(
          transformation: {
            document: { output: { format: jpg } }
            image: { resize: { height: 750, fit: crop, width: 1000 } }
          }
        )
        size16_9: url(
          transformation: {
            document: { output: { format: jpg } }
            image: { resize: { height: 562, fit: crop, width: 1000 } }
          }
        )
        sizeOG: url(
          transformation: {
            document: { output: { format: jpg } }
            image: { resize: { height: 627, fit: crop, width: 1200 } }
          }
        )
      }
    }
  }
`;

// TODO use fragments
export const imageCollectionHome = gql`
  query imageCollectionHome {
    imgCollection(where: { imageType: home }) {
      id
      collection {
        id
        jpg_url: url(transformation: { document: { output: { format: jpg } } })
        webp_url: url(
          transformation: { document: { output: { format: webp } } }
        )
      }
    }
  }
`;

export const ImageCollectionPortfolio = gql`
  query ImageCollectionPortfolio {
    imgCollection(where: { imageType: portfolio }) {
      id
      collection {
        id
        jpg_url: url(transformation: { document: { output: { format: jpg } } })
        webp_url: url(
          transformation: { document: { output: { format: webp } } }
        )
      }
    }
  }
`;

// Todo node: Pagination
// Get the post before and after a specific blogpost

/* query Random($type: BlogType!, $item: String!) {
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
