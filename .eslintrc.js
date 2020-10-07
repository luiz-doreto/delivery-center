module.exports = {
    env: {
        es6: true,
        jest: true,
        browser: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".js", ".jsx"] },
        ],
        "import/prefer-default-export": "off",
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "react/jsx-one-expression-per-line": "off",
        "global-require": "off",
        "react-native/no-raw-text": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        camelcase: "off",
        "no-console": ["error", { allow: ["tron"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "no-nested-ternary": "off",
        "no-use-before-define": "off",
    },
};
