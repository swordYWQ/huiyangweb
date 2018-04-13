let db = require('../utils/dbUtil.js')

export default class Category {
  /**
   * 查询分类列表
   * @param {*} params
   */
  getCategoryList(params) {
    var sql = 'select * from simplebase.category'
    return db.mysqlDB.execQuery(sql, [])
  }
  /**
   * 查询分类
   * @param {*} params
   */
  getCategory(params) {
    var sql = 'select * from simplebase.category where id=?'
    return db.mysqlDB.execQuery(sql, [params['id']])
  }
  /**
   * 添加分类
   * @param {*} params
   */
  addCategory(params) {
    var sql =
      'insert into simplebase.category (name,description,sort) value(?,?,?)'
    return db.mysqlDB.execQuery(sql, [
      params['name'],
      params['description'],
      params['sort']
    ])
  }
  /**
   * 修改分类
   * @param {*} params
   */
  editCategory(params) {
    var sql =
      'update simplebase.category set name=?,description=?,sort=? where id=?'
    return Fdb.mysqlDB.execQuery(sql, [
      params['name'],
      params['description'],
      params['sort'],
      params['id']
    ])
  }
  /**
   * 删除分类
   * @param {*} params
   */
  delCategory(params) {
    var sql = 'delete from simplebase.category where id=?'
    return db.mysqlDB.execQuery(sql, [Number(params['id'])])
  }
}
