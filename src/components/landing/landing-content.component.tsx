import CustomLink from '@/components/custom-link/custom-link.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import Gallery from '@/components/gallery/gallery.component';
import { useImgsPortfolioQuery } from '@/components/types';
import { DescriptionContainer, Sh1, Sh2 } from '@/shared/headings.styles';
import React from 'react';
import { LandingContentContainer } from './landing-content.styles';

type Props = {
  children?: React.ReactNode;
};

const LandingContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { loading, error, data } = useImgsPortfolioQuery();

  if (error) return <ErrorMessage>Error loading images :(</ErrorMessage>;

  if (data) {
    const images = data.imgCollections[0];
    return (
      <>
        <LandingContentContainer ref={ref}>
          <Sh1 landing>eric.egli</Sh1>
          <DescriptionContainer>
            <Sh2>
              film & photography <br />x <br />
              frontend development
            </Sh2>
          </DescriptionContainer>
          <CustomLink href='/about'>say hi to the team</CustomLink>
          {images ? <Gallery index images={images.collection} /> : null}
        </LandingContentContainer>
      </>
    );
  }

  return <div />;
});

export default LandingContent;
