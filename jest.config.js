/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
  maxWorkers: 1,
};
