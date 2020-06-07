import React, { useState } from 'react';
import {
  HeaderOptionsContainer,
  StyledHamburgerWrapper,
  HeaderMainContainer,
  StyledLinkText,
  StyledLogo,
} from './header.styles';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import LayouContainer from '@/shared/layout/layout.container';

import SmoothCollapse from 'react-smooth-collapse';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <LayouContainer>
      <HeaderMainContainer>
        <Link href='/'>
          <a>
            <StyledLogo src='/static/logo/Logo_v2.png' />
          </a>
        </Link>

        <a>
          <StyledHamburgerWrapper onClick={() => setShowHeader(!showHeader)}>
            <FaBars />
          </StyledHamburgerWrapper>
        </a>
      </HeaderMainContainer>

      <SmoothCollapse expanded={showHeader}>
        <HeaderOptionsContainer onClick={() => setShowHeader(!showHeader)}>
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
      </SmoothCollapse>
    </LayouContainer>
  );
};

export default Header;
