import styled from 'styled-components';

export const Hr = styled.hr`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  height: 3px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin-bottom: 1rem;
  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;

// Workaround for targeting the first and last footer link :last-child pseudo
// class cannot be applied because of Next.js Link component parents

type SLinkProps = {
  last?: boolean;
  first?: boolean;
};

export const SLink = styled.a<SLinkProps>`
  margin: 0 0.5rem;
  margin: ${({ last, first }) => (last || first ? '0' : '0 0.5rem')};
  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const GitHubIcon = styled.a`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
  margin-left: auto;
  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;
