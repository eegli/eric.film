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
          content='Freelance photographer and filmer with a love for web development. Check out my blog for more.'
        />
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
