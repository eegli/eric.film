import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Container, GitHubIcon, Hr, SLink } from './footer.styles';

const Footer: React.FC = () => {
  return (
    <>
      <Hr />
      <Container>
        <Link href='/disclaimer#privacy' passHref>
          <SLink first>privacy</SLink>
        </Link>
        <Link href='/disclaimer#acknowledgements' passHref>
          <SLink>acknowledgements</SLink>
        </Link>
        <Link href='/disclaimer#imprint' passHref>
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
