import React from 'react';
import MdContent from '../components/markdown/md-content.component';

import { GraphQLClient } from 'graphql-request';
import MdPreview from '../components/markdown/md-preview.component';

const IndexPage = ({ data }) => {
  return (
    <div>
      <MdPreview
        title={data.title}
        excerpt={data.excerpt}
        content={data.content}
      />
    </div>
  );
};

export async function getStaticProps() {
  const gql = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master'
  );

  const { blogpost: data } = await gql.request(
    `query MyQuery {
      blogpost(where: {id: "ckawpzunk216t0150l9lpizcg"}) {
        id
        excerpt
        content
        title
      }
    }
    `
  );
  return {
    props: {
      data,
    },
  };
}

export default IndexPage;
