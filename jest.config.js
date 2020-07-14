module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/'],
  // coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
