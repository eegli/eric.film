import React from 'react';
import BlogOverview from '../../components/blog/blog-overview.component';
import { request } from '../../api/graphql';
import { ALL_BLOGPOSTS } from '../../api/queries';

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
  const data = await request(ALL_BLOGPOSTS);

  return {
    props: {
      data,
    },
  };
}

export default IndexPage;
