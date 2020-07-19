import styled from 'styled-components';
import { Props } from './header-options.components';

interface StyleProps extends Props {
  href: string;
  path: string;
}

export const StyledLinkText = styled.a<StyleProps>`
  width: 100%;
  padding: ${({ position }) => (position === 'mobile' ? '1.4rem' : '0')} 1rem;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.colors.pink};
  letter-spacing: 0.4rem;
  &:hover {
    text-decoration: line-through;
    cursor: pointer;
  }
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: ${({ href, path }) =>
    href === path ? 'underline' : 'none'};
`;
