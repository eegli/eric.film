import ErrorMessage from '@/components/error-message/error-message.component';
import Gallery from '@/components/gallery/gallery.component';
import { useImgsHomeQuery } from '@/components/types';
import { DescriptionContainer, Sh1, Sh2 } from '@/shared/headings.styles';
import Link from 'next/link';
import React from 'react';
import { LandingContentContainer, LinkText } from './landing-content.styles';

type Props = {
  children?: React.ReactNode;
};

const LandingContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { error, data } = useImgsHomeQuery();

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
          <Link href='/about'>
            <LinkText>say hi to the team</LinkText>
          </Link>
          {images ? <Gallery layout='grid' images={images.collection} /> : null}
        </LandingContentContainer>
      </>
    );
  }

  return <div />;
});

export default LandingContent;
