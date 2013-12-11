console.log("GLOBAL SCOPE")

var foo = "bar",
  baz = "qux"

function whee() {
  console.log(foo, baz)
}

whee()


console.log("NAMESPACING FTW")

var MyNamespace = {
  foo: "bar",
  baz: "qux",
  whee: function() {
    console.log(this.foo, this.baz)
  }
}

MyNamespace.whee()


console.log("DON'T POLLUTE GLOBAL SCOPE")
;

(function() {
  var foo = "bar",
    baz = "qux"
  
  function whee() {
    console.log(foo, baz)
  }

  whee()
}())