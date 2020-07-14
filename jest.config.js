module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/'],
  // coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  collectCoverageFrom: ['**/*.{tsx,jsx}'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/shared/(.*)': ['<rootDir>/src/shared/$1'],
    '@/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@/api/(.*)': ['<rootDir>/src/api/$1'],
    '@/src/(.*)': ['<rootDir>/src/$1'],
  },
};
