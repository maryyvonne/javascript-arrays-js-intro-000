var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

const array = [1], element =["foo"]

function addElementToBeginningOfArray(array, element) {

  [(element), ...array] // ["foo", 1]
  array // [1]
}
