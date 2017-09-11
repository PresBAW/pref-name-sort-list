# pref-name-sort-list

> Node module that exports a function filtering an array of strings based on a user-provided regex pattern and returning an array of those strings in preferred order - i.e., pattern matches sorted in ascending order of match index.

## Install

```
$ npm install --save pref-name-sort-list
```

## Usage

```js
// Import module
const prefNameSort = require('pref-name-sort-list');

// Get new filtered and sorted array from desired rawArray based on regexp pattern
newArray = prefNameSort(rawArray, pattern);
```

## Example

```js
const prefNameSort = require('pref-name-sort-list');

// Example array of strings we want to query for a given pattern (our query var)
var rawArray = ['lemon', 'apple', 'pear', 'orange', 'banana'];
var query = 'a';

// Filter and sort
var newArray = [];
newArray = prefNameSort(rawArray, query);

// Return should be ['apple', 'banana', 'pear', 'orange']
console.log(newArray)
```

## License

MIT © [Benjamin Wallsten](http://bwallsten.me)