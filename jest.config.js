module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['./src/**'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  modulePathIgnorePatterns: ['mocks'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
