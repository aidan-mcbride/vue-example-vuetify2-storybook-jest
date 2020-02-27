module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
    '**/src/**/*.spec.[jt]s?(x)'
  ],
  collectCoverageFrom: ['**/src/*.{js,jsx}'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1'
  }
};
