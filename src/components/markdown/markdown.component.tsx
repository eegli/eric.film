import { Blogpost } from '@/components/types';
import CodeBlock from './custom-renders/codeblock.component';
import Image from './custom-renders/image.component';
import Link from './custom-renders/link.component';
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
