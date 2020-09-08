import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

export const BlogCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FetchButton = styled.button`
  margin: 1rem 0;
  padding: 0.8rem;
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: none;
  display: flex;
  align-self: center;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover,
  &:active {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.bgSecondary};
    background-color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const FetchIcon = styled(FaPlus)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
  margin-right: 0.5rem;
`;
