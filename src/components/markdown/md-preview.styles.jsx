import styled from 'styled-components';

export const BlogPostContainer = styled.article`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2rem;
  color: 'black';
`;

export const BlogPostExcerpt = styled.h3`
  font-size: 1.2rem;
`;

export const BlogPostContent = styled.div`
  background-color: rgb(206, 240, 232);
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
