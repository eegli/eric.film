import React from 'react';

import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import PortfolioCategories from '@/components/categories/_portfolio-categories.component';

const PortfolioPage: React.FC<{}> = () => {
  return (
    <LayoutContainer>
      <Sh1>portfolio</Sh1>
      <PortfolioCategories />
    </LayoutContainer>
  );
};

export default PortfolioPage;
