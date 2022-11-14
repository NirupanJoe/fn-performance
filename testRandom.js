const { range, keys } = require('@laufire/utils/collection');
const { rndBetween, rndValues } = require('@laufire/utils/random');
const { suite, add, cycle, complete } = require('benny');

const itemCount = 100;

const array = range(0, itemCount).map((value, i, array) =>
	rndBetween(1, array.length));

const obj = Object.fromEntries(array.map((val, key) => [key, val]));

const arrayRandomKeys = rndValues(keys(array), itemCount / 2);
const objRandomKeys = arrayRandomKeys.map((key) => String(key));

const suites = [
	{
		title: 'get random value',
		tests:[
			{
				name:'get Random object value by obj keys',
				test: () => objRandomKeys.map((key) => obj[key]),
			},
			{
				name:'get Random array value obj keys',
				test: () => arrayRandomKeys.map((key) => array[key]),
			},
			{
				name:'get Random object value by obj keys',
				test: () => objRandomKeys.map((key) => obj[key]),
			},
			{
				name:'get Random array value obj keys',
				test: () => arrayRandomKeys.map((key) => array[key]),
			},
		],
	},
]

suites.forEach(({ tests, title }) => {
	suite(
		title,

		...tests.map(({ test, name }) =>
			add(name, test)),

		cycle(),
		complete(),
	)
});