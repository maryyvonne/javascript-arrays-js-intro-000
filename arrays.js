var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
var array = []
  [element, ...array]
  console.log(array)
}
addElementToBeginningOfArray([1], "foo")
