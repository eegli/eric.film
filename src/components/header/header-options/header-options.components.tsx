import React from 'react';
import { StyledLinkText } from './header-options.styles';
import Link from 'next/link';

export interface Props {
  position: 'mobile' | 'desktop';
}

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
      <Link href='/portfolio'>
        <StyledLinkText isMobile={isMobile}>portfolio</StyledLinkText>
      </Link>
      <Link href='/about'>
        <StyledLinkText isMobile={isMobile}>about</StyledLinkText>
      </Link>
      <Link href='/blog'>
        <StyledLinkText isMobile={isMobile}>blog</StyledLinkText>
      </Link>
    </>
  );
};

export default HeaderOptions;
