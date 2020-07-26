import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';
import HeaderOptions from './header-options/header-options.components';
import {
  HeaderMainBgContainer,
  HeaderMainContainer,
  HeaderOptionsDesktopContainer,
  HeaderOptionsMobileContainer,
  HeaderWrapper,
  StyledHamburger,
  StyledLogo,
} from './header.styles';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  const router = useRouter();
  const indexPage = router.route === '/' ?? false;

  const handleClick = (): void => {
    setShowHeader(!showHeader);
  };

  return (
    <HeaderWrapper indexPage={indexPage}>
      <HeaderMainBgContainer>
        <HeaderMainContainer>
          <Link href='/'>
            <a>
              <StyledLogo src='/static/logo/Logo_v2.png' alt='eric.film logo' />
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
