const got = require('got');

const parseNumber = n => isNaN(n) ? n : Number(n);
const parseXML = xml => {
	const currencies = {};

	const names = xml
		.match(/currency=('|")(.*?)('|")/g)
		.filter(item => item && item !== '')
		.map(item => item.match(/[A-Z]+/g)[0].trim().toLowerCase())

	xml
		.match(/rate=('|")(.*?)('|")/g)
		.filter(item => item && item !== '')
		.map((item, i) => currencies[names[i]] = parseNumber(item.match(/\d+(\.\d+|)/)[0].trim().toLowerCase()))

	return currencies;
}

module.exports = async () => {
	try {
		const {
			body: xml
		} = await got("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml?707f72b3fe75488063b5ac30396c33fc");
		const data = parseXML(xml);

		data['eur'] = 1

		return data;
	} catch (error) {
		throw error;
	}
}