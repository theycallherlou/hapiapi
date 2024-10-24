export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  roots: ['.'],
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']
};
