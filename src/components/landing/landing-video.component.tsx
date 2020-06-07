import React from 'react';
import {
  LandingVideoContainer,
  ArrowDownContainer,
} from './landing-video.styles';
import { Svideo } from '@/shared/elements.styles';
import { FaAngleDown } from 'react-icons/fa';

interface LandingVideoProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const LandingVideo: React.FC<LandingVideoProps> = ({ contentRef }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>): void => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <LandingVideoContainer>
      <Svideo autoPlay loop muted>
        <source src='/static/vid/home_teaser.mp4' type='video/mp4' />
      </Svideo>
      <ArrowDownContainer onClick={() => scrollToRef(contentRef)}>
        <FaAngleDown />
      </ArrowDownContainer>
    </LandingVideoContainer>
  );
};
export default LandingVideo;
