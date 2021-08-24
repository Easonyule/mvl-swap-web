module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/semi': ['off', null],
    eqeqeq: ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        quoteProps: 'as-needed',
        semi: true,
        useTabs: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        printWidth: 130,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
  },
};
