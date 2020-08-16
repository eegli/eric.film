import { Sh2 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';

const SoundPage = () => {
  return (
    <LayoutContainer>
      <Sh2>ecuila's selection</Sh2>
      <iframe
        src='https://open.spotify.com/embed/playlist/6OJwUCh1NILjc9nFaJhj3n'
        width='100%'
        height='380'
        frameBorder='0'
        allowTransparency
        allow='encrypted-media'
        style={{ marginBottom: '2rem' }}></iframe>
      <Sh2>ecuila's block party</Sh2>
      <iframe
        src='https://open.spotify.com/embed/playlist/6hgxTySthCDQ2KgF5lOq0B'
        width='100%'
        height='380'
        frameBorder='0'
        allowTransparency
        allow='encrypted-media'
        style={{ marginBottom: '2rem' }}></iframe>
      <Sh2>ecuila's vibes</Sh2>
      <iframe
        src='https://open.spotify.com/embed/playlist/1p9NeTy15Bg534sghXUoCj'
        width='100%'
        height='380'
        frameBorder='0'
        allowTransparency
        allow='encrypted-media'
        style={{ marginBottom: '2rem' }}></iframe>
    </LayoutContainer>
  );
};

export default SoundPage;
