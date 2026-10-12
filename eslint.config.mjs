import js from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'studio/dist/**',
    '.react-email/**',
    '.react-email-temp/**',
    'next-env.d.ts',
  ]),
  js.configs.recommended,
  react.configs.flat.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: 'error',
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*', './*'],
              message: 'Please use alias imports ( @ )',
            },
          ],
        },
      ],
      quotes: ['error', 'single'],
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          // Next.js route segment exports
          allowExportNames: ['metadata', 'viewport', 'generateMetadata'],
        },
      ],
      'react/jsx-sort-props': 'error',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'off',
      'sort-keys': [
        'error',
        'asc',
        { caseSensitive: true, minKeys: 2, natural: false },
      ],
      'spaced-comment': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
])
