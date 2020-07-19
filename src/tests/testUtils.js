// Custom render for styled components
// https://testing-library.com/docs/react-testing-library/setup

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/theme';
import { MockedProvider } from '@apollo/client/testing';

const AllTheProviders = ({ children }) => {
  return (
    <MockedProvider mocks={[]}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </MockedProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
