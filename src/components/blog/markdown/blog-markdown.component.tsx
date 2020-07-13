import CodeBlock from '../custom-renders/blog-codeblock.component';
import Image from '../custom-renders/blog-image.component';
import Link from '../custom-renders/blog-link.component';
import { StyledMD } from './blog-markdown.styles';

const BlogMarkdown: React.FC<any> = ({ source }) => {
  return (
    <StyledMD
      renderers={{
        code: CodeBlock,
        link: Link,
        image: Image,
      }}
      source={source}
    />
  );
};

export default BlogMarkdown;
