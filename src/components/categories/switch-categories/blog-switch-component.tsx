import { BlogCategories, SortBy } from '@/components/types';
import { useRouter } from 'next/router';
import { BlogCategory } from '../card-categories/index';

type Props = {
  sortBy?: SortBy;
};

const BlogSwitch: React.FC<Props> = ({ sortBy }) => {
  const router = useRouter();
  switch (router.query.cat) {
    case BlogCategories.BLOG_ALL:
      return <BlogCategory sortBy={sortBy} />;
    case BlogCategories.BLOG_TECH:
      return <BlogCategory filter={BlogCategories.BLOG_TECH} sortBy={sortBy} />;
    case BlogCategories.BLOG_VOTW:
      return <BlogCategory filter={BlogCategories.BLOG_VOTW} sortBy={sortBy} />;
    case BlogCategories.BLOG_VARIA:
      return (
        <BlogCategory filter={BlogCategories.BLOG_VARIA} sortBy={sortBy} />
      );

    default:
      return <BlogCategory sortBy={sortBy} />;
  }
};

export default BlogSwitch;
