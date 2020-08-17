import BackgroundVideo from '@/components/background-video/background-video.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import { Sh2 } from '@/shared/headings.styles';

// TODO Credit Rufus do Sol
const SoundPage = () => {
  return (
    <>
      <BackgroundVideo source='/static/vid/sound_bg.mp4' />
      <LayoutContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Sh2>ecuila's selection</Sh2>
          <iframe
            src='https://open.spotify.com/embed/playlist/6OJwUCh1NILjc9nFaJhj3n'
            width='60%'
            height='380'
            frameBorder='0'
            allowTransparency
            allow='encrypted-media'
            style={{ marginBottom: '2rem' }}></iframe>
          <Sh2>ecuila's block party</Sh2>
          <iframe
            src='https://open.spotify.com/embed/playlist/6hgxTySthCDQ2KgF5lOq0B'
            width='60%'
            height='380'
            frameBorder='0'
            allowTransparency
            allow='encrypted-media'
            style={{ marginBottom: '2rem' }}></iframe>
          <Sh2>ecuila's vibes</Sh2>
          <iframe
            src='https://open.spotify.com/embed/playlist/1p9NeTy15Bg534sghXUoCj'
            width='60%'
            height='380'
            frameBorder='0'
            allowTransparency
            allow='encrypted-media'
            style={{ marginBottom: '2rem' }}></iframe>
        </div>
      </LayoutContainer>
    </>
  );
};

export default SoundPage;
