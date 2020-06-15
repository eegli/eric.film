import React from 'react';
import { request } from '../../api/graphql';
import { ALL_POSTS_PREVIEW, allPostsPreviewQueryVars } from '../../api/queries';
import CategorySwitch from '@/components/categories/category-switch.component';
import { initializeApollo } from '../../lib/apolloClient';

import { Sh1 } from '@/shared/headings.styles';
import LayouContainer from '@/shared/layout/layout.container';

const IndexPage = () => {
  return (
    <LayouContainer>
      <Sh1>blog</Sh1>
      <CategorySwitch blogOrPortfolio='blog' />
    </LayouContainer>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_PREVIEW,
    variables: allPostsPreviewQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default IndexPage;
