import BackgroundVideo from '@/components/background-video/background-video.component';
import { RefObject } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { ArrowDown, ArrowDownWrapper } from './landing-video.styles';

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
    <>
      <BackgroundVideo dynamicViewport source='/static/vid/home_teaser.mp4' />
      <ArrowDownWrapper>
        <ArrowDown onClick={scrollToContent}>
          <FaAngleDown />
        </ArrowDown>
      </ArrowDownWrapper>
    </>
  );
};
export default LandingVideo;
