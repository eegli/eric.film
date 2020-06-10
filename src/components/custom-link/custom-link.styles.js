import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

export const CustomLinkContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomLinkText = styled.a`
  color: ${({ theme }) => theme.textLinkColor};
  font-size: 1rem;
  text-decoration: none;
  border-top: 0.1rem solid white;
  border-left: 0.1rem solid white;
  border-color: ${({ theme }) => theme.textShadowColor};
  padding: 0.2rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.3rem;
  letter-spacing: 0.4rem;
`;

export const StyledIcon = styled(FaAngleRight)`
  width: 1rem;
`;
