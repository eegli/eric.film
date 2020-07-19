import { IMGS_HOME } from '@/api/queries';
import { SEO_INDEX_META as meta } from '@/src/config';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import LandingContent from '../components/landing/landing-content.component';
import LandingVideo from '../components/landing/landing-video.component';
import { initializeApollo } from '../lib/apolloClient';

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
      <LandingVideo />
      <LandingContent />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: IMGS_HOME,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
