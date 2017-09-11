var escapeRegExp = require('escape-string-regexp')

module.export = function(rawArray, query) { // extend to all functions
	// create pure functions to perform desired operations
	// match query with country name
	function regExpFilter(regExpObj, target) {
		return regExpObj.test(target);
	}

	// get match indexes
	function getIndex(regExpObj, target) {
		substr = regExpObj.exec(target)
		return [substr.index, target]
	}

	// sort matches
	function sortList(index) {
		return function(a, b) {
			return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1))
		}
	}

	// reduce sorted list back to array of strings (from array of lists)
	function reduceSorted(target) {
		return target[1]
	}

	var sortedArray = []
	if (query) {
	    const match = new RegExp(escapeRegExp(query), 'i') // 'i' param keeps special characters
		sortedArray = rawArray
			.filter(regExpFilter.bind(null, match))
			.map(getIndex.bind(null, match))
			.sort(sortList(0))
			.map(reduceSorted)
	}

	return sortedArray
}