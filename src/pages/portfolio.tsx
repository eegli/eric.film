import React from 'react';
import Head from 'next/head';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import PortfolioCategories from '@/components/categories/portfolio-categories.component';
import { INDEX_META } from '../../seo.config';

const PortfolioPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>portfolio | eric.film</title>
        <meta name='description' content={INDEX_META.description} />
        <meta property='og:title' content={INDEX_META.og_title} />
        <meta property='og:image' content={INDEX_META.og_image} />
        <meta property='og:site_name' content={INDEX_META.og_site_name} />
        <meta property='og:description' content={INDEX_META.og_description} />
        <meta name='twitter:card' content={INDEX_META.twitter_card} />
        <meta name='twitter:title' content={INDEX_META.twitter_title} />
        <meta
          name='twitter:description'
          content={INDEX_META.twitter_description}
        />
        <meta name='twitter:image' content={INDEX_META.twitter_image} />
      </Head>
      <LayoutContainer>
        <Sh1>portfolio</Sh1>
        <PortfolioCategories />
      </LayoutContainer>
    </>
  );
};

export default PortfolioPage;
