import React from 'react';
import {
  LandingVideoContainer,
  ArrowDownContainer,
  StyledVideo,
} from './landing-video.styles';
import { FaAngleDown } from 'react-icons/fa';

type Props = {
  contentRef: React.RefObject<HTMLDivElement>;
};

const LandingVideo: React.FC<Props> = ({ contentRef }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>): void => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <LandingVideoContainer>
      <StyledVideo autoPlay loop muted>
        <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
      </StyledVideo>
      <ArrowDownContainer onClick={() => scrollToRef(contentRef)}>
        <FaAngleDown />
      </ArrowDownContainer>
    </LandingVideoContainer>
  );
};
export default LandingVideo;
