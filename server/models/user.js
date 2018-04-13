let db = require('../utils/dbUtil.js')

export default class User {
  /**
 * 登录
 * @param {*} req 
 * @param {*} res 
 */
  loginIn(params) {
    var sql = "select * from simplebase.user where username=? and password=?"
    return db.mysqlDB.execQuery(sql, [params['username'], params['password']])
  }
}