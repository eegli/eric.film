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
`;
