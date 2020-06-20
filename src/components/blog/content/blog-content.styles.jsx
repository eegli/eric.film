import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2rem;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const StyledMD = styled(ReactMarkdown)`
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 0 1.2rem;
  line-height: 1.5rem;
  & p {
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  }
  & h1 {
    color: ${({ theme }) => theme.textShadowColor};
  }
  & code {
    color: ${({ theme }) => theme.textShadowColor};
  }
  & a {
    color: ${({ theme }) => theme.textSecondaryColor};
    text-decoration: underline;
    cursor: pointer;
  }
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;
