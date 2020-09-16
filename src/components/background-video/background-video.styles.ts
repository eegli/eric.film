import styled, { css } from 'styled-components';
import { Props } from './background-video.component';

type StyleProps = Pick<Props, 'dynamicViewport'>;

/* What is meant with dynamicViewPort? */
// There is a known "issue" due to mobile browser address bars. If you set
// height: 100vh and width: 100vh, the dynamic address bar is respected and your
// element will extend below the actual viewport.

/* A way around it */
// It's possible to set height: 100% on the outer element so that it takes up
// all the space. If this element is the html body, it will take up all the
// AVAILABLE screen height (height of inner window). That's why the height of
// the body element is set to 100% in the global styles.

/* When to use dynamicViewPort */
// Use it when the component is a direct child of body or if there are no
// heights defined in any DOM node between your component and body. In order for
// this to work, the component is, in the best case, a direct child of body.

/* Example usage */
/* 
// Set height for outer elements
html, body {
    height: 100%;
}

// HTML
<body>
    <div class="video">
    </div>
</body>

// CSS
.video {
    height: 100%;
}
*/

const dynamicViewPortStyles = css`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const isDynamicViewport = (
  props: StyleProps,
): typeof dynamicViewPortStyles | undefined => {
  if (props.dynamicViewport) return dynamicViewPortStyles;
};

export const Video = styled.video<StyleProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  object-fit: cover;
  /* Override previous styles */
  ${isDynamicViewport}
`;
