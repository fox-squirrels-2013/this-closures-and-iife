

var makeCounter = function() {
  var count = 0;
  
  return {
    increment: function() {
      count++;
    },

    val: function() {
      return count;
    }  
  }
}

var counter = makeCounter()

counter.increment()
console.log(counter.val()) // prints 1
counter.increment()
console.log(counter.val()) // prints 2
counter.count = 5
console.log(counter.val()) // prints 2?!?!?
