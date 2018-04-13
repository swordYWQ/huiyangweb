var config = require('../config/config.js')
var options = {
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  connectionLimit: config.mysql.maxConnLimit,
  supportBigNumber: true,
  bigNumberStrings: true
}
var mysql = require('mysql')
// var async = require('async')
var pool = mysql.createPool(options)

const execQuery = (sql, paramers) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log('数据库连接异常!',err)
        reject(err);
      }
      console.log(sql, paramers)
      var query = connection.query(sql, paramers, (err, rows) => {
        connection.release();
        console.log(err==true)
        if (err) {
          console.log("SQLERROR:" + err)
          reject("SQLERROR:" + err);
        } else {
          console.log('success')
          resolve(rows)
        }
      })
    })
  })
}
module.exports = {
  execQuery
}