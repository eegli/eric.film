import { ALL_IMGS } from '@/api/queries';
import { GetServerSideProps } from 'next';
import LandingVideo from '../components/landing/landing-video.component';
import LandingContent from '../components/landing/landing-content.component';
import { initializeApollo } from '../lib/apolloClient';

const IndexPage: React.FC = () => {
  return (
    <>
      <LandingVideo />
      <LandingContent />
    </>
  );
};

//TODO Fix getStaticProps for Safari
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
