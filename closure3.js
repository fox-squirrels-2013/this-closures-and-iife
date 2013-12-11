function f(x) {
  var when = new Date()
  var why = "is this so silly"

  function g() {
    return "" + x + "@" + when
  }

  return g
}

g5 = f(5)
console.log(g5())
setTimeout(function() {
  console.log(g5())
  g6 = f(6)
  console.log(g6())
  setTimeout(function() {
    console.log(g6())
  }, 5000)
}, 2500)
