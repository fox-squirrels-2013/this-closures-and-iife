console.log("FIRST CLASS FUNCTIONS")

function f(x) {
  return x
}

console.log(f(1))

var g = function(x) {
  return x
}

console.log(g(2))

var H = {
  f: function(x) {
    return x
  }
}

console.log(H.f(4))

function i(someFunc) {
  return someFunc(8)
}

console.log(i(H.f))

console.log("NESTED FUNCTIONS")

function j() {
  var a = "hi!"

  function k(y) {
    console.log(y)
  }

  k(a)
}

j()


console.log("SCOPE")

var num0 = 2.5

function apple() {
  var num1 = 5

  function bear() {
    var num2 = 10
    console.log(num0)
    console.log(num1)
    console.log(num2)
  }

  bear()
}

apple()


console.log("FREE VARIABLES")

function q(x) {
  var foo = "bar"

  function r() {
    var baz = "qux"
    console.log(x)
    x = 12
    console.log(x)
    console.log(foo)
  }

  r()
  console.log(x)
}

q(20)




console.log("CLOSURES")

var makeTimer = function() {
  var start = (new Date()).getTime()

  return {
    elapsed: function() {
      var now = (new Date()).getTime()
      return now - start
    }
  }
}

var timer = makeTimer()

console.log(timer.elapsed())
setTimeout(function() {
  console.log(timer.elapsed())
}, 500)
setTimeout(function() {
  console.log(timer.elapsed())
}, 1000)
setTimeout(function() {
  console.log(timer.elapsed())
}, 1500)
