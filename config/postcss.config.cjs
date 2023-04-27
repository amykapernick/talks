const stylelint = require(`stylelint`);
const nesting = require(`postcss-nesting`);
const advancedCSS = require('postcss-advanced-variables')
const path = require('path');

const colours = require('../src/styles/config/colours.cjs')
const variables = require('../src/styles/config/variables.cjs');

console.log({ variables, colours })

module.exports = {
	plugins: [
		advancedCSS({
			disable: '@import',
			variables: {
				...colours,
				...variables
			},
		}),
		nesting({
			noIsPseudoSelector: true
		}),
		// stylelint({
		// 	configFile: `./config/.stylelint.config.cjs`,
		// 	quiet: true
		// })
	],
}; 