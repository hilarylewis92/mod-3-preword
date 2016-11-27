require('es6-promise')

const attachTitle = (name) => {
  return 'DR. ' + name
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log)
