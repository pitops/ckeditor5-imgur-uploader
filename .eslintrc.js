const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: '16.8.0-alpha.0'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js')
          }
        }
      }
    }
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        tagName: 'gql',
        projectName: 'app'
      }
    ]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['flowtype', 'react', 'react-hooks', 'jsx-a11y', 'graphql']
}
