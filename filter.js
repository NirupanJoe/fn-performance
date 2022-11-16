const { filter } = require("@laufire/utils/collection");
const { performanceTest , odd, numbers } = require("./bennyExample");

const loopFilter = (data, cb) => {
	let index = 0;
	let result = [];

	while (index < data.length) {
		
		cb(data[index], index, data)
		&& result.push(data[index]);
		
		index++;
	}

	return result;
};

const suites = [
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
				test: () => loopFilter(numbers, odd),
			},
		]
	},
];

performanceTest(suites);
