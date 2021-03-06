import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// or {tomorrow}
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  value: string;
  language: string;
};

const CodeBlock: React.FC<Props> = ({ value, language }) => {
  if (!language) language = 'jsx';
  return (
    <SyntaxHighlighter
      customStyle={{ border: 'none', borderRadius: 0 }}
      language={language}
      style={xonokai}
      showInlineLineNumbers
      showLineNumbers>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
