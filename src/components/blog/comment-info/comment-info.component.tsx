import { Container } from './comment-info.styles';

const CommentInfo: React.FC = () => {
  return (
    <Container>
      <p>
        Note: In order to comment as a guest, click the "Name" field and then
        select "I'd rather post as a guest" from the options.
      </p>
    </Container>
  );
};

export default CommentInfo;
