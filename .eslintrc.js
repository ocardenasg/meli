const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
}
