import { FaAngleDown } from 'react-icons/fa';
import {
  ArrowDownContainer,
  Container,
  StyledVideo,
} from './landing-video.styles';

const LandingVideo: React.FC = () => {
  const scrollToContent = (): void => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <StyledVideo autoPlay loop muted playsInline>
        <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
      </StyledVideo>
      <ArrowDownContainer onClick={scrollToContent}>
        <FaAngleDown />
      </ArrowDownContainer>
    </Container>
  );
};
export default LandingVideo;
