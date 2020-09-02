import { BlogType } from '@/src/generated/graphql';
import { MdAccessTime, MdLabel } from 'react-icons/md';
import styled, { css } from 'styled-components';

const hover = css`
  &:hover {
    cursor: pointer;
  }
`;

export const BlogPostContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
  width: 360px;
  padding: 1rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  // border-radius: 0.5rem;
  ${hover}
`;

export const BlogPreviewImage = styled.img`
  width: 360px;
  max-height: 180px;
  object-fit: cover;
`;

export const BlogPostTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontsizes.h1FontSize};
  margin: 0.5rem 0 1rem 0;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const BlogPostFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const BlogCreatedContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
`;
export const BlogCreatedTime = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin: 0 0 0 0.5rem;
`;

export const BlogCreatedIcon = styled(MdAccessTime)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
`;

export const BlogPostLabel = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin: 0 0.5rem 0 0;
`;

export const BlogPostIcon = styled(MdLabel)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
`;

type LabelProps = {
  type: BlogType;
};
export const BlogLabelContainer = styled.div<LabelProps>`
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === BlogType.Tech
      ? theme.colors.accents.brightBlue
      : type === BlogType.Varia
      ? theme.colors.accents.eggshell
      : type === BlogType.Votw
      ? theme.colors.accents.melon
      : null};
  border-radius: 0.5rem;
`;
