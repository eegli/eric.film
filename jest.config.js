module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src/'],

  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  collectCoverageFrom: ['**/*.{tsx,jsx}'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/shared/(.*)': ['<rootDir>/src/components/shared/$1'],
    '@/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@/api/(.*)': ['<rootDir>/src/api/$1'],
    '@/src/(.*)': ['<rootDir>/src/$1'],
  },
};
