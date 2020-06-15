import useSWR, { useSWRPages } from 'swr';
import { fetcher } from '@/api/graphql';
import { ALL_BLOGPOSTS_PREVIEW } from '../../../../api/queries';
import BlogPreview from '@/components/blog/blog-preview.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';

import { BlogCategoryContainer } from './blog-category.styles';

import { BlogPost, Category, BlogPostData } from '@/components/types';

type Props = {
  filter?: Category;
};

const BlogCategory: React.FC<Props> = ({ filter }) => {
  const { data, error, isValidating } = useSWR<BlogPostData>(
    ALL_BLOGPOSTS_PREVIEW,
    query => fetcher(query)
  );
  console.log(data);
  console.log(isValidating);
  // Loading case
  if (!data && !error) {
    return (
      <>
        <BlogCategoryContainer>
          <CustomSpinner />
        </BlogCategoryContainer>
      </>
    );
    // Normal case with valid data
  } else if (data && !error) {
    console.log(data);
    let posts = [];
    !filter
      ? (posts = data.blogposts)
      : (posts = data.blogposts.filter(
          (post: BlogPost) => post.type === filter
        ));
    return (
      <BlogCategoryContainer>
        {posts.map((blog: BlogPost) => (
          <BlogPreview
            key={blog.id}
            id={blog.id}
            title={blog.title}
            previewImage={blog.previewImage}
            excerpt={blog.excerpt}
            slug={blog.slug}
            type={blog.type}
          />
        ))}
      </BlogCategoryContainer>
    );
  }

  // General error
  else {
    return <div>Whops, failed to load posts :(</div>;
  }
};

export default BlogCategory;
