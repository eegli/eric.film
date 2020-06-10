import React from 'react';
import {
  CustomLinkContainer,
  CustomLinkText,
  StyledIcon,
} from './custom-link.styles';

type Props = {
  children: string;
  href: string;
};

const CustomLink: React.FC<Props> = ({ children, href }) => {
  return (
    <CustomLinkContainer href={href} passHref>
      <CustomLinkText>{children}</CustomLinkText>
    </CustomLinkContainer>
  );
};

export default CustomLink;
