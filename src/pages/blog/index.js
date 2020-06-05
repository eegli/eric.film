import React from 'react';
import BlogOverview from '../../components/blog/blog-overview.component';
import { request } from '../../api/graphql';
import { SINGLE_BLOGPOST } from '../../api/queries';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
      {/* <BlogOverview posts={blogposts} /> */}
    </div>
  );
};

export async function getServerSideProps() {
  const data = await request(SINGLE_BLOGPOST);

  return {
    props: {
      data,
    },
  };
}

export default IndexPage;
