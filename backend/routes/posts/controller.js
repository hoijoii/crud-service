const postServices = require("./service");

const postController = {
  getPosts: (req, res) => {
    return postServices
      .getPostsList()
      .then((result)=> res.status(result.status).send(
        { 
          message: result.message, 
          data: result.data,
          totalCount: result.totalCount
        })
      )
      .catch((err)=>res.status(err.status).send(err.message))
  },
  createPost: (req, res) => {
    return postServices
      .createPost(req.body)
      .then((result) => res.status(result.status).send({message : result.message, dupUrls: result.dupUrls}))
			.catch((err) => res.status(err.status).send(err.message))
  }
}

module.exports = postController;