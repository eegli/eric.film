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
      return (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          {/* what are you trying to do, there is no such category... 🤨
            <br /> click on a category above to show some content! 🤩 */}
        </div>
      );
  }
};

export default BlogSwitch;
