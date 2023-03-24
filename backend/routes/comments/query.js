const { resolve } = require('app-root-path')
const { result, reject } = require('lodash')
const db = require('../../config/database');

const Query = {
  getComments    : (post_id) => {
    return new Promise((resolve, reject) => {
      let countQuery = `SELECT COUNT(c.comment_id) as count
                  FROM crudservice.comments c
                  WHERE c.post = ${db.escape(post_id)}`

      let query = `SELECT 
            c.comment_id,
            c.content,
            u.nickname as commenter,
            c.created_at
          FROM crudservice.comments c
          LEFT JOIN users u ON u.user_id = c.commenter
          WHERE c.post = ${db.escape(post_id)}`;
      
      db.query(query, (err, result) => {
        if(err) {
          reject(err);
        }
        else {
          db.query(countQuery, (err, result_cnt) => {
            if(err) reject(err);
            else {
              result = {
                array: Object.values(result),
                totalCount: result_cnt[0].count,
              };
              resolve(result)
            }
          });
        }
      });
    });
  },


}

module.exports = Query;