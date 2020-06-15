import { GetStaticProps, GetServerSideProps } from 'next';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';
import LandingVideo from '../components/landing/landing-video.component';
import LandingContent from '../components/landing/landing-content.component';
import { ImageProps } from '@/components/types';

const IndexPage: React.FC<ImageProps> = ({ images }) => {
  return (
    <>
      <LandingVideo />
      <LandingContent images={images} />
    </>
  );
};

// TODO Fix getStaticProps for Safari
export const getServerSideProps: GetServerSideProps = async context => {
  const imagesRaw = await request(IMGS_HOME);
  // Stripe off actual info
  const images = imagesRaw.imgCollectionsConnection.edges[0].node.collection;

  return {
    props: {
      images,
    },
  };
};

export default IndexPage;
