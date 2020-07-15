import { render } from '@testing-library/react';
import Resume from '../resume.component';
// import { ToggleContainer } from '../resume.styles';

describe('About - resume', () => {
  const { asFragment } = render(<Resume />, {});
  expect(asFragment()).toMatchSnapshot();
});
