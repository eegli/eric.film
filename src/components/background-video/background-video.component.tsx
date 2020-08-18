import styled from 'styled-components';

const Video = styled.video`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  object-fit: cover;
`;

type Props = {
  source: string;
};

const BackgroundVideo: React.FC<Props> = ({ source }) => {
  return (
    <Video autoPlay loop muted playsInline>
      <source src={source} type='video/mp4' />
    </Video>
  );
};

export default BackgroundVideo;
