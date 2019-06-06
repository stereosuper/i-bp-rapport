module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        trailingComma: 'es5',
        singleQuote: true,
        tabWidth: 4,
        bracketSpacing: true,
        arrowParens: 'as-needed',
        'no-console': 'off',
        'no-unused-vars': 1,
        'no-useless-escape': 0,
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            }
        }],
        "vue/max-attributes-per-line": "off",
        'vue/html-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
            }
        ],
        "vue/singleline-html-element-content-newline": 'off',
        'semi': [2, 'always'],
        'no-console': 'off',
        'prettier/prettier': ['error', {
            'semi': true
        }],
        "vue/attribute-hyphenation": ["warn", "never"]
    }
}
