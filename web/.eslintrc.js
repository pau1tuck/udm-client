module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2023, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        // "airbnb-typescript-prettier",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:react-hooks/recommended", // Uses the recommended rules from @eslint-plugin-react-hooks
        // "plugin:jsx-a11y/recommended",
        "next/core-web-vitals",
        "plugin:tailwindcss/recommended",
        // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ["import", "sort-keys-fix", "simple-import-sort"],
    rules: {
        "import/prefer-default-export": [0], // off
        "no-console": [1], // warn
        "max-classes-per-file": [2], // error
        "class-methods-use-this": [2],
        "@typescript-eslint/no-explicit-any": [
            "warn",
            { ignoreRestArgs: true },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],
        "tailwindcss/classnames-order": [0],
        "tailwindcss/no-custom-classname": [
            "warn",
            {
                whitelist: [
                    "font-heading",
                    "font-body",
                    "font-display",
                    "font-cursive",
                    "text-primary",
                    "text-secondary",
                    "text-tertiary",
                    "bg-customGray",
                    "animate__bounceIn",
                ],
            },
        ],
        "react/function-component-definition": [0],
        "react/require-default-props": [0],
        "react/boolean-prop-naming": [0],
        "react/button-has-type": [1],
        "react/default-props-match-prop-types": [2],
        "react/destructuring-assignment": [2],
        "react/display-name": [0],
        "react/forbid-component-props": [0],
        "react/forbid-dom-props": [0],
        "react/forbid-elements": [0],
        "react/forbid-foreign-prop-types": [0],
        "react/forbid-prop-types": [0],
        "react/no-access-state-in-setstate": [0],
        "react/no-adjacent-inline-elements": [0],
        "react/no-array-index-key": [0],
        "react/no-children-prop": [0],
        "react/no-danger": [0],
        "react/no-danger-with-children": [0],
        "react/no-deprecated": [1],
        "react/no-did-mount-set-state": [0],
        "react/no-did-update-set-state": [0],
        "react/no-direct-mutation-state": [0],
        "react/no-find-dom-node": [0],
        "react/no-is-mounted": [0],
        "react/no-multi-comp": [0],
        "react/no-redundant-should-component-update": [0],
        "react/no-render-return-value": [0],
        "react/no-set-state": [0],
        "react/no-string-refs": [0],
        "react/no-this-in-sfc": [0],
        "react/no-typos": [0],
        "react/no-unescaped-entities": [0],
        "react/no-unknown-property": [0],
        "react/no-unsafe": [0],
        "react/no-unused-prop-types": [0],
        "react/no-unused-state": [0],
        "react/no-will-update-set-state": [0],
        "react/prefer-es6-class": [0],
        "react/prefer-read-only-props": [0],
        "react/prefer-stateless-function": [0],
        "react/prop-types": [0],
        "react/react-in-jsx-scope": [0],
        "react/require-optimization": [0],
        "react/require-render-return": [0],
        "react/self-closing-comp": [0],
        "react/sort-comp": [0],
        "react/state-in-constructor": [0],
        "react/static-property-placement": [0],
        "react/style-prop-object": [0],
        "react/void-dom-elements-no-children": [0],
    },
};
