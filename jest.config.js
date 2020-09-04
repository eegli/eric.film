module.exports = {
  // Root dir
  roots: ['<rootDir>/src/'],

  // Import 'jest-styled-components';
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  // Get coverage for all files in root except for styles files
  // js and jsx files can also be tested but would need to be added
  // in the regex below
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{tsx,ts}', '!**/?(*.)+(styles).[jt]s'],

  // Path mapping with tsconfig
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/shared/(.*)': ['<rootDir>/src/components/shared/$1'],
    '@/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@/src/(.*)': ['<rootDir>/src/$1'],
  },
  // Neccesary for Jest 24+
  // https://github.com/styled-components/jest-styled-components#enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],

  // Ignore generated types and type file
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/generated/',
    '<rootDir>/src/components/types',
  ],
};
