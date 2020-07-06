import { Container, Hr, SLink } from './footer.styles';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      <Hr />
      <Container>
        <Link href='settings#imprint' passHref>
          <SLink>imprint</SLink>
        </Link>
        <Link href='/settings#privacy' passHref>
          <SLink>privacy</SLink>
        </Link>
        <Link href='/settings#magic' passHref>
          <SLink>magic</SLink>
        </Link>
      </Container>
    </>
  );
};

export default Footer;
