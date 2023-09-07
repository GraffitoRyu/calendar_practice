module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    'import',
    'react',
    'react-refresh',
    'prettier',
    '@typescript-eslint',
    'jsx-a11y',
  ],
  extends: [
    "eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint-recommended",
    "prettier"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true }
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
}
