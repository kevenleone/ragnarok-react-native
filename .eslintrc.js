module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "jsx-a11y"
  ],
  rules: {
    'jest/prefer-inline-snapshots': ['off'],
    "react/jsx-filename-extension":
     [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
  },
};
