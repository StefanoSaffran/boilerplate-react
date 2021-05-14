module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true, //modificar
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coverageDirectory: '.jest/coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
