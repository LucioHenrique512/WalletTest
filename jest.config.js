module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['./src/**'],
  setupFilesAfterEnv: [
    '@testing-library/react-native/extend-expect',
    '<rootDir>/jest.setup.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  modulePathIgnorePatterns: ['mocks'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/config',
    '/src/index.tsx',
  ],
  moduleNameMapper: {'\\.svg': '<rootDir>/__mocks__/svgMock.js'},
};
