const _ = require("lodash");

const townPopulation = (towns) => {
  return _.forEach(towns, (town) => {
    if(town.population > 1) {
      town.size = 'big'
    } else if (town.population < 0.5) {
      town.size = 'small'
    } else {
      town.size = 'med'
    }
  })
};

module.exports = townPopulation;
