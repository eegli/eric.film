import { ImgsHome } from '@/src/api/queries';
import { SEO_INDEX_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/metaTags';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import LandingContent from '../components/landing-content/landing-content.component';
import LandingVideo from '../components/landing-video/landing-video.component';
import { initializeApollo } from '../lib/apolloClient';

const IndexPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const metaTags = createMetaTags({
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
  });
  return (
    <>
      <Head>{metaTags}</Head>
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
