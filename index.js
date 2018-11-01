const getBankData = require('./libs/getBankData');

const fromEuro = async (value, currency) => {
	const data = await getBankData();
	return data[currency.toLowerCase()] * value;
}

const toEuro = async (value, currency) => {
	const data = await getBankData();

	return data[currency.toLowerCase()] / value;
}

const convert = async (value, { from, to }) => {
	return Math.round(await fromEuro(await toEuro(value, from), to) * 1000 ) / 1000;
}

module.exports.fromEuro = fromEuro;
module.exports.toEuro = toEuro;
module.exports.convert = convert;
module.exports = convert;