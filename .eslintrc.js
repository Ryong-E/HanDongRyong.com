module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  plugin: ['@typescript-eslint/eslint-plugin'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  ignorePattern: ['.eslintrc.js', 'public', 'node_modules', '.cache'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'no-unused-vars': 'error',
  },
};
