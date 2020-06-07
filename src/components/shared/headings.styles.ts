import styled from 'styled-components';

export const Sh1 = styled.h1<{ landing?: boolean }>`
  text-shadow: 2px 2px 0px ${p => p.theme.textShadowColor};
  letter-spacing: 0.2rem;
  text-align: center;
  display: inline;
  font-size: ${p => (p.landing ? '3rem' : '2.2rem')};
  font-weight: ${p => (p.landing ? 400 : 300)};
`;

export const Sh3 = styled.h3`
  letter-spacing: 0.1rem;
  font-weight: 200;
  line-height: 2rem;
  text-align: center;
  margin: 1rem 0;
`;

export const Sp = styled.p`
  margin: 0;
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  margin: 0 0 1.4rem 0;
`;
