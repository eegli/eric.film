import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const BlogCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: stretch;
`;

export const FetchButton = styled.button`
  margin: 1rem 0;
  padding: 0.8rem;
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  background-color: ${({ theme }) => theme.colors.baseBgraised};
  border: none;
  display: flex;
  align-self: center;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimaryColor};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.baseBgraised};
    background-color: ${({ theme }) => theme.colors.textPrimaryColor};
  }
`;

export const FetchIcon = styled(FaPlus)`
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
  margin-right: 0.5rem;
`;
