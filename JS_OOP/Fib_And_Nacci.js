function fib() {
    // Some variables here
    var count = 1
    var prev = 0
    function nacci() {
      // do something to those variables here
        //console.log(prev)//0, //1
        const temp = prev
        console.log(count);
        prev = count
        count = count + temp

    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"