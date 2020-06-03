import React from 'react';
import BlogOverview from '../../components/blog/blog-overview.component';
import { GraphQLClient } from 'graphql-request';

const IndexPage = ({ blogposts }) => {
  return (
    <div>
      <BlogOverview posts={blogposts} />
    </div>
  );
};

export async function getServerSideProps() {
  const gql = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master'
  );

  const { blogposts } = await gql.request(
    `
    query MyQuery {
      blogposts {
        id
        content
        excerpt
        title
      }
    }
    
    `
  );

  return {
    props: {
      blogposts,
    },
  };
}

export default IndexPage;
