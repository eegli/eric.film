import React, { useState } from 'react';
import {
  HeaderOptionsContainer,
  StyledLinkText,
} from './header-options.styles';
import Link from 'next/link';

import SmoothCollapse from 'react-smooth-collapse';

const HeaderOptions: React.FC = () => {
  return (
    <HeaderOptionsContainer>
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
    </HeaderOptionsContainer>
  );
};

export default HeaderOptions;
