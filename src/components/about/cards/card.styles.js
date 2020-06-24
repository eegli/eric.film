import styled from 'styled-components';
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const CardHeader = styled.h1`
  font-style: italic;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.textSecondaryColor};
  font-weight: normal;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 350px;
  padding: 0.5rem;
`;

export const CardTitle = styled.h1`
  letter-spacing: 0.5rem;
  font-weight: 400;
  text-align: center;
  margin: 1rem 0 1rem 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.textColor};
`;
export const CardDescription = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 2rem;
  & > span {
    color: ${({ theme }) => theme.textSecondaryColor};
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  }
  & > p {
    margin: 0.5rem 0 0.5rem 0;
  }
  & * li {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;
export const CardPicture = styled.picture`
  max-width: 100%;
  max-height: 100%;
`;
