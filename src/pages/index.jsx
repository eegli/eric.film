import React, { useRef } from 'react';
import { request } from '../api/graphql';
import { IMGS_HOME } from '../api/queries';
import LayouContainer from '@/shared/layout/layout.container';
import { DescriptionContainer, Sh1, Sh3, Sp } from '@/shared/headings.styles';
import { Svideo } from '@/shared/elements.styles';
import { FaAngleDown } from 'react-icons/fa';

import {
  LandingVideoContainer,
  LandingContentContainer,
  ArrowDownContainer,
} from './index.styles';

const IndexPage = ({ images }) => {
  const contentRef = useRef(null);
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
  return (
    <LayouContainer>
      <LandingVideoContainer>
        <Svideo autoPlay loop muted>
          <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
        </Svideo>
        <ArrowDownContainer onClick={() => scrollToRef(contentRef)}>
          <FaAngleDown />
        </ArrowDownContainer>
      </LandingVideoContainer>

      <LandingContentContainer ref={contentRef}>
        <Sh1 landing>| eric.egli |</Sh1>

        <DescriptionContainer>
          <Sh3>film & photography</Sh3>
          <Sp>x</Sp>
          <Sh3>frontend development</Sh3>
        </DescriptionContainer>
        {/* {images.map(img => (
            <img key={img.url} src={img.url} />
          ))} */}
      </LandingContentContainer>
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
