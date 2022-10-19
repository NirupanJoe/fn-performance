const { suite, add, cycle, complete, save } = require('benny');
const { map } = require('@laufire/utils/collection')

const numbers = [1, 2, 3, 4];

const suites = [
	{
	  title: 'Array map',
	  tests: [
			{
				name: 'js-utils map',
				test: () => map(numbers, (num) => num + 1)
			},
			{
				name: 'native map',
				test: () => numbers.map((num) => num + 1),
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
