import { ImgsHome } from '@/api/queries';
import { SEO_INDEX_META as meta } from '@/src/config';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import LandingContent from '../components/landing/landing-content.component';
import LandingVideo from '../components/landing/landing-video.component';
import { initializeApollo } from '../lib/apolloClient';

const IndexPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
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
      <LandingVideo contentRef={contentRef} />
      <LandingContent ref={contentRef} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ImgsHome,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
