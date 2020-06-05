import React from 'react';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';

const IndexPage = ({ images }) => {
  return (
    <div style={{ height: '300px' }}>
      <h1>This is the index page</h1>
      {images.map(img => (
        <img key={img.url} src={img.url} />
      ))}
    </div>
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
