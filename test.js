
const converter = require('./index');
const assert = require('assert');

converter(1, {
	from: 'eur',
	to: 'eur'
})
.then(value => {
	assert.deepEqual( value, 1 )
	assert.deepEqual( typeof value, 'number' )
})
.catch(error => {
	throw error;
});

assert.doesNotThrow(() => {
	return converter(1, {
		from: 'eur',
		to: 'eur'
	}).catch(error => {
		throw error;
	})
})

