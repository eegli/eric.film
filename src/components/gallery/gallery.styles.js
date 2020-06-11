import styled from 'styled-components';

export const GalleryContainer = styled.div`
  padding: 0 0.2px;
`;

export const ImageRow = styled.ul`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
`;

export const ImageCol = styled.li`
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  list-style-type: none;
  padding: 0 0.2rem;
  @media screen and (max-width: 800px) {
    & {
      -ms-flex: 50%;
      flex: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    & {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
`;

export const Img = styled.img`
  margin-top: 0.4rem;
  vertical-align: middle;
  width: 100%;
`;
