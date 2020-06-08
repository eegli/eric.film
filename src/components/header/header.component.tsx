import React, { useState } from 'react';
import {
  HeaderOptionsContainer,
  StyledHamburger,
  HeaderMainContainer,
  StyledLinkText,
  StyledLogo,
  HeaderWrapper,
  HeaderMainBgContainer,
} from './header.styles';
import Link from 'next/link';

import SmoothCollapse from 'react-smooth-collapse';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderMainBgContainer>
        <HeaderMainContainer>
          <Link href='/'>
            <a>
              <StyledLogo src='/static/logo/Logo_v2.png' />
            </a>
          </Link>

          <StyledHamburger onClick={() => setShowHeader(!showHeader)} />
        </HeaderMainContainer>
      </HeaderMainBgContainer>

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
    </HeaderWrapper>
  );
};

export default Header;
