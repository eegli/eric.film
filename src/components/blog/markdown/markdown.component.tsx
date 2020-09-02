import { Blogpost } from '@/src/generated/graphql';
import CodeBlock from '../custom-renders/blog-codeblock.component';
import Image from '../custom-renders/blog-image.component';
import Link from '../custom-renders/blog-link.component';
import { StyledMD } from './markdown.styles';

type Props = Pick<Blogpost, 'content'>;

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <StyledMD
      renderers={{
        code: CodeBlock,
        link: Link,
        image: Image,
      }}
      source={content}
    />
  );
};

export default Markdown;
