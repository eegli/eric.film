module.exports = {
  // https://kulshekhar.github.io/ts-jest/user/config/
  preset: 'ts-jest/presets/js-with-ts',

  // Root dir
  roots: ['<rootDir>/src/'],

  // Import 'jest-styled-components';
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],

  // Resolves https://github.com/kulshekhar/ts-jest/issues/937
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },

  // Get coverage for all files in root
  collectCoverageFrom: ['**/*.{tsx,jsx,ts,js}'],

  // Path mapping with tsconfig
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/shared/(.*)': ['<rootDir>/src/components/shared/$1'],
    '@/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@/api/(.*)': ['<rootDir>/src/api/$1'],
    '@/src/(.*)': ['<rootDir>/src/$1'],
  },
};
