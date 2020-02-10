module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
    '**/src/components/**/*.spec.[jt]s?(x)'
  ],
  setupFilesAfterEnv: ['./jest.setup.js']
};
