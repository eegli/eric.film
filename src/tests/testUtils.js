// Custom render for styled components
// https://testing-library.com/docs/react-testing-library/setup
import { darkTheme } from '@/styles/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };

// // Custom render for styled components
// // https://testing-library.com/docs/react-testing-library/setup
// import { darkTheme } from '@/styles/theme';
// import { MockedProvider } from '@apollo/client/testing';
// import { render } from '@testing-library/react';
// import { ThemeProvider } from 'styled-components';

// const AllProviders = (mockData, { children }) => {
//   return (
//     <MockedProvider mocks={mockData}>
//       <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
//     </MockedProvider>
//   );
// };

// const customRender = (ui, options) =>
//   render(ui, { wrapper: AllProviders, ...options });

// // re-export everything
// export * from '@testing-library/react';
// // override render method
// export { customRender as render };
