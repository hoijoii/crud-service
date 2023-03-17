const postQueries = require('./query')

const postService = {
  getPostsList: async () => {
    return postQueries
      .getPostsList()
      .then((result) => ({
         status: 200, 
         data: result.array,
         totalCount: result.totalCount
        }))
      .catch((err) => ({ status: 400, message: err }))
  },
  createPost: async (params) => {
    return postQueries
      .createPost(params)
      .then((result)=>({
        status: 201,
        message: 'posting success'
      }))
      .catch((err) => ({status: 400, message: err}))
  }
}

module.exports = postService;