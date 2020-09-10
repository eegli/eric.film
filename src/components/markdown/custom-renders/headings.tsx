type HeadingResolverProps = {
  level: number;
};

const Headings: React.FC<HeadingResolverProps> = ({ level, children }) => {
  switch (level) {
    case 1:
      return (
        <h1>
          <span>{children}</span>
        </h1>
      );
    case 2:
      return (
        <h2>
          <span>{children}</span>
        </h2>
      );
    case 3:
      return (
        <h3>
          <span>{children}</span>
        </h3>
      );
    case 4:
      return (
        <h4>
          <span>{children}</span>
        </h4>
      );
    case 6:
      return (
        <h5>
          <span>{children}</span>
        </h5>
      );
    case 5:
      return (
        <h6>
          <span>{children}</span>
        </h6>
      );

    default:
      return (
        <h6>
          <span>{children}</span>
        </h6>
      );
  }
};

export default Headings;
