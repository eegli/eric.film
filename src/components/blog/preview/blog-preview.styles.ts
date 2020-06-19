import styled from 'styled-components';
import { MdLabel } from 'react-icons/md';
import { BlogCategories } from '@/components/types';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
  padding: 1rem;
  margin: 0.5rem;
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
  font-size: ${({ theme }) => theme.fontsizes.h1FontSize};
  margin: 0.5rem 0 1rem 0;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: ${({ theme }) => theme.fontsizes.h2FontSize};
  font-weight: normal;
  color: ${({ theme }) => theme.textSecondaryColor};
`;

export const BlogPostLabel = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  margin: 0 0.5rem 0 0;
`;

export const BlogPostIcon = styled(MdLabel)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
`;

type LabelProps = {
  type: BlogCategories;
};
export const BlogLabelContainer = styled.div<LabelProps>`
  padding: 0.5rem;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondaryColor};
  background-color: ${({ theme, type }) =>
    type === BlogCategories.BLOG_TECH
      ? theme.colors.accents.brightBlue
      : type === BlogCategories.BLOG_VARIA
      ? theme.colors.accents.eggshell
      : type === BlogCategories.BLOG_VOTW
      ? theme.colors.accents.melon
      : null};
  border-radius: 0.5rem;
`;
