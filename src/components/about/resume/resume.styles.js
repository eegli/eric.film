import styled from 'styled-components';
import SmoothCollapse from 'react-smooth-collapse';

export const ResumeContainer = styled.div`
  margin-top: 1rem;
  width: 80%;
  color: ${({ theme }) => theme.baseBg};
  padding: 1rem;
`;

export const ResumeSection = styled.div`
  background-color: ${({ theme }) => theme.textSecondaryColor};
`;

export const ResumeContent = styled(SmoothCollapse)``;
