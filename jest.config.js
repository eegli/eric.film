module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/'],
  // coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
