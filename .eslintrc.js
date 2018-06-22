module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
  },
  rules: {
    'no-extra-parens': 'error',
    'no-template-curly-in-string': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': 'error',
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
    'array-callback-return': 'error',
    complexity: ['error', { max: 5 }],
    'consistent-return': 'error',
    curly: 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-new-func': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'array-bracket-spacing': 'error',
    'brace-style': 'error',
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2],
    'key-spacing': 'error',
    'max-len': ['error', { code: 120, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    'new-cap': ['error', { properties: false }],
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    quotes: ['error', 'single'],
    semi: 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'template-tag-spacing': ['error', 'always'],
  },
};
