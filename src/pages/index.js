import React from 'react';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';
import LayouContainer from '@/shared/layout/layout.container';
import { Sh1 } from '@/shared/headings.styles';
import { Svideo } from '@/shared/elements.styles';

const IndexPage = ({ images }) => {
  return (
    <LayouContainer>
      <Sh1>eric egli</Sh1>
      {/* {images.map(img => (
        <img key={img.url} src={img.url} />
      ))} */}
      <Svideo autoPlay loop muted>
        <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
      </Svideo>
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
