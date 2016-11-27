const _ = require("lodash");

const chainMail = (words) => {
  return _.chain(words)
    .map((word) => {
      return word + 'chained'
    })
    .map((word) => {
      return word.toUpperCase()
    })
    .sortBy()
    .value()
};

module.exports = chainMail;
