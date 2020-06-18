import styled from 'styled-components';

const Container = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  line-height: 1.5rem;
  text-align: justify;
`;

const Text: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Text;
