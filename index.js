const Benchmark = require('benchmark');
const { map } = require('@laufire/utils/collection')

const suite = new Benchmark.Suite;
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
	}
];

suites.forEach(({ tests }) => {
	tests.map(({ name, test }) => {
		suite.add(name, test)
		.on('cycle', (event) => {
			console.log(String(event.target));
		}).run({ 'async': true });

	})
})