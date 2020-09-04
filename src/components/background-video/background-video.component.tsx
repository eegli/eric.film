import { Video } from './background-video.styles';

export type Props = {
  source: string;
  dynamicViewport?: boolean;
};

const BackgroundVideo: React.FC<Props> = ({ source, dynamicViewport }) => {
  return (
    <Video autoPlay loop muted playsInline dynamicViewport={dynamicViewport}>
      <source src={source} type='video/mp4' />
    </Video>
  );
};

export default BackgroundVideo;
