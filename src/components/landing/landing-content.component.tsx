import React, { forwardRef } from 'react';
import { DescriptionContainer, Sh1, Sh3, Sp } from '@/shared/headings.styles';
import { LandingContentContainer } from './landing-content.styles';

interface LandingContentProps {
  images?: string[];
}

const LandingContent = React.forwardRef(
  (props: LandingContentProps, ref?: React.RefObject<HTMLDivElement>) => {
    return (
      <LandingContentContainer ref={ref}>
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
    );
  }
);

export default LandingContent;
