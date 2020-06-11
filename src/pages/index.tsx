import React, { useRef } from 'react';
import { GetStaticProps } from 'next';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';

import LandingVideo from '../components/landing/landing-video.component';

import LandingContent from '../components/landing/landing-content.component';

export type IndexProps = {
  images: [{ url: string }];
};

/* 

// Note that generally, all content is wrapped in the layoutcontainer. This is not true for the index page as well as for the header!

*/
const IndexPage: React.FC<IndexProps> = ({ images }) => {
  // Create ref to link from video to content
  const contentRef = useRef<HTMLDivElement | null>(null);
  console.log(images);

  return (
    <React.Fragment>
      <LandingVideo contentRef={contentRef} />
      <LandingContent ref={contentRef} images={images} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const images = await request(IMGS_HOME);

  return {
    props: {
      images: images.imgCollectionsConnection.edges[0].node.collection,
    },
  };
};

export default IndexPage;
