import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        projectService: true,
        tsconfigRootDir: '.'
      }
    },
    rules: {
      'no-return-await': 0,
      'no-unused-expressions': 0,
      semi: 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'new-cap': ['error', { capIsNew: false }],
      'no-redeclare': ['error', { builtinGlobals: true }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'keyword-spacing': ['error', { before: true, after: true }],
      'array-bracket-spacing': 'error'
    }
  },
  {
    ignores: [
      'node_modules',
      'dist',
      '*.config.js',
      'babel.config.cjs'
    ]
  },
  {
    rules: {
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false
        }
      ]
    }
  }
);
