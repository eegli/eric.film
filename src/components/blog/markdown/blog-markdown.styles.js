import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const StyledMD = styled(ReactMarkdown)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 0 1.2rem;
  line-height: 1.5rem;
  & p {
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  }
  & h1 {
    color: ${({ theme }) => theme.textShadowColor};
  }
  & code {
    color: ${({ theme }) => theme.textShadowColor};
  }
  & a {
    color: ${({ theme }) => theme.textSecondaryColor};
    text-decoration: underline;
    cursor: pointer;
  }
  & img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0.5rem auto;
  }
  & blockquote {
    background: ${({ theme }) => theme.baseBg};
    border-left: 4px solid ${({ theme }) => theme.textSecondaryColor};
    margin: 1.5rem 2rem;
    padding: 0.5em 10px;
    & > p {
      display: inline;
      color: ${({ theme }) => theme.textColor};
      font-style: italic;
    }
    &:before {
      color: #ccc;
      content: open-quote;
      font-size: 2em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
  }
`;
