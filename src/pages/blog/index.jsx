import React from 'react';
import { request } from '../../api/graphql';
import { ALL_BLOGPOSTS_PREVIEW } from '../../api/queries';
import CategorySwitch from '@/components/categories/category-switch.component';

import { Sh1 } from '@/shared/headings.styles';
import LayouContainer from '@/shared/layout/layout.container';

const IndexPage = ({ posts }) => {
  return (
    <LayouContainer>
      <Sh1>blog</Sh1>
      <CategorySwitch blogOrPortfolio='blog' />
    </LayouContainer>
  );
};

export async function getServerSideProps() {
  const data = await request(ALL_BLOGPOSTS_PREVIEW);

  return {
    props: {
      posts: data.blogposts,
    },
  };
}

export default IndexPage;
