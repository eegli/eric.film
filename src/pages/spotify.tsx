import BackgroundVideo from '@/components/background-video/background-video.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import SpotifyPlaylists from '@/components/spotify/spotify-playlists.component';

const SpotifyPage: React.FC = () => {
  return (
    <>
      <BackgroundVideo source='/static/vid/sound_bg.mp4' />
      <LayoutContainer width='small'>
        <SpotifyPlaylists />
      </LayoutContainer>
    </>
  );
};

export default SpotifyPage;
