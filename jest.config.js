export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  roots: ['.'],
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']
};
