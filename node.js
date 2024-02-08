module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
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
		'prettier/prettier': [
			'error',
			{
				'tabWidth': 2,
				'singleQuote': true,
				'semi': true,
				'printWidth': 100,
				'trailingComma': 'none',
				'arrowParens': 'avoid',
				'endOfLine': 'lf',
				'proseWrap': 'preserve',
				'parser': 'typescript'
			},
		],
	},
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
	},
};
