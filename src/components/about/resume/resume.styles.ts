import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.div`
  flex: 1;
  width: 40%;
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 90%;
    &:first-child {
      padding-bottom: 0;
    }
  }
`;

export const ResumeContent = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 1rem 2rem 1rem 1rem;
  & span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  }
  & > div {
    margin-top: 0.5rem;
    padding: 0.6rem;

    & > p {
      margin: 0 0 0.8rem 0;
    }
    & > ul {
      margin: 0 0 0.8rem 0;
      padding-left: 1.2rem;
    }
    & * li {
      margin-bottom: 0.5rem;
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ToggleTitle = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: inline;
  margin: 0;
  font-weight: 400;
`;
