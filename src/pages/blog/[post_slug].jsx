import React from 'react';
import BlogContent from '../../components/blog/blog-content.component';

import { SINGLE_BLOGPOST } from '../../api/queries';
import { fetcher } from '../../api/graphql';

const IndexPage = ({ post }) => {
  if (!post) {
    return <h2>no posts</h2>;
  }
  return (
    <div>
      <BlogContent
        title={post.title}
        excerpt={post.excerpt}
        content={post.content}
      />
    </div>
  );
};
export async function getServerSideProps({ params }) {
  const post = await fetcher(SINGLE_BLOGPOST(params.post_slug));

  return {
    props: {
      post: post.blogpost,
    },
  };
}

export default IndexPage;
