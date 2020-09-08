import BackgroundVideo from '@/components/background-video/background-video.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import SpotifyPlaylists from '@/components/spotify/spotify-playlists.component';
import { SEO_SPOTIFY_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/meta';
import Head from 'next/head';

const SpotifyPage: React.FC = () => {
  const metaTags = createMetaTags({
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
  });
  return (
    <>
      <Head>{metaTags}</Head>
      <BackgroundVideo source='/static/vid/sound_bg.mp4' />
      <LayoutContainer pageBreakpoint='small'>
        <SpotifyPlaylists />
      </LayoutContainer>
    </>
  );
};

export default SpotifyPage;
