import BackgroundVideo from '@/components/background-video/background-video.component';
import Footer from '@/components/footer/footer.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import SpotifyPlaylists from '@/components/spotify/spotify-playlists.component';

// TODO Credit Rufus do Sol
const SpotifyPage: React.FC = () => {
  return (
    <>
      <BackgroundVideo source='/static/vid/sound_bg.mp4' />
      <LayoutContainer>
        <SpotifyPlaylists />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default SpotifyPage;
