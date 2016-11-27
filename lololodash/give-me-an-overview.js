const _ = require("lodash");

const overview = (orders) => {
  let newArray = [],
      total = 0

  orders = _.groupBy(orders, 'article')

  _.forEach(orders, (item, key) => {
    key = parseInt(key)
    total = 0

    if(item.length === 1) {
      total = item[0].quantity
    }else{
      total = _.reduce(item, (sum, item) => {
        return sum + item.quantity
      }, 0)
    }
    newArray.push({
      article: key,
      total_orders: total
    })
  })
  newArray = _.sortBy(newArray, 'total_orders').reverse()

  return newArray
};

module.exports = overview;
