var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

const array = [1], element =["foo"]

function addElementToBeginningOfArray(array, element) {
return [(element), ...array] // ["foo", 1]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
