import { FaGithub, FaLinkedinIn, FaInstagram, FaSpotify } from 'react-icons/fa';
import { Container, IconContainer } from './social-bar.styles';

const SocialBar: React.FC = () => {
  return (
    <Container>
      <IconContainer href='https://github.com/eegli' target='_blank'>
        <FaGithub />
      </IconContainer>
      <IconContainer
        href='https://www.linkedin.com/in/ericegli/'
        target='_blank'>
        <FaLinkedinIn />
      </IconContainer>
      <IconContainer href='http://instagram.com/eric.film' target='_blank'>
        <FaInstagram />
      </IconContainer>
    </Container>
  );
};

export default SocialBar;
