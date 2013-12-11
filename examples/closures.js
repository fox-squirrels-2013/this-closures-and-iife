// first-class functions

function f(x) {
  return x
}

var g = function(x) {
  return x
}

console.log(f(1))
console.log(g(2))

var h = function(someFunc) {
  return someFunc
}
var i = h(g)

console.log(i(4))

// nested functions

function j() {
  var k = function(x) {
    return x
  }
  return k
}

console.log(j()(8))

// scope

var foo = "foo"
function l() {
  var bar = "bar"

  function m() {
    var baz = "baz"
    console.log("in m", foo)
    console.log("in m", bar)
    console.log("in m", baz)
  }

  console.log("in l", foo)
  console.log("in l", bar)
  m()
}

l()

// free variables

function n(x) {
  function o(y) {
    console.log(x + y)
  }
  o(16)
}

n(32)

// closures: functions that retain reference to free variables

function makeVehicle(numWheels, color) {

  var _numWheels = numWheels
  
  var my = {
    color: color,
    getNumWheels: function() { return _numWheels }, // closure
    describe: function() { return "" + this.color + " vehicle with " + _numWheels + " wheels" } // closure
  }

  return my
}

var silverCar = makeVehicle(4, "silver")
console.log(silverCar.color)
console.log(silverCar.getNumWheels())
console.log(silverCar.describe())
silverCar.color = "bright silver"
silverCar._numWheels = 6
console.log(silverCar.describe())
silverCar.numWheels = 6
console.log(silverCar.describe())
