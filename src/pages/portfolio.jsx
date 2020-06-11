import React from 'react';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import SelectionCards from '@/components/selection-cards/selection-cards.component';

const PortfolioPage = () => {
  return (
    <LayoutContainer>
      <Sh1>portfolio</Sh1>
      <SelectionCards />
    </LayoutContainer>
  );
};

export default PortfolioPage;
