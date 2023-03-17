const mysql = require("mysql2")

const pool = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: 'root',
  password: 'qsef3328!@',
  database: "crudservice",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0, // getConnection에서 오류 발생하기 전 Pool에 대기할 최대 요청 수
  timezone: 'Asia/Seoul',
  dateStrings: true
})

pool.query(
	`CREATE DATABASE IF NOT EXISTS ${process.env.DB_BASE}`,
	(err, result) => {
		err ? console.log(err) : console.log("Database ready");
	}
);

module.exports = pool;