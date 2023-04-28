const stylelint = require(`stylelint`);
const nesting = require(`postcss-nesting`);
const advancedCSS = require('postcss-advanced-variables')
const rgbahex = require('postcss-hexrgba')

const colours = require('../src/styles/config/colours.cjs')
const variables = require('../src/styles/config/variables.cjs');


module.exports = {
	plugins: [
		advancedCSS({
			disable: '@import',
			variables: {
				...colours,
				...variables
			},
		}),
		rgbahex,
		nesting({
			noIsPseudoSelector: true
		}),
		stylelint({
			configFile: `./config/.stylelint.config.cjs`,
			quiet: true
		})
	],
}; 