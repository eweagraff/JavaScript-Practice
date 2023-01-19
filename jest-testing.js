// Task 1: Code the timesTwo function declaration
function twoTimes(num) {
    return num * 2
}

// Task 2: Export the timesTwo function as a module
module.exports = twoTimes



//Second page- timesTwo.test.js
const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});