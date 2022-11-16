const { reduce } = require("@laufire/utils/collection");
const { numbers, performanceTest } = require("./bennyExample");

const suites = [
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

performanceTest(suites);
