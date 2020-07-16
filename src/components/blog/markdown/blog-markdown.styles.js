import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const contentPadding = '1rem';

export const StyledMD = styled(ReactMarkdown)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.whitePrimary};
  & > * {
    padding: 0 ${contentPadding};
  }
  & img,
  code {
    padding: 0;
  }

  & li {
    margin: 0 ${contentPadding};
  }
  & p {
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  }
  & h1 {
    color: ${({ theme }) => theme.colors.pinkPrimary};
  }
  & code {
    color: ${({ theme }) => theme.colors.pinkPrimary};
  }
  & a {
    color: ${({ theme }) => theme.colors.whiteSecondary};
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
    background: ${({ theme }) => theme.colors.darkPrimary};
    border-left: 4px solid ${({ theme }) => theme.colors.whiteSecondary};
    margin: 1.5rem 2rem;
    padding: 0.5em 10px;
    & > p {
      display: inline;
      color: ${({ theme }) => theme.colors.whitePrimary};
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
