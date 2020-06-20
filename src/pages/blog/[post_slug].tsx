import React from 'react';
import { GetServerSideProps } from 'next';
import BlogContainer from '@/components/blog/blog-container.component';
import { SINGLE_BLOGPOST } from '../../api/queries';
import { fetcher } from '../../api/graphql';
import { BlogPost } from '@/components/types';
import LayoutContainer from '@/components/shared/layout/layout.container';
import Head from 'next/head';

type Props = {
  post: BlogPost;
};

const IndexPage: React.FC<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title} - eric.film</title>
    </Head>
    <LayoutContainer>
      <BlogContainer post={post} />
    </LayoutContainer>
  </>
);
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
