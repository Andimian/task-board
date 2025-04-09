import js           from '@eslint/js'
import globals      from 'globals'
import reactHooks   from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint     from 'typescript-eslint'

export default tseslint.config(
    {ignores: ['dist']},
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            "airbnb",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended"
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        "parserOptions": {
            "ecmaVersion": 2021,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },

        // plugins: {
        //     'react-hooks': reactHooks,
        //     'react-refresh': reactRefresh,
        // },
        "plugins": ["react", "react-hooks", "jsx-a11y", "import"],

        rules: {
            ...reactHooks.configs.recommended.rules,
            "react/prop-types": "off",  // Если не используешь PropTypes в проекте
            "react/react-in-jsx-scope": "off", // Для React 17+ можно отключить
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
        },
    },
)
