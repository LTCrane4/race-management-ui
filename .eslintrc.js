module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: 'eslint-config-airbnb-base',
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    globals: {
      document: true,
      JSX: true,
      window: true,
    },
    parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'object-curly-newline': 'off',
      indent: ['error', 2],
      'import/extensions': 'off',
      'jsx-quotes': ['error', 'prefer-double'],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  }],
};
