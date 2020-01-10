var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
  var x = array.unshift(element); return x;
}
addElementToBeginningOfArray([1], "foo")
