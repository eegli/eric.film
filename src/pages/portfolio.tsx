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
        <meta
          name='description'
          content='Portfolio Eric Egli | Images, Videos, Web Projects'
        />
        <meta property='og:title' content='Eric Egli | Portfolio' />
        <meta property='og:image' content='/static/img/about-1.jpg' />
        <meta property='og:site_name' content='Eric Egli' />
        <meta
          property='og:description'
          content='Portfolio Eric Egli | Images, Videos, Web Projects'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Eric Egli | Portfolio' />
        <meta
          name='twitter:description'
          content='Portfolio Eric Egli | Images, Videos, Web Projects'
        />
        <meta name='twitter:image' content='/static/img/about-1.jpg' />
      </Head>
      <LayoutContainer>
        <Sh1>portfolio</Sh1>
        <PortfolioCategories />
      </LayoutContainer>
    </>
  );
};

export default PortfolioPage;
