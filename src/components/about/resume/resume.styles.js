import styled from 'styled-components';

const mobileBp = '1000px';

export const Container = styled.div`
  margin-top: 1rem;
  width: 93%;
  color: ${({ theme }) => theme.colors.baseBg};
  padding: 1rem;
  display: flex;
  @media screen and (max-width: ${mobileBp}) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  flex: 1;
  margin-right: 2rem;
  &:nth-child(2) {
    margin-left: 1rem;
    margin-right: 0;
    @media screen and (max-width: ${mobileBp}) {
      margin: 2rem 0 0 0;
    }
  }
  @media screen and (max-width: ${mobileBp}) {
    margin: 0;
  }
`;

export const ResumeContent = styled.div`
  background-color: ${({ theme }) => theme.colors.baseBgraised};
  color: ${({ theme }) => theme.colors.textPrimaryColor};
  padding: 1rem 2rem 1rem 1rem;
  & > span {
    color: ${({ theme }) => theme.colors.textSecondaryColor};
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  }
  & > div {
    margin-top: 0.5rem;
    padding: 0.6rem;
    & > span {
      color: ${({ theme }) => theme.colors.textSecondaryColor};
    }
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
  background-color: ${({ theme }) => theme.colors.textSecondaryColor};
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ToggleTitle = styled.p`
  display: inline;
  font-size: ${({ theme }) => theme.fontsizes.h2FontSize};
  margin: 0;
  font-weight: 600;
`;
