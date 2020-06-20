import React from 'react';
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
      // customStyle={{ borderRadius: '10px' }}
      language={language}
      style={xonokai}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
