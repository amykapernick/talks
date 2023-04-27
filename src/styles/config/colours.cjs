const formatVariables = require('../../../utils/formatVariables.cjs');

const colours = {
	background: '#f7f0eb',
	blue: '#318ce7',
	purple_dark: '#9440a0',
	green: '#64ad66',
	pink: '#cb5699',
	purple: '#7561c1',
	red: '#e53f51',
	yellow: '#ffce03',
	orange: '#f78d2b',
	navy: '#364c93',
	black: '#000000',
	neutral: '@black',
	neutral_10: '#e6e6e6',
	neutral_25: '#bfbfbf',
	neutral_50: '#808080',
	neutral_75: '#404040',
	neutral_90: '#191919',
}

module.exports = formatVariables(colours)