/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'camelcase': 'off',
    'dot-notation': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'vue/valid-v-slot': ['error', {
      'allowModifiers': true
    }]
  }
}
