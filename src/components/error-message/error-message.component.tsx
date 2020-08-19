import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem;
  text-align: center;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.pink};
`;

const Info = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ErrorMessage: React.FC = ({ children }) => (
  <Container>
    <Info>An unexpected error occured:</Info>
    <Message>{children}</Message>
  </Container>
);

export default ErrorMessage;
