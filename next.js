module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'standard',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'jsx-a11y',
		'@typescript-eslint'
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'selector': 'interface',
				'format': ['PascalCase'],
				'custom': {
					'regex': '^I[A-Z]',
					'match': true
				}
			}
		],
		'no-unused-vars': 'error',
		'camelcase': ['error', { 'properties': 'always' }],
		'prettier/prettier': ['error', {
			'tabWidth': 2,
			'singleQuote': true,
			'semi': true,
			'printWidth': 100,
			'trailingComma': 'none',
			'arrowParens': 'avoid',
			'endOfLine': 'lf',
			'proseWrap': 'preserve',
			'parser': 'typescript'
		}],
		'jsx-a11y/alt-text': [
			'warn',
			{
				elements: ['img'],
				img: ['Image'],
			},
		],
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'react/no-unknown-property': 'error',
		'prefer-arrow-callback': [
			'error',
			{ 'allowNamedFunctions': true, 'allowUnboundThis': true }
		],
		'react/function-component-definition': [
			'error',
			{
				'namedComponents': 'arrow-function',
				'unnamedComponents': 'arrow-function'
			}
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
	}
};
