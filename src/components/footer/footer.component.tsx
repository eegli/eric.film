import Link from 'next/link';
import { Container, Hr, SLink } from './footer.styles';

const Footer: React.FC = () => {
  return (
    <>
      <Hr />
      <Container>
        <Link href='/settings#privacy' passHref>
          <SLink>privacy</SLink>
        </Link>
        <Link href='/settings#acknowledgements' passHref>
          <SLink>acknowledgements</SLink>
        </Link>
        <Link href='/settings#imprint' passHref>
          <SLink>imprint</SLink>
        </Link>
        <Link href='/spotify' passHref>
          <SLink>spotify</SLink>
        </Link>
      </Container>
    </>
  );
};

export default Footer;
