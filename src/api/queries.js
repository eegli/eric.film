export const ALL_BLOGPOSTS = `
query ALL_BLOGPOSTS {
  blogposts {
    id
    content
    excerpt
    title
    slug
  }
}

`;

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

export const IMGS_HOME = `
  query IMGS_HOME {
    imgCollections {
      id
    }
    imgCollectionsConnection {
      edges {
        node {
          collection {
            url
          }
        }
      }
    }
  }
  
  `;
