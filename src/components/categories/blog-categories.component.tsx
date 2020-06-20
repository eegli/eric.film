import { useState } from 'react';
import {
  CardContainer,
  SelectionCardContainer,
  SortSelectContainer,
  SortSelect,
} from './_categories.styles';
import CategorySwitch from './switch-categories/category-switch.component';
import { useRouter } from 'next/router';
import { BlogCategories as B, SortBy } from '@/components/types';
import { useActiveUrl } from './hook/useActiveCat';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const [sort, setSort] = useState(SortBy.createdAt_DESC);
  console.log(sort);
  const slug = '/blog?cat=';
  const router = useRouter();
  const activeUrl = useActiveUrl(B.BLOG_ALL);
  const handleBlogClick = (location: B): void => {
    router.push(`${slug}${location}`, undefined, { shallow: true });
  };

  const handleChange = (event: any) => {
    setSort(event.target.value);
  };

  return (
    <>
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
        <SortSelectContainer>
          <SortSelect>
            <label style={{ marginRight: '1rem' }}>sort by </label>
            <div>
              <select onChange={handleChange}>
                <option value={SortBy.createdAt_DESC}>latest</option>
                <option value={SortBy.createdAt_ASC}>newest</option>
              </select>
            </div>
          </SortSelect>
        </SortSelectContainer>
      </SelectionCardContainer>

      <CategorySwitch sortBy={sort} />
    </>
  );
};

export default BlogCategories;
