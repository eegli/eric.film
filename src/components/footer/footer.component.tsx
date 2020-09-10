import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import {
  ContentContainer,
  FooterWrapper,
  GitHubIcon,
  Hr,
  LinkContainer,
} from './footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Hr />
      <ContentContainer>
        <LinkContainer>
          <Link href='/disclaimer#privacy'>
            <a>privacy</a>
          </Link>
          <Link href='/disclaimer#acknowledgements'>
            <a>acknowledgements</a>
          </Link>
          <Link href='/disclaimer#imprint'>
            <a>imprint</a>
          </Link>
        </LinkContainer>
        <GitHubIcon
          href='https://github.com/eegli/eric.film'
          rel='noopener noreferrer nofollow'
          target='_blank'>
          <FaGithub />
        </GitHubIcon>
      </ContentContainer>
    </FooterWrapper>
  );
};

export default Footer;
