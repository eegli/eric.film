import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import Select from 'react-select';

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media screen and (max-width: 850px) {
    justify-content: center;
    padding: 0;
  }
`;

export const SelectionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  flex-wrap: wrap;
`;

export const SelectContainer = styled(Select)`
  max-width: 120px;
  width: 120px;

  @media screen and (max-width: 850px) {
    margin: 0.5rem;
  }
  & > * {
    background-color: ${({ theme }) => theme.baseBgraised} !important;
    color: ${({ theme }) => theme.textColor} !important;
    border: none !important;
  }
`;

type CardContainerProps = {
  active: boolean;
};

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.textLinkColor : theme.baseBgraised};
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  color: ${({ theme, active }) => (active ? theme.baseBg : theme.textColor)};
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme, active }) =>
      active ? theme.baseBg : theme.baseBgraised};
    cursor: pointer;
  }
`;
