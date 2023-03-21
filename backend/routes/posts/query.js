const { resolve } = require('app-root-path')
const { result, reject } = require('lodash')
const db = require('../../config/database');

const Query = {
  getPostsList    : () => {
    return new Promise((resolve, reject) => {
      let countQuery = `SELECT count(*) as count
            FROM crudservice.posts`
      let query = `SELECT 
              p.post_id,
              p.title,
              p.content,
              u.nickname,
              c.category_name,
              p.created_at,
              p.view_count
            FROM crudservice.posts p
            LEFT JOIN crudservice.categories c ON p.category = c.category_id
            LEFT JOIN crudservice.users u ON p.poster = u.user_id
            ORDER BY p.created_at DESC`;
      db.query(query, (err, result) => {
        if(err) {
          reject(err)
        } else {
          db.query(countQuery, (err, result_cnt) => {
            if(err) {
              reject(err);
            } else {
              result = {
                array: Object.values(result),
                totalCount: result_cnt[0].count
              };
              resolve(result)
            }
          })
        }
      })
    })
  },
  createPost    : (params) => {
    const { filename } = params.file
    const { title, content, poster, category } = params.body

    const query = `
        INSERT INTO crudservice.posts (
          title, content, attach, poster, category
        )
        VALUES (${db.escape(title)}, ${db.escape(content)}, ${db.escape(filename)}, ${db.escape(poster)}, ${db.escape(category)})
        ON DUPLICATE KEY UPDATE modydt = NOW();`;

    db.query(query, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  }
}

module.exports = Query;