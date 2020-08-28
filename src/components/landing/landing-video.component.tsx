import { RefObject } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import {
  ArrowDown,
  ArrowDownWrapper,
  Container,
  StyledVideo,
} from './landing-video.styles';

type LandingProps = {
  contentRef: RefObject<HTMLDivElement>;
};

const LandingVideo: React.FC<LandingProps> = ({ contentRef }) => {
  const scrollToContent = (): void => {
    if (contentRef?.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
