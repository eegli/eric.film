import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.pink};
`;

const ErrorMessage: React.FC = ({ children }) => (
  <Container>
    <Message>an unexpected error occured:</Message>
    {children}
  </Container>
);

export default ErrorMessage;
