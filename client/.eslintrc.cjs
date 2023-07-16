/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    "@typescript-eslint",
    "react-hooks",
    "eslint-plugin-import-helpers"
],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/react-in-jsx-scope": "off",
    "import-helpers/order-imports": [
      "warn",
      {
          "newlinesBetween": "always",
          "groups": [
              "module",
              "/^@shared/",
              ["parent", "sibling", "index"]
          ],
          "alphabetize": { "order": "asc", "ignoreCase": true }
      }
  ]
  }
}
