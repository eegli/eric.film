import { ALL_IMGS } from '@/api/queries';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import LandingVideo from '../components/landing/landing-video.component';
import LandingContent from '../components/landing/landing-content.component';
import { initializeApollo } from '../lib/apolloClient';

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>eric.film - photography & web development</title>
        <meta
          name='description'
          content='Freelance photographer and filmer with a passion for web development.'
        />
        <meta property='og:title' content='Eric Egli | Home' />
        <meta property='og:image' content='/static/img/home_og_image.jpg' />
        <meta property='og:site_name' content='Eric Egli' />
        <meta
          property='og:description'
          content='Freelance photographer and filmer with a passion for web development.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Eric Egli | Home' />
        <meta
          name='twitter:description'
          content='Freelance photographer and filmer with a passion for web development.'
        />
        <meta name='twitter:image' content='/static/img/home_og_image.jpg' />
      </Head>
      <LandingVideo />
      <LandingContent />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_IMGS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
