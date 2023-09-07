const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
		},
	},
	overrides: [
		{
			files: ['*.spec.@(ts|js)'],
			extends: ['plugin:jest/recommended', 'plugin:jest/style'],
		},
	],
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	plugins: ['prettier', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'prettier/prettier': WARNING,
		'eol-last': OFF,
		strict: [ERROR, 'never'],
		'no-mixed-requires': OFF,
		'no-underscore-dangle': OFF,
		'new-cap': OFF,
		camelcase: OFF,
		'no-console': OFF,
		'no-useless-escape': WARNING,
		'no-unused-vars': OFF,
		'@typescript-eslint/no-unused-vars': [
			ERROR,
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'import/first': WARNING,
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
				],
				alphabetize: { order: 'asc' },
				'newlines-between': 'always',
			},
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'consistent-return': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-unreachable': 'error',
	},
	ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even if it doesn't contain any source code, like `@types/unist`
			},
		},
	},
};
