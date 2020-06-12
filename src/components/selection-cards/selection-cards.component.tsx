import React, { useState } from 'react';
import {
  CardContainer,
  SelectionCardContainer,
} from './selection-cards.styles';

import IndividualCard, { Categories } from './individual-card.component';

type Props = {
  blogOrPortfolio: 'blog' | 'portfolio';
};

const SelectionCards: React.FC<Props> = ({ blogOrPortfolio }) => {
  // Set the default categories to be shown
  const [portfCat, setPortfCat] = useState<Categories>(
    Categories.PORTFOLIO_STILL
  );
  const [blogCat, setBlogCat] = useState<Categories>(Categories.BLOG_ALL);

  if (blogOrPortfolio === 'portfolio') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer
            onClick={() => setPortfCat(Categories.PORTFOLIO_STILL)}>
            {Categories.PORTFOLIO_STILL}
          </CardContainer>
          <CardContainer
            onClick={() => setPortfCat(Categories.PORTFOLIO_MOVING)}>
            {Categories.PORTFOLIO_MOVING}
          </CardContainer>
          <CardContainer
            onClick={() => setPortfCat(Categories.PORTFOLIO_CLIENTS)}>
            {Categories.PORTFOLIO_CLIENTS}
          </CardContainer>
          <CardContainer onClick={() => setPortfCat(Categories.PORTFOLIO_DEV)}>
            {Categories.PORTFOLIO_DEV}
          </CardContainer>
        </SelectionCardContainer>
        <IndividualCard category={portfCat} />
      </>
    );
  } else if (blogOrPortfolio === 'blog') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer onClick={() => setBlogCat(Categories.BLOG_ALL)}>
            {Categories.BLOG_ALL}
          </CardContainer>
          <CardContainer onClick={() => setBlogCat(Categories.BLOG_DEV)}>
            {Categories.BLOG_DEV}
          </CardContainer>
          <CardContainer onClick={() => setBlogCat(Categories.BLOG_VOTW)}>
            {Categories.BLOG_VOTW}
          </CardContainer>
          <CardContainer onClick={() => setBlogCat(Categories.BLOG_VARIA)}>
            {Categories.BLOG_VARIA}
          </CardContainer>
        </SelectionCardContainer>
        <IndividualCard category={blogCat} />
      </>
    );
  } else {
    return <div></div>;
  }
};

export default SelectionCards;
