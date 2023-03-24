const commentQueries = require('./query')

const commentService = {
  getComments: async (post_id) => {
    return commentQueries
      .getComments(post_id)
      .then((result) => ({
         status: 200, 
         data: result.array,
         totalCount: result.totalCount
        }))
      .catch((err) => ({ status: 400, message: err }))
  },
}

module.exports = commentService;