const _ = require("lodash");

const sortItems = (items) => {
  return _.sortBy(items, 'quantity').reverse()
};

module.exports = sortItems;
