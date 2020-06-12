import React from 'react';
import { GetStaticProps, GetServerSideProps } from 'next';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';

import LandingVideo from '../components/landing/landing-video.component';

import LandingContent from '../components/landing/landing-content.component';

type ImageLink = {
  url: string;
};

export type IndexProps = {
  images: ImageLink[] | undefined;
};

/* 

// Note that generally, all content is wrapped in the layoutcontainer. This is not true for the index page as well as for the header!

*/
const IndexPage: React.FC<IndexProps> = ({ images }) => {
  return (
    <React.Fragment>
      <LandingVideo />
      <LandingContent images={images} />
    </React.Fragment>
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
