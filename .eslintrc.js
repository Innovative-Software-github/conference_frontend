module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // начиная с react v17 импортировать React необязательно
    'import/extensions': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-lines': [1, 300],
    'no-useless-catch': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'sort-keys': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-promise-reject-errors': [1],
    'no-nested-ternary': [1],
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'linebreak-style': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'import/no-webpack-loader-syntax': [1],
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: ['dist', 'postcss.config.js'],
};
