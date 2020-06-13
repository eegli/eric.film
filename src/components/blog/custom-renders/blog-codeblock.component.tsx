import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  value: string;
  language: string;
};

const CodeBlock: React.FC<Props> = ({ value, language }) => {
  if (!language) language = 'javascript';
  return (
    <SyntaxHighlighter
      customStyle={{ borderRadius: '10px' }}
      language={language}
      style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
