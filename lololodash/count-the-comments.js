const _ = require("lodash");

const commentCount = (comments) => {
  let commentsCounted = []
  let commentsGrouped = _.groupBy(comments, 'username')

  _.forEach(commentsGrouped, (comment, username) => {
    commentsCounted.push({
      username: username,
      comment_count: _.size(comment)
    })
  })
  return _.sortBy(commentsCounted, 'comment_count').reverse()
};

module.exports = commentCount;
