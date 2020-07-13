import Link from 'next/link';
import { CustomLinkText } from './custom-link.styles';

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
