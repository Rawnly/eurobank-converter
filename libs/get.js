const https = require('https');

module.exports = (url) => {	
	return new Promise((resolve, reject) => https.get(url, response => {
			let r = ""
			response.on('data', data => {
				r+=data
			})

			resolve(r);
		}).on('error', err => reject(err))
	)
}