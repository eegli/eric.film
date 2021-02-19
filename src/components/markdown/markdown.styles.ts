import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { StyleProps } from './markdown.component';

const contentPadding = '1.2rem';

export const StyledMD = styled(ReactMarkdown)<StyleProps>`
  background-color: ${({ theme, transparentBg }) =>
    transparentBg ? 'transparent' : theme.colors.bgSecondary};

  // I don't really like it atm. But maybe I'll go back
  /*  font-family: 'Droid Sans', sans-serif; */
  font-weight: 400;
  font-style: normal;
  margin-top: 1rem;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  & > * {
    padding: 0 ${contentPadding};
  }
  & code {
    padding: 0;
  }

  // Target inline code
  & p > code {
    text-decoration: underline ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  & li {
    margin: 0 ${contentPadding};
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  }
  & p {
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  }
  & h1 {
    margin-top: 2.5rem;
    padding: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
    letter-spacing: 0.7px;
    & span {
      display: inline-block;
      padding: 0 1rem;
      /* background-color: ${({ theme }) => theme.colors.textPrimary}; */
      /* box-shadow: 0px 0px 0 0.6rem ${({ theme }) => theme.colors.pink}; */
      line-height: 1.8;
      border-bottom: 5px ${({ theme }) => theme.colors.pink} solid;
    }
  }

  & a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
  & img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0.5rem auto;
    padding: 0;
  }

  & blockquote {
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-left: 4px solid ${({ theme }) => theme.colors.textPrimary};
    margin: 1.5rem 2rem;
    padding: 0.5em 10px;
    color: ${({ theme }) => theme.colors.textPrimary};
    & p {
      display: inline;
    }
    &:before {
      content: open-quote;
      font-size: 2em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
  }
`;
