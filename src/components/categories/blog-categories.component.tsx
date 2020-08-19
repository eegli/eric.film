import { BlogCategories as B, SortBy } from '@/components/types';
import Link from 'next/link';
import { useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useActiveUrl } from '../hooks/useActiveCat';
import {
  CardContainer,
  CategoryContainer,
  SelectionCardContainer,
  SortButton,
  SortButtonContainer,
} from './categories.styles';
import BlogSwitch from './switch-categories/blog-switch-component';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const [sort, setSort] = useState(SortBy.createdAt_DESC);
  const slug = '/blog?cat=';
  const activeUrl = useActiveUrl(B.BLOG_ALL);

  return (
    <>
      <CategoryContainer sticky>
        <SelectionCardContainer sticky>
          <Link href={`${slug}${B.BLOG_ALL}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${B.BLOG_ALL}`}>
              {B.BLOG_ALL}
            </CardContainer>
          </Link>
          <Link href={`${slug}${B.BLOG_TECH}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${B.BLOG_TECH}`}>
              {B.BLOG_TECH}
            </CardContainer>
          </Link>
          <Link href={`${slug}${B.BLOG_VOTW}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${B.BLOG_VOTW}`}>
              {B.BLOG_VOTW}
            </CardContainer>
          </Link>
          <Link href={`${slug}${B.BLOG_VARIA}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${B.BLOG_VARIA}`}>
              {B.BLOG_VARIA}
            </CardContainer>
          </Link>
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
      <BlogSwitch sortBy={sort} />
    </>
  );
};

export default BlogCategories;
