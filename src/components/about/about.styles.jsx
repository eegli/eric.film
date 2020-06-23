import styled from 'styled-components';

export const AboutContainer = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
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

export const CardTitle = styled.h2`
  letter-spacing: 0.1rem;
  font-weight: 400;
  text-align: center;
  margin: 1rem 0 0 0;
  font-size: 2rem;
  text-shadow: 2px 2px 0px ${({ theme }) => theme.textShadowColor};
  color: ${({ theme }) => theme.textColor};
`;
export const CardDescription = styled.p`
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 2rem;
  & > span {
    color: ${({ theme }) => theme.textSecondaryColor};
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  }
`;
export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
