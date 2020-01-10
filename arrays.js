var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
const array = [1]
  [element, ...array] // ["foo", 1]
  array // [1]
}
addElementToBeginningOfArray([1], "foo")
addElementToBeginningOfArray(array, "foo")
