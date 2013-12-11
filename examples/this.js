// named arguments
console.log("----- named arguments -----")

function f(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

f(1, 2, 3)

// other arguments
console.log("----- other arguments -----")

function g(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
  for (var i in arguments) console.log(arguments[i])
}

g(1, 2, 3)
g(1, 2, 3, 4, 5)

// this
console.log("----- this -----")

console.log(this)
this.name = "global scope"
console.log(this)

// call
console.log("----- call -----")

function h(a, b, c) {
  console.log(this)
  console.log(a)
  console.log(b)
  console.log(c)
  for (var i in arguments) console.log(arguments[i])
}

h.call(this, 1, 2, 3)

// apply
console.log("----- apply -----")

h.apply(this, [1, 2, 3])

// override scope!
console.log("----- override scope -----")

var myObject = { foo: "bar" }
h.call(myObject, 1, 2, 3)

// bind
console.log("----- bind -----")

var SomethingSomeoneElseWrote = {
  on: function(what, handler) {
    // e.g., jQuery event handlers
    handler.call(this, "event")
  }
}

var MyNamespace = {
  onClick: function(e) {
    console.log(this)
    console.log("clicked")
  }
}

SomethingSomeoneElseWrote.on("click", MyNamespace.onClick)
SomethingSomeoneElseWrote.on("click", function(e) { MyNamespace.onClick(e) })
SomethingSomeoneElseWrote.on("click", MyNamespace.onClick.bind(MyNamespace))
