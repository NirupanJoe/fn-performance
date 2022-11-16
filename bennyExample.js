const { suite, add, cycle, complete } = require('benny');
const { range } = require('@laufire/utils/collection');
const { rndBetween, rndString } = require('@laufire/utils/random');

const obj = range(0, 100).reduce(( acc, value, i, array) =>
	({ ...acc, [rndString()]: rndBetween(1, array.length) }), {}
);

const numbers = range(0, 100).map((value, i, array) =>
rndBetween(1, array.length));

const odd = (value) => value % 2;

const performanceTest = (suites) => {
	suites.forEach(({ tests, title }) => {
		suite(
			title,
	
			...tests.map(({ test, name }) =>
				add(name, test)),
	
			cycle(),
			complete(),
		)
	});
};

module.exports = { performanceTest, odd, obj, numbers }
