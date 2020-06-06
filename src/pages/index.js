import React from 'react';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';
import LayouContainer from '../components/layout/layout.container';

const IndexPage = ({ images }) => {
  return (
    <LayouContainer>
      <h1 style={{ textAlign: 'center' }}>eric.egli</h1>
      {/* {images.map(img => (
        <img key={img.url} src={img.url} />
      ))} */}
      <video id='bg-video' autoPlay loop muted>
        <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
      </video>
    </LayouContainer>
  );
};
export async function getStaticProps() {
  const images = await request(IMGS_HOME);

  return {
    props: {
      images: images.imgCollectionsConnection.edges[0].node.collection,
    },
  };
}

export default IndexPage;
