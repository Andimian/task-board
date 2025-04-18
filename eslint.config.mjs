// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import { configs as tsConfigs } from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import * as pluginHooks from 'eslint-plugin-react-hooks';
import pluginRefresh from 'eslint-plugin-react-refresh';
import pluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['dist', 'coverage'] }, // Применяется глобально
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: { version: 'detect' },
      // https://github.com/import-js/eslint-import-resolver-typescript#configuration
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginRefresh.configs.recommended,
  // Для react используется flat конфигурация
  pluginReact.configs.flat.recommended,
  // Плагин import для flat config
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  // Добавляем конфигурации из typescript-eslint (они уже являются массивом объектов, поэтому используем спред)
  ...tsConfigs.recommended,
  {
    plugins: {
      'react-hooks': pluginHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'semi': ['error', 'always'],
      'no-trailing-spaces': 'error', // пробелы в конце строк
      'no-multi-spaces': 'error', // множественные пробелы внутри строки
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'jsx-quotes': ['error', 'prefer-double'],
      ...pluginHooks.configs.recommended.rules,
    },
  },
];
