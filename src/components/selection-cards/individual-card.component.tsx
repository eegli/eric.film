import React from 'react';

export enum Categories {
  PORTFOLIO_STILL = 'still',
  PORTFOLIO_MOVING = 'moving',
  PORTFOLIO_CLIENTS = 'client',
  PORTFOLIO_DEV = 'dev',
  // blog categories including "DEV"
  BLOG_ALL = 'all',
  BLOG_DEV = 'dev',
  BLOG_VOTW = 'votw',
  BLOG_VARIA = 'varia',
}

type Props = {
  category: Categories;
};

const IndividualCard: React.FC<Props> = ({ category }) => {
  switch (category) {
    case Categories.PORTFOLIO_STILL:
      return <div>still only</div>;
    case Categories.PORTFOLIO_MOVING:
      return <div>moving only</div>;
    case Categories.PORTFOLIO_CLIENTS:
      return <div>client only</div>;
    case Categories.PORTFOLIO_DEV:
      return <div>dev only</div>;

    case Categories.BLOG_ALL:
      return <div>all</div>;
    case Categories.BLOG_DEV:
      return <div>still only</div>;
    case Categories.BLOG_VOTW:
      return <div>moving only</div>;
    case Categories.BLOG_PHOTO:
      return <div>dev only</div>;
    case Categories.BLOG_VARIA:
      return <div>client only</div>;
    default:
      return <div>hi</div>;
  }
};

export default IndividualCard;
