console.log(this)
this.name = "global scope"
console.log(this)

console.log("NAMED ARGUMENTS")

function f(a, b, c) {
  console.log(this) // weird!
  console.log(a)
  console.log(b)
  console.log(c)
}

f(1, 2, 3)


console.log("UNNAMED ARGUMENTS")

function g(a, b, c) {
  for (var i in arguments) console.log(arguments[i])
}

g(1, 2, 3)
g(1, 2, 3, 4, 5)

console.log("THIS KEYWORD")

console.log(this)
var SomeObj = {
  logThis: function() {
    console.log(this)
  }
}

SomeObj.logThis()

console.log("CALL AND APPLY, OVERRIDING SCOPE")

function h(a, b, c) {
  console.log(this)
  console.log(a)
  console.log(b)
  console.log(c)
}

h(1, 2, 3)
h.call(this, 1, 2, 3)
h.call({ jeffrey:"was here" }, 1, 2, 3)
h.call({ jeffrey:"was here" })

h.apply(this, [1, 2, 3])
h.apply({ jeffrey:"was here" }, [1, 2, 3])
h.apply({ jeffrey:"was here" })


console.log("THIS 'SAFETY'")

var SomeoneElseWroteThis = {
  on: function(what, handler) {
    handler.call(SomeoneElseWroteThis, "event")
  }
}

var MyNamespace = {
  onClick: function(e) {
    console.log(this)
    console.log("clicked")
  }
}

SomeoneElseWroteThis.on("click", MyNamespace.onClick)
SomeoneElseWroteThis.on("click", function(e) { 
  MyNamespace.onClick(e)
})
SomeoneElseWroteThis.on("click", MyNamespace.onClick.bind(MyNamespace))
