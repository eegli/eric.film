import { BlogType } from '@/components/types';
import { MdAccessTime, MdLabel } from 'react-icons/md';
import styled, { css } from 'styled-components';

const breakPoint = '700px';

const hover = css`
  &:hover {
    cursor: pointer;
  }
`;

export const PreviewContainer = styled.a`
  width: 90%;
  margin: 0.5rem;
  border-radius: 0.5rem;
  @media screen and (max-width: ${breakPoint}) {
    flex-wrap: wrap;
  }
  ${hover}
`;

export const PreviewImageContainer = styled.div`
  height: 300px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PreviewTextContainer = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const PreviewTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontsizes.h1FontSize};
  margin: 0.5rem 0 1rem 0;
`;

export const PreviewExcerpt = styled.h2`
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const PreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;
export const CreatedContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textTertiary};
`;
export const CreatedTime = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin: 0 0 0 0.5rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const CreatedIcon = styled(MdAccessTime)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
`;

type LabelProps = {
  type: BlogType;
};
export const LabelContainer = styled.div<LabelProps>`
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

export const PreviewLabel = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin: 0 0.5rem 0 0;
`;

export const PreviewIcon = styled(MdLabel)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
`;
