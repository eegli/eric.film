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
    color: ${({ theme }) => theme.colors.pinkPrimary};
  }
  & > a {
    color: ${({ theme }) => theme.colors.whiteSecondary};
  }
`;

const Custom404: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ErrorContainer>
          <h1>404 - Page Not Found</h1>
          <p>lol idk what you've been looking for?</p>
          <a href='/blog?cat=all'>take me anywhere. go</a>
        </ErrorContainer>
      </Wrapper>
    </>
  );
};

export default Custom404;
