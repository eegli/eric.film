import { ALL_IMGS_HOME } from '@/api/queries';
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

// TODO Fix getStaticProps for Safari
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_IMGS_HOME,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}

export default IndexPage;
