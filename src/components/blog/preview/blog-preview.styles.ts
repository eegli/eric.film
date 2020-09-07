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
  position: relative;
  max-width: 400px;
  margin: 0.5rem;
  border-radius: 0.5rem;
  @media screen and (max-width: ${breakPoint}) {
    flex-wrap: wrap;
  }
  ${hover}
`;

export const PreviewImageContainer = styled.div`
  height: 400px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
`;
export const PreviewContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PreviewTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontsizes.h1FontSize};
  margin: 1rem 0;
  padding: 0 1rem;
  & span {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    box-shadow: 0px 0px 0 10px ${({ theme }) => theme.colors.bgSecondary};
    line-height: 1.8;
  }
`;

export const PreviewExcerpt = styled.h2`
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 1rem;
  margin: 0;
  overflow: hidden;
  flex-grow: 1;
`;

export const PreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
