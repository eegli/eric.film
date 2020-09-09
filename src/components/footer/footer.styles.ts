import styled from 'styled-components';

export const Hr = styled.hr`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  height: 3px;
`;

// Workaround for targeting the first and last footer link :last-child pseudo
// class cannot be applied because of Next.js Link component parents. Or I just
// don't get it.

export const SLink = styled.a``;

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin-bottom: 1rem;
  ${SLink} {
    margin: 0 2rem;
    &hover {
      text-decoration: underline;
    }
  }
  ${SLink}:first-child ${SLink}:last-child {
    margin: 0;
  }
`;

export const GitHubIcon = styled.a`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
  margin-left: auto;
  @media screen and (min-width: 960px) {
    padding: 0;
  }
`;
