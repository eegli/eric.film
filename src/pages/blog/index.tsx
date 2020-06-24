import React from 'react';
import { GetServerSideProps } from 'next';
import { ALL_BLOGPOSTS_PREVIEW, allBlogPostsVars } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import BlogCategories from '@/components/categories/blog-categories.component';

const IndexPage: React.FC = () => {
  return (
    <LayoutContainer page='blog'>
      <Sh1>blog</Sh1>
      <BlogCategories />
    </LayoutContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BLOGPOSTS_PREVIEW,
    variables: allBlogPostsVars(),
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
