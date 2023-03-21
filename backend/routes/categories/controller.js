const categoryServices = require("./service");

const categoryController = {
  getCategories: (req, res) => {
    return categoryServices
      .getCategories()
      .then((result)=> res.status(result.status).send(
        { 
          message: result.message, 
          data: result.data,
        })
      )
      .catch((err)=>res.status(err.status).send(err.message))
  },
}

module.exports = categoryController;