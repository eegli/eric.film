import { FaAngleDown } from 'react-icons/fa';
import {
  ArrowDown,
  ArrowDownWrapper,
  Container,
  StyledVideo,
} from './landing-video.styles';

const LandingVideo: React.FC = () => {
  // TODO make this more elegant pls
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
      <ArrowDownWrapper>
        <ArrowDown onClick={scrollToContent}>
          <FaAngleDown />
        </ArrowDown>
      </ArrowDownWrapper>
    </Container>
  );
};
export default LandingVideo;
