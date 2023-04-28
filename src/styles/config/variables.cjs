const formatVariables = require('../../../utils/formatVariables.cjs');

const variables = {
	font_code: `'Source Code Pro', monospace`,
	font_main: `Montserrat, Lato, Arial, sans-serif`,
	font_heading: `'DM Serif Display', Quicksand, Arial, sans-serif`,
	header_height: '5vh',
	footer_height: '5vh',
	base_font: '8vh',
}

module.exports = formatVariables(variables)