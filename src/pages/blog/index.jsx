import React from 'react';
import CategorySwitch from '@/components/categories/category-switch.component';

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

export default IndexPage;
