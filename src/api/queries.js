export const ALL_BLOGPOSTS = `
query ALL_BLOGPOSTS {
  blogposts {
    id
    content
    excerpt
    title
  }
}

`;

export const SINGLE_BLOGPOST = id =>
  `query SINGLE_BLOGPOST {
    blogpost(where: {id: "${id}"}) {
      id
      excerpt
      content
      title
    }
  }
  `;
