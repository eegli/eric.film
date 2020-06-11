import React from 'react';
import {
  CardContainer,
  SelectionCardContainer,
} from './selection-cards.styles';

const SelectionCards: React.FC<{}> = () => {
  return (
    <SelectionCardContainer>
      <CardContainer>still</CardContainer>
      <CardContainer>moving</CardContainer>
      <CardContainer>clients</CardContainer>
      <CardContainer>dev</CardContainer>
      <CardContainer>dev2</CardContainer>
      <CardContainer>dev3</CardContainer>
      <CardContainer>longtextstuff</CardContainer>
      <CardContainer>dev____5</CardContainer>
    </SelectionCardContainer>
  );
};

export default SelectionCards;
