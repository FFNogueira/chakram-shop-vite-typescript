module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'default-param-last': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
