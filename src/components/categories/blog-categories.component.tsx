import { useState } from 'react';
import {
  CardContainer,
  CategoryContainer,
  SortButtonContainer,
  SelectionCardContainer,
  SortButton,
} from './_categories.styles';
import CategorySwitch from './switch-categories/category-switch.component';
import { useRouter } from 'next/router';
import { BlogCategories as B, SortBy } from '@/components/types';
import { useActiveUrl } from './hook/useActiveCat';
import { FaSort } from 'react-icons/fa';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const [sort, setSort] = useState(SortBy.createdAt_DESC);
  const slug = '/blog?cat=';
  const router = useRouter();
  const activeUrl = useActiveUrl(B.BLOG_ALL);
  const handleBlogClick = (location: B): void => {
    router.push(`${slug}${location}`, undefined, { shallow: true });
  };

  return (
    <>
      <CategoryContainer>
        <SelectionCardContainer>
          <CardContainer
            onClick={() => handleBlogClick(B.BLOG_ALL)}
            active={activeUrl === `${slug}${B.BLOG_ALL}`}>
            {B.BLOG_ALL}
          </CardContainer>
          <CardContainer
            onClick={() => handleBlogClick(B.BLOG_TECH)}
            active={activeUrl === `${slug}${B.BLOG_TECH}`}>
            {B.BLOG_TECH}
          </CardContainer>
          <CardContainer
            onClick={() => handleBlogClick(B.BLOG_VOTW)}
            active={activeUrl === `${slug}${B.BLOG_VOTW}`}>
            {B.BLOG_VOTW}
          </CardContainer>
          <CardContainer
            onClick={() => handleBlogClick(B.BLOG_VARIA)}
            active={activeUrl === `${slug}${B.BLOG_VARIA}`}>
            {B.BLOG_VARIA}
          </CardContainer>
        </SelectionCardContainer>
        <SortButtonContainer>
          {sort === SortBy.createdAt_DESC ? (
            <>
              <FaSort />
              <SortButton onClick={() => setSort(SortBy.createdAt_ASC)}>
                show oldest
              </SortButton>
            </>
          ) : (
            <>
              <FaSort />
              <SortButton onClick={() => setSort(SortBy.createdAt_DESC)}>
                show latest
              </SortButton>
            </>
          )}
        </SortButtonContainer>
      </CategoryContainer>
      <CategorySwitch sortBy={sort} />
    </>
  );
};

export default BlogCategories;
