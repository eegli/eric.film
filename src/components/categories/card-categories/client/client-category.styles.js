import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* https://forums.tumult.com/t/some-png-files-not-displaying-in-chrome/12783/15 */
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const Client = styled.a`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  & > img {
    max-width: 150px;
  }
`;
