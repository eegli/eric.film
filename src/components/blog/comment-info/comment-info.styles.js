import styled from 'styled-components';

export const Container = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
