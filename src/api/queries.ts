import {
  BlogpostOrderByInput,
  BlogpostQueryVariables,
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

// Lil' catch here: Query params are of type ParsedUrlQuery, which is an interface in the form of <string> | Array<string>
// Since we only want the first parameter, we make sure to pluck the first element of the query and return it as slug (!)

// This last part is really important since the Blogpost query only accepts an argument in the form of { slug: string }

// To sum up: We get a query parameter and return it as a slug!

export const blogpostVars = (
  query: string | string[],
): BlogpostQueryVariables => {
  if (Array.isArray(query))
    return {
      slug: query[0],
    };
  else {
    return {
      slug: query,
    };
  }
};

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
