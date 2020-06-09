import React, { useState } from 'react';
import {
  StyledHamburger,
  HeaderMainContainer,
  StyledLogo,
  HeaderWrapper,
  HeaderMainBgContainer,
} from './header.styles';
import Link from 'next/link';

import SmoothCollapse from 'react-smooth-collapse';

import HeaderOptions from './header-options/header-options.components';

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
        <HeaderOptions />
      </SmoothCollapse>
    </HeaderWrapper>
  );
};

export default Header;
