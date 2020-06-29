import React from 'react';
import { StyledLinkText } from './header-options.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface Props {
  position: 'mobile' | 'desktop';
}

const HeaderOptions: React.FC<Props> = ({ position }) => {
  const router = useRouter();
  console.log(router.pathname);
  let isMobile: boolean;

  if (position === 'mobile') {
    isMobile = true;
  } else {
    isMobile = false;
  }
  return (
    <>
      <Link href='/'>
        <StyledLinkText href='/' path={router.pathname} isMobile={isMobile}>
          home
        </StyledLinkText>
      </Link>
      <Link href='/about'>
        <StyledLinkText
          href='/about'
          path={router.pathname}
          isMobile={isMobile}>
          about
        </StyledLinkText>
      </Link>
      <Link href='/portfolio?cat=still'>
        <StyledLinkText
          href='/portfolio'
          path={router.pathname}
          isMobile={isMobile}>
          portfolio
        </StyledLinkText>
      </Link>
      <Link href='/blog?cat=all'>
        <StyledLinkText href='/blog' path={router.pathname} isMobile={isMobile}>
          blog
        </StyledLinkText>
      </Link>
    </>
  );
};

export default HeaderOptions;
