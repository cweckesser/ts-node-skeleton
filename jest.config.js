module.exports = {
	rootDir: '.',
	moduleFileExtensions: ['js', 'json', 'ts'],
	testRegex: './src/.*\\.spec\\.ts$',
	testPathIgnorePatterns: [],
	testEnvironment: 'node',
	preset: 'ts-jest',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
	collectCoverageFrom: [
		// Include rules
		'./src/**/*.(t|j)s',
		// Exclude rules
		'!./src/**/*.spec.ts',
	],
	coverageDirectory: './coverage',
	coverageReporters: ['json', 'lcov'],
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 75,
			lines: 75,
			statements: 75,
		},
	},
};
