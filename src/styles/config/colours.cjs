const formatVariables = require('../../../utils/formatVariables.cjs');

const colours = {
	background: '#f7f0eb',
	blue: '#318ce7',
	purple_bright: '#9440a0',
	green: '#64ad66',
	pink: '#cb5699',
	purple: '#7561c1',
	red: '#e53f51',
	yellow: '#ffce03',
	orange: '#f78d2b',
	navy: '#364c93',
	black: '#080808',
	neutral: '@black',
	red_a11y: '#DC143C',
	blue_a11y: '#0070a8',
	cyan_a11y: '#00acbb',
	yellow_a11y: '#FFD700',
	green_a11y: '#228b22',
	grey: '#4c4d4e',
	white: '#ededed'
}


module.exports = formatVariables(colours)