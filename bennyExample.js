const { suite, add, cycle, complete, save } = require('benny');
const { map, filter, find, reduce, range } = require('@laufire/utils/collection');
const { rndBetween } = require('@laufire/utils/random');

const numbers = range(0, 100).map((value, i, array) =>
rndBetween(1, array.length));

const odd = (value) => value % 2;

const loopFind = (data) => {
		let index = 0;

		while (index < data.length && !odd(data[index], index, data)) {

			index++;
		}

		return data[index];
	};

const loopFilter = (data) => {
	let index = 0;
	let result = [];

	while (index < data.length) {
		index++;

		odd(data[index], index, data)
			&& result.push(data[index]);
	}

	return result;
};

const suites = [
	{
	  title: 'Array map',
	  tests: [
			{
				name: 'js-utils map',
				test: () => map(numbers, odd)
			},
			{
				name: 'native map',
				test: () => numbers.map(odd),
			},
		]
	},
	{
		title: 'Array filter',
		tests: [
			{
				name: 'js-utils filter',
				test: () => filter(numbers, odd)
			},
			{
				name: 'native filter',
				test: () => numbers.filter(odd),
			},
			{
				name: 'loop filter',
				test: () => loopFilter(numbers),
			},
		]
	},
	{
		title: 'Array find',
		tests: [
			{
				name: 'js-utils find',
				test: () => find(numbers, odd)
			},
			{
				name: 'native find',
				test: () => numbers.find(odd),
			},
			{
				name: 'loop find',
				test: () => loopFind(numbers),
			},
		]
	},
	{
		title: 'Array reduce',
		tests: [
			{
				name: 'js-utils reduce',
				test: () => reduce(numbers, (acc, curr) => acc.concat(curr + 2), []),
			},
			{
				name: 'native reduce',
				test: () => numbers.reduce((acc, curr) => acc.concat(curr + 2), []),
			},
		]
	},
];

suites.forEach(({ tests, title }) => {
	suite(
		title,

		...tests.map(({ test, name }) =>
			add(name, test)),

		cycle(),
		complete(),
		save({ file: title, version: '1.0.0' }),
		save({ file: title, format: 'chart.html' }),
	)
});
