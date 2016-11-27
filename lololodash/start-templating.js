const _ = require("lodash");

const templating = function(user) {
  return _.template('Hello <%= name %> (logins: <%= login.length %>)')(user)
}

module.exports = templating;
