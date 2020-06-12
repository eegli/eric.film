import styled from 'styled-components';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  padding: 1rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.baseBgraised};
  border-radius: 0.5rem;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2rem;
`;

export const BlogPostExcerpt = styled.h3`
  font-size: 1.2rem;
`;
