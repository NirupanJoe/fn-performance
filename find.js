const { find } = require("@laufire/utils/collection");
const { odd, performanceTest, numbers } = require("./bennyExample");

const loopFind = (data) => {
	let index = 0;

	while (index < data.length && !odd(data[index], index, data)) {

		index++;
	}

	return data[index];
};

const newFind = (collection, predicate) => {
let index = 0;

while(index < collection.length && !predicate(
	collection[index], index, collection
))
	index++;

return collection[index];
};

const suites = [
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
				test: () => loopFind(numbers, odd),
			},
			{
				name: 'new find',
				test: () => newFind(numbers, odd),
			},
		]
	},
]

performanceTest(suites);