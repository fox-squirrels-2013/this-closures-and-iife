// global scope

thisIsAGlobal = 10
var soIsThis = 20
console.log(this)
console.log(thisIsAGlobal === this.thisIsAGlobal)
console.log(soIsThis === this.soIsThis)

// private scope

var runMe = function() {
  thisIsAGlobal = 10
  var butThisIsNot = 20
  console.log(thisIsAGlobal === this.thisIsAGlobal)
  console.log(butThisIsNot === this.butThisIsNot)
}
runMe()

// convert runMeToIife

// module pattern

var timer = (function() {
  var start = (new Date()).getTime()

  return {
    elapsed: function() {
      var now = (new Date()).getTime()
      return now - start
    }
  }
}())

console.log(timer.elapsed())
setTimeout(function() { console.log(timer.elapsed()) }, 500)
