import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledLinkText } from './header-options.styles';

export interface Props {
  position: 'mobile' | 'desktop';
}

const HeaderOptions: React.FC<Props> = ({ position }) => {
  const router = useRouter();

  return (
    <>
      <Link href='/'>
        <StyledLinkText href='/' path={router.pathname} position={position}>
          home
        </StyledLinkText>
      </Link>
      <Link href='/about'>
        <StyledLinkText
          href='/about'
          path={router.pathname}
          position={position}>
          about
        </StyledLinkText>
      </Link>
      <Link href='/portfolio?cat=still'>
        <StyledLinkText
          href='/portfolio'
          path={router.pathname}
          position={position}>
          portfolio
        </StyledLinkText>
      </Link>
      <Link href='/blog?cat=all'>
        <StyledLinkText href='/blog' path={router.pathname} position={position}>
          blog
        </StyledLinkText>
      </Link>
    </>
  );
};

export default HeaderOptions;
