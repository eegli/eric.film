import gql from 'graphql-tag';

export const ALL_BLOGPOSTS_PREVIEW = gql`
  query ALL_BLOGPOSTS_PREVIEW($first: Int!, $skip: Int!) {
    blogposts(first: $first, skip: $skip) {
      id
      excerpt
      slug
      title
      type
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

export const allBlogPostsVars = {
  skip: 0,
  first: 3,
};

export const SINGLE_BLOGPOST = slug =>
  `query SINGLE_BLOGPOST {
    blogpost(where: {slug: "${slug}"}) {
      id
      excerpt
      content
      title
      slug
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
