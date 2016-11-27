const _ = require("lodash");

const worker = (user) => {
  return _.filter(user, {active: true})
};

module.exports = worker;
