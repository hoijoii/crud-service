const commentService = require("./service");

const commentController = {
  getComments: (req, res) => {
    return commentService
      .getComments(req.params.id)
      .then((result)=> res.status(result.status).send(
        { 
          message: result.message, 
          data: result.data,
          totalCount: result.totalCount
        })
      )
      .catch((err)=>res.status(err.status).send(err.message))
  },
}

module.exports = commentController;