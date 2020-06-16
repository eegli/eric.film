import React from 'react';
import { GetServerSideProps } from 'next';
import BlogContent from '../../components/blog/blog-content.component';

import { SINGLE_BLOGPOST } from '../../api/queries';
import { fetcher } from '../../api/graphql';
import { BlogPost } from '@/components/types';

type Props = {
  post: BlogPost;
};

const IndexPage: React.FC<Props> = ({ post }) => {
  if (!post) {
    return <h2>no posts</h2>;
  }
  return (
    <div>
      <BlogContent {...post} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    var post = await fetcher(SINGLE_BLOGPOST(params.post_slug));
  }

  return {
    props: {
      post: post.blogpost,
    },
  };
};

export default IndexPage;
