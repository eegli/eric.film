import React from 'react';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import CategorySwitch from '@/components/categories/category-switch.component';

const PortfolioPage: React.FC<{}> = () => {
  return (
    <LayoutContainer>
      <Sh1>portfolio</Sh1>
      <CategorySwitch blogOrPortfolio='portfolio' />
    </LayoutContainer>
  );
};

export default PortfolioPage;
