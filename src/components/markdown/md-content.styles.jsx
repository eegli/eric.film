import styled from 'styled-components';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2rem;
`;

export const BlogPostExcerpt = styled.h3`
  font-size: 1.2rem;
`;
// TODO get theme from props
export const BlogPostContent = styled.div`
  & > .wp-block-code {
    background-color: #000;
    border: 2rem;
    border-radius: 1rem;
    padding: 2rem;
    & > * {
      color: white;
    }
  }
`;
