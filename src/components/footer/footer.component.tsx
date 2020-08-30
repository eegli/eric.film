import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
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
        <a
          href='https://github.com/eegli/eric.film'
          style={{ marginLeft: 'auto', padding: '0 1rem' }}
          rel='noopener noreferrer nofollow'
          target='_blank'>
          <FaGithub />
        </a>
      </Container>
    </>
  );
};

export default Footer;
