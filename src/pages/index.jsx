import React from 'react';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';
import LayouContainer from '@/shared/layout/layout.container';
import { DescriptionContainer, Sh1, Sh3, Sp } from '@/shared/headings.styles';
import { Svideo } from '@/shared/elements.styles';

import {
  IndexVideoContainer,
  IndexContentContainer,
  StyledArrowDown,
} from './index.styles';

const IndexPage = ({ images }) => {
  return (
    <LayouContainer>
      <IndexVideoContainer>
        <Svideo autoPlay loop muted>
          <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
        </Svideo>
        <StyledArrowDown />
      </IndexVideoContainer>

      <IndexContentContainer>
        <Sh1 landing>| eric.egli |</Sh1>

        <DescriptionContainer>
          <Sh3>film & photography</Sh3>
          <Sp>x</Sp>
          <Sh3>frontend development</Sh3>
        </DescriptionContainer>
        {/* {images.map(img => (
            <img key={img.url} src={img.url} />
          ))} */}
      </IndexContentContainer>
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
