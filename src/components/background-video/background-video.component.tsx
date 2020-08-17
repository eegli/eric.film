import { BgVideo } from './background-video.styles';

type Props = {
  source: string;
};

const BackgroundVideo: React.FC<Props> = ({ source }) => {
  return (
    <BgVideo autoPlay loop muted playsInline>
      <source src={source} type='video/mp4' />
    </BgVideo>
  );
};

export default BackgroundVideo;
