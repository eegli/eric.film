// TODO fix
const Paragraph: React.FC = ({ children }: any) => {
  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    children[0].props.src
  ) {
    // rendering media without p wrapper
    return children;
  }

  return <p>{children}</p>;
};

export default Paragraph;
