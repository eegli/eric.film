/// <reference types="next" />
/// <reference types="next/types/global" />

// Resolves https://github.com/storybookjs/storybook/issues/2883
declare module '*.md' {
  const value: string;
  export default value;
}
