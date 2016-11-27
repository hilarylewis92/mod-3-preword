require('es6-promise')

const all = (promise1, promise2) => {
  return new Promise ((fulfill, reject) => {
    let counter = 0
    let output = []

    promise1.then((value) => {
      output[0] = value
      counter++

      if(counter >= 2) {
        fulfill(output)
      }
    })

    promise2.then((value) => {
      output[1] = value
      counter++

      if(counter >= 2) {
        fulfill(output)
      }
    })
  })
}

all(getPromise1(), getPromise2())
  .then(console.log);
