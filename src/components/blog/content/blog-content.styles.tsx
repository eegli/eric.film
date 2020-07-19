import styled from 'styled-components';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 10s linear;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2rem;
  padding: 0 1rem;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const BlogPostHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  justify-content: space-between;
`;

export const BlogPostTimes = styled.div`
  white-space: nowrap;
  display: flex;
  color: ${({ theme }) => theme.colors.pink};
  & > div {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 1rem;
    }
    & > p {
      font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
      margin: 0 0 0 0.3rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const ThemeToggleButton = styled.button`
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  border: none;
  outline: none;
  padding: 0;
  text-decoration: underline;
  & > div {
    display: flex;
    align-items: center;

    & > p {
      font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
      margin: 0 0 0 0.3rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;
  }
`;

export const IFrameWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;
export const StyledIframe = styled.iframe`
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
