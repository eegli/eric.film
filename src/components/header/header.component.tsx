import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SmoothCollapse from 'react-smooth-collapse';
import HeaderOptions from './header-options/header-options.components';
import {
  HeaderMainBgContainer,
  HeaderMainContainer,
  HeaderOptionsDesktopContainer,
  HeaderOptionsMobileContainer,
  HeaderWrapper,
  MenuIcon,
  StyledLogo,
} from './header.styles';

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
              <StyledLogo src='/static/logo/logo.png' alt='eric.film logo' />
            </a>
          </Link>
          <HeaderOptionsDesktopContainer>
            <HeaderOptions position='desktop' />
          </HeaderOptionsDesktopContainer>
          <MenuIcon onClick={handleClick} rotated={showHeader}>
            <FaBars />
          </MenuIcon>
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
