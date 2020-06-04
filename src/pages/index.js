import React, { useState } from 'react';
import MdContent from '../components/markdown/md-content.component';

import { GraphQLClient } from 'graphql-request';
import MdPreview from '../components/markdown/md-preview.component';

const IndexPage = ({ data }) => {
  const [hi, setHi] = useState(false);
  console.log(hi);

  const sayHi = () => {
    setHi(!hi);
  };
  return (
    <div>
      <button onClick={sayHi}>Click me to say hi</button>
      {hi ? <h1>Hello, hi</h1> : null}
      <MdPreview
        title={data.title}
        excerpt={data.excerpt}
        content={data.content}
      />
    </div>
  );
};

export async function getServerSideProps() {
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
