/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
	testRunner: 'jest',
	reporters: ['progress', 'clear-text', 'html'],
	coverageAnalysis: 'off',
	jest: {
		config: require('./jest.config'),
	},
	mutate: ['src/**/*.{js,jsx}']
};
