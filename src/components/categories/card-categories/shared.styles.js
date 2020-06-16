import styled from 'styled-components';

// Used if text appears on card. Only used for DEV and CLIENT cards
export const BgContainer = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
`;
