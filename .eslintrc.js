module.exports = {
    'env': {
        'mocha': true,
        'browser': true
    },
    'ecmaVersion': 6,
    'parser': 'babel-eslint',
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecomaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'no-debugger': 2,
        'no-console': 2,
        'one-var': ['error', 'never'],
        'quotes': ['error', 'single'],
        'quote-props': ['error', 'as-needed', {
            numbers: true
        }],
        'no-var': 2,
        'prefer-const': 2,
        'prefer-template': 2,
        'no-new-wrappers': 2,
        'no-new-object': 2,
        'no-empty-pattern': 2,
        'dot-notation': 2,
        'no-invalid-this': 2,
        'no-this-before-super': 2,
        'prefer-arrow-callback': 2,
        'func-names': 2,
        'no-loop-func': 2,
        'semi': 2,
        'no-extra-semi': 2,
        'semi-spacing': ['error', {
            'before': false,
            'after': true
        }]
    }
};
