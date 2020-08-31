import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Container, GitHubIcon, Hr, SLink } from './footer.styles';

const Footer: React.FC = () => {
  return (
    <>
      <Hr />
      <Container>
        <Link href='/settings#privacy' passHref>
          <SLink first>privacy</SLink>
        </Link>
        <Link href='/settings#acknowledgements' passHref>
          <SLink>acknowledgements</SLink>
        </Link>
        <Link href='/settings#imprint' passHref>
          <SLink last>imprint</SLink>
        </Link>
        <GitHubIcon
          href='https://github.com/eegli/eric.film'
          rel='noopener noreferrer nofollow'
          target='_blank'>
          <FaGithub />
        </GitHubIcon>
      </Container>
    </>
  );
};

export default Footer;
