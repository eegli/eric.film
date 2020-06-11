import React from 'react';
import { DescriptionContainer, Sh1, Sh2, Sp } from '@/shared/headings.styles';
import { LandingContentContainer } from './landing-content.styles';
import Gallery from '@/components/gallery/gallery.component';
import CustomLink from '@/components/custom-link/custom-link.component';
import { IndexProps } from '../../pages/index';

const LandingContent: React.FC<IndexProps> = props => {
  return (
    <LandingContentContainer>
      {props.children}
      <Sh1 landing>| eric.egli |</Sh1>

      <DescriptionContainer>
        <Sh2>film & photography</Sh2>
        <Sh2>x</Sh2>
        <Sh2>frontend development</Sh2>
      </DescriptionContainer>
      <CustomLink href='/about'>more</CustomLink>
      <Gallery images={props.images} />
    </LandingContentContainer>
  );
};

export default LandingContent;
