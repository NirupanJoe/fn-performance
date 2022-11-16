const { map } = require("@laufire/utils/collection");
const { isArray } = require('@laufire/utils/reflection');
const { performanceTest , odd, obj, numbers } = require("./bennyExample");

const forinLoop = (collection, cb) => {
	const result = {};
	Object.assign(result, collection )
	for (const key in collection) {

		collection.hasOwnProperty(key) && (result[key] = cb(collection[key], key, collection));

	}
	return result;
};

const newMap = (collection, cb) => 
	isArray(collection) 
			? collection.map(cb)
			: forinLoop(collection, cb);


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
			{
				name: 'forin',
				test: () => forinLoop(obj,odd),
			},
			{
				name: 'new map',
				test: () => newMap(obj,odd),
			},
		]
	}
];

performanceTest(suites)
