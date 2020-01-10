var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

const array = [], element =[]

function addElementToBeginningOfArray(array, element) {

  [(element), ...array] // ["foo", 1]
  array // [1]
}
addElementToBeginningOfArray([1], "foo")
addElementToBeginningOfArray(array, "foo")
