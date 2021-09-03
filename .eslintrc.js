module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'typescript',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    semi: 'error',
    'react/display-name': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@(screens|routes)|src/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.mock.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  ignorePatterns: ['*.js'],
};
