import React from 'react';
import MdContent from '../../components/markdown/md-content.component';

import { SINGLE_BLOGPOST } from '../../api/queries';
import { request } from '../../api/graphql';

const IndexPage = ({ post }) => {
  return (
    <div>
      <MdContent
        title={post.title}
        excerpt={post.excerpt}
        content={post.content}
      />
    </div>
  );
};
export async function getServerSideProps({ params }) {
  const post = await request(SINGLE_BLOGPOST(params.post_id));

  return {
    props: {
      post: post.blogpost,
    },
  };
}

export default IndexPage;
