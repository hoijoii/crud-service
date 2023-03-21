const { resolve } = require('app-root-path')
const { result, reject } = require('lodash')
const db = require('../../config/database');

const Query = {
  getCategories    : () => {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM crudservice.categories`;
      db.query(query, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  },
}

module.exports = Query;