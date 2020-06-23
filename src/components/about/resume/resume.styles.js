import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  width: 93%;
  color: ${({ theme }) => theme.baseBg};
  padding: 1rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  flex: 1;
  margin-right: 1rem;
  &:nth-child(2) {
    margin-left: 1rem;
    margin-right: 0;
    @media screen and (max-width: 1000px) {
      margin: 2rem 0 0 0;
    }
  }
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`;

export const ResumeContent = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  color: ${({ theme }) => theme.textColor};
  padding: 1rem 2rem 1rem 1rem;
  & > span {
    color: ${({ theme }) => theme.textSecondaryColor};
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.textSecondaryColor};
  padding: 1rem;
`;

export const ToggleTitle = styled.p`
  display: inline;
  font-size: ${({ theme }) => theme.fontsizes.h2FontSize};
  margin: 0;
  font-weight: 600;
`;
