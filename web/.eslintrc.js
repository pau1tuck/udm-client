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
        // "plugin:@typescript-eslint/recommended", Uses the recommended rules from the @typescript-eslint/eslint-plugin
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
        //"@typescript/no-unused-vars": [1],
        //"@typescript/no-explicit-any": [1],
        "react/function-component-definition": [0],
    },
};
