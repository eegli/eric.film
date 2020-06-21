import styled from 'styled-components';

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 100%;
  margin-bottom: 3rem;
`;

export const ContentContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  margin: 2rem 0;
  width: 200px;
  text-align: center;
  &:nth-of-type(2) {
    margin: 2rem;
  }
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.baseBg};
  background-color: ${({ theme }) => theme.textSecondaryColor};
  padding: 0.2rem;
`;

export const CardContent = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 1rem;
`;
