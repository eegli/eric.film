import React, { useState } from 'react';
import {
  StyledHamburger,
  HeaderMainContainer,
  StyledLogo,
  HeaderWrapper,
  HeaderMainBgContainer,
  HeaderOptionsMobileContainer,
  HeaderOptionsDesktopContainer,
} from './header.styles';
import Link from 'next/link';

import SmoothCollapse from 'react-smooth-collapse';

import HeaderOptions from './header-options/header-options.components';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleClick = (): void => {
    setShowHeader(!showHeader);
  };

  return (
    <HeaderWrapper>
      <HeaderMainBgContainer>
        <HeaderMainContainer>
          <Link href='/'>
            <a>
              <StyledLogo src='/static/logo/Logo_v2.png' />
            </a>
          </Link>
          <HeaderOptionsDesktopContainer>
            <HeaderOptions position='desktop' />
          </HeaderOptionsDesktopContainer>
          <StyledHamburger onClick={handleClick} />
        </HeaderMainContainer>
      </HeaderMainBgContainer>

      <SmoothCollapse expanded={showHeader} onClick={handleClick}>
        <HeaderOptionsMobileContainer>
          <HeaderOptions position='mobile' />
        </HeaderOptionsMobileContainer>
      </SmoothCollapse>
    </HeaderWrapper>
  );
};

export default Header;
