import React from 'react';
import { GetStaticProps } from 'next';
import {
  ALL_BLOGPOSTS_PREVIEW,
  allBlogPostsPreviewVars,
} from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import BlogCategories from '@/components/categories/blog-categories.component';
import Head from 'next/head';
import { SEO_BLOG_INDEX_META as meta } from '../../../config';
import Footer from '@/components/footer/footer.component';

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.og_title} />
        <meta property='og:image' content={meta.og_image} />
        <meta property='og:site_name' content={meta.og_site_name} />
        <meta property='og:description' content={meta.og_description} />
        <meta name='twitter:card' content={meta.twitter_card} />
        <meta name='twitter:title' content={meta.twitter_title} />
        <meta name='twitter:description' content={meta.twitter_description} />
        <meta name='twitter:image' content={meta.twitter_image} />
      </Head>
      <LayoutContainer page='blog'>
        <Sh1>blog</Sh1>
        <BlogCategories />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BLOGPOSTS_PREVIEW,
    variables: allBlogPostsPreviewVars(),
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
