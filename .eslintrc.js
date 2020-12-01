module.exports = {
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // 추후 .prettierrc.js 파일에서 설정해줄 예정
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
