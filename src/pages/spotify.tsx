import BackgroundVideo from '@/components/background-video/background-video.component';
import CustomHead from '@/components/custom-head/custom-head.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import SpotifyPlaylists from '@/components/spotify/spotify-playlists.component';
import { SEO_SPOTIFY_META as meta } from '@/src/config';

const SpotifyPage: React.FC = () => {
  return (
    <>
      <CustomHead
        title={meta.title}
        description={meta.description}
        ogImage={meta.image}
      />
      <BackgroundVideo source='/static/vid/sound_bg.mp4' />
      <LayoutContainer breakpoint='small'>
        <SpotifyPlaylists />
      </LayoutContainer>
    </>
  );
};

export default SpotifyPage;
