import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const CommentInfo = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
