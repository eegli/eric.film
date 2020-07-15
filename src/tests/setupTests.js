/**
 *
 * When we run our test command, Jest generates a snapshot containing a few class names (which we didn't set) and no information about the style rules. Consequently, changing styles results in the following diff, where Jest can only tell us that the class names are changed. Here's where Jest Styled Components comes to rescue.
 *
 * https://github.com/styled-components/jest-styled-components
 *
 */

import 'jest-styled-components';
