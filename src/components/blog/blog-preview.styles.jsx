import styled from 'styled-components';
import { MdLabel } from 'react-icons/md';

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
  margin: 0.5rem 0 1rem 0;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.textSecondaryColor};
`;

export const BlogPostLabel = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 0.5rem 0 0;
  font-weight: 400;
`;

export const BlogPostIcon = styled(MdLabel)`
  margin-right: 0.5rem;
`;
export const BlogLabelContainer = styled.div`
  width: 80px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.baseBg};
  border-radius: 0.5rem;
`;
