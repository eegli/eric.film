import React from 'react';
import { GetServerSideProps } from 'next';
import BlogContainer from '@/components/blog/blog-container.component';
import { SINGLE_BLOGPOST, singleBlogPostVars } from '../../api/queries';
import LayoutContainer from '@/components/shared/layout/layout.container';
import { initializeApollo } from '../../lib/apolloClient';
import Footer from '@/components/footer/footer.component';

const IndexPage: React.FC = () => {
  return (
    <>
      <LayoutContainer page='blog'>
        <BlogContainer />
        <Footer />
      </LayoutContainer>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  if (params && params.post_slug) {
    await apolloClient.query({
      query: SINGLE_BLOGPOST,
      variables: singleBlogPostVars(params.post_slug),
    });
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
