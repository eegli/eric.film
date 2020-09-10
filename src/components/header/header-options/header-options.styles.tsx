import styled, { css } from 'styled-components';
import { Props } from './header-options.components';

interface StyleProps extends Props {
  href: string;
  path: string;
}

// Theoretically not necessary anymore, but I'm leaving it here for future references
const mobileStyles = css`
  padding: 1.4rem 1rem;
`;

const getMobileStyles = (
  params: StyleProps,
): typeof mobileStyles | undefined => {
  if (params.position === 'mobile') {
    return mobileStyles;
  }
};

export const StyledLinkText = styled.a<StyleProps>`
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.colors.pink};
  letter-spacing: 0.4rem;
  &:hover {
    text-decoration: line-through;
  }
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: ${({ href, path }) =>
    href === path ? 'underline' : 'none'};
  ${getMobileStyles}
`;
