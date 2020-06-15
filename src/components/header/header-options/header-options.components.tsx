import React from 'react';
import { StyledLinkText } from './header-options.styles';
import Link from 'next/link';

export interface Props {
  position: 'mobile' | 'desktop';
}
import { BlogCategories } from '@/components/types';

const HeaderOptions: React.FC<Props> = ({ position }) => {
  let isMobile: boolean;

  if (position === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }
  return (
    <>
      <Link href='/'>
        <StyledLinkText isMobile={isMobile}>home</StyledLinkText>
      </Link>
      <Link href='/portfolio?cat=still'>
        <StyledLinkText isMobile={isMobile}>portfolio</StyledLinkText>
      </Link>
      <Link href='/about'>
        <StyledLinkText isMobile={isMobile}>about</StyledLinkText>
      </Link>
      <Link href='/blog?cat=all'>
        <StyledLinkText isMobile={isMobile}>blog</StyledLinkText>
      </Link>
    </>
  );
};

export default HeaderOptions;
