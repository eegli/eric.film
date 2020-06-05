import React, { useState } from 'react';
import {
  HeaderOptionsContainer,
  StyledHamburgerMenu,
  MainHeaderContainer,
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
      <MainHeaderContainer>
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
      </MainHeaderContainer>
      <SmoothCollapse expanded={showHeader}>
        <HeaderOptionsContainer onClick={() => setShowHeader(!showHeader)}>
          <Link href='/blog'>
            <StyledLinkText>blog</StyledLinkText>
          </Link>

          <Link href='/about'>
            <StyledLinkText>about</StyledLinkText>
          </Link>
        </HeaderOptionsContainer>
      </SmoothCollapse>
    </React.Fragment>
  );
};

export default Header;
