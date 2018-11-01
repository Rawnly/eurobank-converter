# Currency Converter
*Dead simple* currency converter.

> API provided by the [**European Bank**][eurobank].

## Usage
```js
	const converter = require('eurobank-converter');

	(async () => {
		const value = await converter(100, { from: 'eur', to: 'usd' });

		console.log(`100€ = ${Math.round(value)}$`)
	})()
```

[eurobank]: https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html