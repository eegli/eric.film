import styled from 'styled-components';

// Used if text appears on card. Only used for DEV and CLIENT cards
export const BgContainer = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  border-radius: 0.5rem;
  margin: 0.5rem 0;
`;

export const IntroContainer = styled.div`
  padding: 0.5rem 1rem;
  & > p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
    text-align: center;
    & > span {
      color: ${({ theme }) => theme.textShadowColor};
      font-weight: bold;
    }
  }
`;
