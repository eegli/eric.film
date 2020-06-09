import React from 'react';
import { StyledLinkText } from './header-options.styles';
import Link from 'next/link';

const HeaderOptions: React.FC<{}> = () => {
  return (
    <>
      <Link href='/'>
        <StyledLinkText>home</StyledLinkText>
      </Link>
      <Link href='/portfolio'>
        <StyledLinkText>portfolio</StyledLinkText>
      </Link>
      <Link href='/about'>
        <StyledLinkText>about</StyledLinkText>
      </Link>
      <Link href='/blog'>
        <StyledLinkText>blog</StyledLinkText>
      </Link>
    </>
  );
};

export default HeaderOptions;
