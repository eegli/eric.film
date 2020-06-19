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
  line-height: 1.5rem;
  & p {
    font-size: 1.1rem;
  }
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;
