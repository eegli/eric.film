import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
`;

export const CardHeader = styled.h1`
  font-style: italic;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: normal;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 0.5rem;
`;

export const CardTitle = styled.h1`
  letter-spacing: 0.5rem;
  font-weight: 400;
  text-align: center;
  margin: 1rem 0 1rem 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const CardDescription = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  padding: 2rem;
  & > span {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  }
  & > p {
    margin: 0.5rem 0 0.5rem 0;
  }
  & * li {
    margin-bottom: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}) {
    padding: 1rem;
  }
`;
export const CardPicture = styled.picture`
  max-width: 100%;
  max-height: 100%;
`;
