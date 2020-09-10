import styled from 'styled-components';

type Props = {
  dev?: boolean;
};

// Used if text appears on card. Only used for DEV and CLIENT cards
export const CategoryWrapper = styled.div<Props>`
  background-color: ${({ dev, theme }) =>
    dev ? '' : theme.colors.bgSecondary};
  margin: 0.5rem 0;
`;

export const CategoryIntro = styled.div<Props>`
  padding: 0.5rem 1rem;
  & p {
    margin: 0;
    font-size: ${({ theme, dev }) =>
      dev ? theme.fontsizes.h1FontSize : theme.fontsizes.baseFontSize};
  }
  & span {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 600;
  }
`;
