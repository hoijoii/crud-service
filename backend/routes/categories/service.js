const categoryQueries = require('./query')

const categoryService = {
  getCategories: async () => {
    return categoryQueries
      .getCategories()
      .then((result) => ({
         status: 200, 
         data: result
        }))
      .catch((err) => ({ status: 400, message: err }))
  },
}

module.exports = categoryService;