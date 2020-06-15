import styled from 'styled-components';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
  padding: 1rem;
  margin: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.baseBgraised};
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const BlogPreviewImage = styled.img`
  max-width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const BlogPostTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: 1rem;
`;
