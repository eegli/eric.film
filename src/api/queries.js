export const ALL_BLOGPOSTS_PREVIEW = `
query ALL_BLOGPOSTS {
  blogposts {
    id
    excerpt
    slug
    title
    type
    previewImage {
      url
    }
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
  imgCollections(where: {id: "ckb2drirc0jly015897lllh3j"}) {
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
