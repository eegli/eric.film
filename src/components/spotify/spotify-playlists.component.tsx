import { Sh2 } from '@/shared/headings.styles';
import SpotifyIframe from './spotify-iframe.component';
import { Container } from './spotify-playlists.styles';

const SpotifyPlaylists: React.FC = () => {
  return (
    <Container>
      <Sh2>ecuila's selection</Sh2>
      <SpotifyIframe src='https://open.spotify.com/embed/playlist/6OJwUCh1NILjc9nFaJhj3n' />
      <Sh2>ecuila's block party</Sh2>
      <SpotifyIframe src='https://open.spotify.com/embed/playlist/6hgxTySthCDQ2KgF5lOq0B' />
      <Sh2>ecuila's vibes</Sh2>
      <SpotifyIframe src='https://open.spotify.com/embed/playlist/1p9NeTy15Bg534sghXUoCj' />
    </Container>
  );
};

export default SpotifyPlaylists;
