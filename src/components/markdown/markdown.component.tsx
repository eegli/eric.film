import { Blogpost } from '@/components/types';
import CodeBlock from './custom-renders/codeblock.component';
import Headings from './custom-renders/headings';
import Image from './custom-renders/image.component';
import Link from './custom-renders/link.component';
import { StyledMD } from './markdown.styles';

export type StyleProps = {
  transparentBg?: boolean;
};

type Props = Pick<Blogpost, 'content'> & StyleProps;

const Markdown: React.FC<Props> = ({ content, transparentBg }) => {
  return (
    <StyledMD
      transparentBg={transparentBg}
      renderers={{
        code: CodeBlock,
        link: Link,
        image: Image,
        heading: Headings,
      }}
      source={content}
    />
  );
};

export default Markdown;
