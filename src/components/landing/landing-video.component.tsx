import { FaAngleDown } from 'react-icons/fa';
import {
  ArrowDownContainer,
  LandingVideoContainer,
  StyledVideo,
} from './landing-video.styles';

const LandingVideo: React.FC = () => {
  // This works because the landing video page is 100vh
  const scrollToContent = (): void => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <LandingVideoContainer>
      <StyledVideo autoPlay loop muted playsInline>
        <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
      </StyledVideo>
      <ArrowDownContainer onClick={scrollToContent}>
        <FaAngleDown />
      </ArrowDownContainer>
    </LandingVideoContainer>
  );
};
export default LandingVideo;
