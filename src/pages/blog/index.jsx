import React from 'react';
import CategorySwitch from '@/components/categories/category-switch.component';

import { ALL_BLOGPOSTS_PREVIEW, allBlogPostsVars } from '../../api/queries';
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BLOGPOSTS_PREVIEW,
    variables: allBlogPostsVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}

export default IndexPage;
