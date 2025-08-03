// Import ESLint's built-in recommended rules for JavaScript
import js from "@eslint/js"

// Import predefined global variables for different environments (like browser, node)
import globals from "globals"

// Import Prettier config to disable ESLint rules that conflict with Prettier formatting
import prettier from "eslint-config-prettier"

// Exporting an array of ESLint config objects (flat config format)
/** @type {import('eslint').Linter.Config[]} */
export default [
    // Use ESLint's recommended base configuration for JS
    js.configs.recommended,

    // Custom configuration applied to JS/TS/JSX/TSX files
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Match all JS/TS files

        languageOptions: {
            // Enable global variables for both browser and Node.js environments
            globals: { ...globals.browser, ...globals.node },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Enable parsing of JSX syntax (used in React)
                }
            }
        }
    },

    // Apply Prettier config to disable conflicting formatting rules
    prettier
]
