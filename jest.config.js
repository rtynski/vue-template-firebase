module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  collectCoverage: true,
  coverageDirectory: './tests/unit/coverage',
  testMatch: ['**/?(*.)spec.ts'],
};
