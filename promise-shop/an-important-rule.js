require('es6-promise')

const iterate = (int) => {
  console.log(int)
  return int += 1
}

const alwaysThrows = (err) => {
  throw new Error('OH NOES')
}


Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log)
