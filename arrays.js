var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

const array = [1], element =["foo"]

function addElementToBeginningOfArray(array, element) {
return [(element), ...array] // ["foo", 1]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
