import tsEslint from 'typescript-eslint'
import epSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

export default [
  ...tsEslint.configs.strictTypeChecked,
  ...epSvelte.configs['flat/recommended'],
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: true,
        programs: false,
        extraFileExtensions: ['.svelte']
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser,
      }
    },
  },
]
