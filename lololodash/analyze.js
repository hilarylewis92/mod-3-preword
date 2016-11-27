const _ = require("lodash");

const analyze = (freelancers) => {
  freelancers = _.sortBy(freelancers, 'income')

  let average = _.reduce(freelancers, (sum, num) => {
    return sum + num.income
  }, 0) / freelancers.length

  let underperform = _.filter(freelancers, (num) => {
    return num.income <= average
  })

  let overperform = _.filter(freelancers, (num) => {
    return num.income > average
  })

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  }
};

module.exports = analyze;
