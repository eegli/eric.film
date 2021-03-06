import Spinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import { useImageCollectionHomeQuery } from '@/components/types';
import { DescriptionContainer, Sh1, Sh2 } from '@/shared/headings.styles';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { LandingContentContainer, LinkText } from './landing-content.styles';

const DynamicGallery = dynamic(
  () => import('@/components/gallery/gallery.component'),
  {
    loading: () => <Spinner />,
  },
);

type Props = {
  children?: React.ReactNode;
};

const LandingContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { error, data } = useImageCollectionHomeQuery();

  if (error) return <ErrorMessage>Error loading images :(</ErrorMessage>;

  if (data?.imgCollection?.collection) {
    const images = data.imgCollection.collection;

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
          {images ? <DynamicGallery layout='grid' images={images} /> : null}
        </LandingContentContainer>
      </>
    );
  }

  return <div />;
});

export default LandingContent;
