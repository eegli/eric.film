import styled from 'styled-components';

const StyledIframe = styled.iframe`
  width: 100%;
  margin-bottom: 2.2rem;
  height: 380px;
`;

type Props = {
  src: string;
};

const SpotifyIframe: React.FC<Props> = ({ src }) => {
  return (
    <StyledIframe
      src={src}
      frameBorder='0'
      allow='encrypted-media'></StyledIframe>
  );
};

export default SpotifyIframe;
