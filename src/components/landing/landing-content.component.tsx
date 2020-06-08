import React from 'react';
import { DescriptionContainer, Sh1, Sh3, Sp } from '@/shared/headings.styles';
import { LandingContentContainer } from './landing-content.styles';
import Gallery from '@/components/gallery/gallery.component';

type Props = {
  images?: string[];
};

const LandingContent = React.forwardRef(
  (props: Props, ref?: React.RefObject<HTMLDivElement>) => {
    return (
      <LandingContentContainer ref={ref}>
        <Sh1 landing>| eric.egli |</Sh1>

        <DescriptionContainer>
          <Sh3>film & photography</Sh3>
          <Sp>x</Sp>
          <Sh3>frontend development</Sh3>
        </DescriptionContainer>
        <Gallery />
      </LandingContentContainer>
    );
  }
);

export default LandingContent;
