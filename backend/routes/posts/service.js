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
  createPost: async (body) => {
    
  }
}

module.exports = postService;