module.exports = {
  // Root dir
  roots: ['<rootDir>/src/'],

  // Import 'jest-styled-components';
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  // Get coverage for all files in root except for styles files
  collectCoverageFrom: ['**/*.{tsx,jsx,ts,js}', '!**/?(*.)+(styles).[jt]s'],

  // Path mapping with tsconfig
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/shared/(.*)': ['<rootDir>/src/components/shared/$1'],
    '@/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@/api/(.*)': ['<rootDir>/src/api/$1'],
    '@/src/(.*)': ['<rootDir>/src/$1'],
  },
  // Neccesary for Jest 24+
  // https://github.com/styled-components/jest-styled-components#enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
