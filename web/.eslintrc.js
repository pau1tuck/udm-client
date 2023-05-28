module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        project: "./tsconfig.json",
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
        "airbnb-typescript-prettier",
        "plugin:react/recommended",
        //"plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:react-hooks/recommended", // Uses the recommended rules from @eslint-plugin-react-hooks
        "plugin:jsx-a11y/recommended",
        "next",
        "next/babel",
        "next/core-web-vitals",
        "plugin:tailwindcss/recommended",
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ["import", "sort-keys-fix", "simple-import-sort"],
    rules: {
        "no-console": [0],
        "import/prefer-default-export": "off",
        "max-classes-per-file": [1],
        "class-methods-use-this": [1],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
    },
};
