const _ = require("lodash");

const townWeather = (towns) => {
  let townTemps = {
    hot: [],
    warm: []
  }

  const checkTemp = (temp) => {
    return temp > 19
  }

  _.forEach(towns, (town, townName) => {
    if (_.every(town, checkTemp)) {
      townTemps.hot.push(townName)
    } else if (_.some(town, checkTemp)) {
      townTemps.warm.push(townName)
    }
  })
  return townTemps
}

module.exports = townWeather;
