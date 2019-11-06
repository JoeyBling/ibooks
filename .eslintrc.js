module.exports = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react',
    'babel'
  ],
  /*  'off': 表示关掉，
      'warn': 表示发出警告
      'error': 表示发出错误 */
  /* 对应的数字是 */
  /*  0：表示关掉
      1：表示发出警告
      2：表示发出错误 */
  rules: {
    'curly': [2, 'all'],
    'func-names': 0,
    'prefer-const': 0,
    'arrow-body-style': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': [2, {
      'code': 120
    }],
    'consistent-return': 0,
    'comma-dangle': 0,
    'vue/no-parsing-error': ['warn', {
      'invalid-first-character-of-tag-name': false,
      'x-invalid-end-tag': false
    }],
  }
}
