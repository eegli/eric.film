import styled from 'styled-components';

type H1Props = {
  landing?: boolean;
};

export const Sh1 = styled.h1<H1Props>`
  text-shadow: 2px 2px 0px ${({ theme }) => theme.colors.pinkPrimary};
  letter-spacing: 0.2rem;
  text-align: center;
  display: inline;
  font-size: ${({ landing }) => (landing ? '3rem' : '2.2rem')};
  font-weight: 400;
  margin: 1rem 0 0.5rem 0;
`;

export const Sh2 = styled.h2`
  letter-spacing: 0.1rem;
  font-weight: 400;
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  margin: 0 0 1.4rem 0;
`;
