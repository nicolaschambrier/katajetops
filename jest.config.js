module.exports = {
    collectCoverageFrom: [
      'src/**/*.ts',
    ],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    setupFilesAfterEnv: [],
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    preset: 'ts-jest',
  }