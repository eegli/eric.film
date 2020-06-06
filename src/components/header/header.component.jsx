import React, { useState } from 'react';
import {
  HeaderOptionsContainer,
  StyledHamburgerMenu,
  HeaderMainContainer,
  StyledLinkText,
  StyledLogo,
} from './header.styles';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import SmoothCollapse from 'react-smooth-collapse';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <React.Fragment>
      <HeaderMainContainer>
        <Link href='/'>
          <a>
            <StyledLogo src='/static/logo/Logo_v2.png' />
          </a>
        </Link>

        <a>
          <StyledHamburgerMenu onClick={() => setShowHeader(!showHeader)}>
            <FaBars />
          </StyledHamburgerMenu>
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
    </React.Fragment>
  );
};

export default Header;
