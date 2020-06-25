import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ErrorContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > h1 {
    color: ${({ theme }) => theme.textShadowColor};
  }
  & > a {
    color: ${({ theme }) => theme.textSecondaryColor};
  }
`;
const VideoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 300px;
  overflow: hidden;
  max-height: 360px;
  overflow: hidden;
`;
const Video = styled.video`
  width: 102%;
`;

const Custom404: React.FC = () => {
  return (
    <Wrapper>
      <ErrorContainer>
        <h1>404 - Page Not Found</h1>
        <p>lol idk what you've been looking for?</p>
        <a href='/blog?cat=all'>take me anywhere. go</a>
      </ErrorContainer>
      <VideoWrapper>
        <Video autoPlay loop muted playsInline>
          <source src='/static/404/404.mp4' type='video/mp4' />
        </Video>
      </VideoWrapper>
    </Wrapper>
  );
};

export default Custom404;
