import React from 'react';
import Head from 'next/head';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import PortfolioCategories from '@/components/categories/portfolio-categories.component';

const PortfolioPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>portfolio | eric.film</title>
      </Head>
      <LayoutContainer>
        <Sh1>portfolio</Sh1>
        <PortfolioCategories />
      </LayoutContainer>
    </>
  );
};

export default PortfolioPage;
