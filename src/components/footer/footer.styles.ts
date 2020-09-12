import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 0 2rem;
  margin-bottom: 0.5rem;
`;

export const Hr = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  height: 3px;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin-bottom: 1rem;
  a {
    margin: 0 0.5rem;
    text-decoration: underline;
  }
  a:first-child {
    margin-left: 0;
  }
`;

export const GitHubIcon = styled.a`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0;
  }
`;
