const promise = Promise.reject(new Error('ERROR ERROR ERROR'));

promise.catch((err) => console.error(err.mesage));
