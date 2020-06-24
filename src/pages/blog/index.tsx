import React from 'react';
import { GetServerSideProps } from 'next';
import { ALL_BLOGPOSTS_PREVIEW, allBlogPostsVars } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import BlogCategories from '@/components/categories/blog-categories.component';
import Head from 'next/head';

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blogposts | eric.film</title>
        <meta
          name='description'
          content="See what's new or choose your category: Dev, Video Of the Week, Varia"
        />
        <meta property='og:title' content='Blogposts on eric.film' />
        <meta
          property='og:image'
          content='/static/img/blog_og_image_callumshaw.jpg'
        />
        <meta property='og:site_name' content='eric.film' />
        <meta
          property='og:description'
          content="See what's new or choose your category: Dev, Video Of the Week, Varia"
        />
      </Head>
      <LayoutContainer page='blog'>
        <Sh1>blog</Sh1>
        <BlogCategories />
      </LayoutContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BLOGPOSTS_PREVIEW,
    variables: allBlogPostsVars(),
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
