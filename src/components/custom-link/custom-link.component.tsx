import React from 'react';
import { CustomLinkText } from './custom-link.styles';

import Link from 'next/link';

type Props = {
  children: string;
  href: string;
};

const CustomLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <CustomLinkText>{children}</CustomLinkText>
    </Link>
  );
};

export default CustomLink;
