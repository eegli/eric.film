import { Theme } from '@/components/hooks/useLightTheme';
import styled from 'styled-components';

export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 10s linear;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2rem;
  padding: 0 1rem;
`;

export const BlogPostExcerpt = styled.h2`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const BlogPostTimes = styled.div`
  padding: 0 1rem;
  display: flex;
  color: ${({ theme }) => theme.colors.pink};
  & div {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 1rem;
    }
    & p {
      font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
      margin: 0 0 0 0.3rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;
type ThemeToggleProps = {
  mode: Theme;
};
export const ThemeToggleButton = styled.button<ThemeToggleProps>`
  display: flex;
  background-color: ${({ theme, mode }) =>
    mode === 'darkTheme'
      ? theme.colors.textSecondary
      : theme.colors.bgSecondary};
  margin: 1rem auto 0.5rem auto;
  padding: 0.5rem 0.8rem;
  color: ${({ theme, mode }) =>
    mode === 'darkTheme'
      ? theme.colors.bgSecondary
      : theme.colors.textSecondary};
  border-radius: 1rem;
  border: none;
  outline: none;
  & > span {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: ${({ theme, mode }) =>
      mode === 'darkTheme'
        ? theme.colors.bgSecondary
        : theme.colors.textSecondary};
    color: ${({ theme, mode }) =>
      mode === 'darkTheme'
        ? theme.colors.textSecondary
        : theme.colors.bgSecondary};
    cursor: pointer;
  }
`;

export const IFrameWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;
export const StyledIframe = styled.iframe`
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
