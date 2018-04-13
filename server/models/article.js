let db = require('../utils/dbUtil.js')

export default class Article {
  /**
   * 文章列表
   */
  getArticleList() {
    var sql = `select a.id,a.user_id,b.username,a.title,a.image_url,a.category_id,c.name AS category_name,a.content,a.tag,a.create_time,a.edit_time,a.state 
    from article a 
    LEFT JOIN user b on a.user_id = b.id
    LEFT JOIN category c on a.category_id = c.id`
    return db.mysqlDB.execQuery(sql, [])
  }
  /**
   * 根据id获取文章(文章页)
   * @param {*} params
   */
  getArticle(params) {
    var sql = `select a.id,a.user_id,b.username,a.title,a.image_url,a.category_id,c.name AS category_name,a.content,a.tag,a.create_time,a.edit_time,a.state 
    from article a 
    LEFT JOIN user b on a.user_id = b.id
    LEFT JOIN category c on a.category_id = c.id where a.id=?`
    return db.mysqlDB.execQuery(sql, [params['id']])
  }
  /**
   * 添加文章
   * @param {*} params
   */
  addArticle(params) {
    var sql =
      'insert into article (user_id,title,category_id,image_url,tag,content,create_time,edit_time,state) value(?,?,?,?,?,?,?,?,?)'
    return db.mysqlDB.execQuery(sql, [
      params['userId'],
      params['title'],
      params['category_id'],
      params['image_url'],
      params['tag'],
      params['content'],
      params['create_time'],
      params['edit_time'],
      params['state']
    ])
  }
  /**
   * 修改文章
   * @param {*} params
   */
  editArticle(params) {
    var sql =
      'update article set title=?,category_id=?,image_url=?,tag=?,content=?,edit_time=?,state=? where id=?'
    return db.mysqlDB.execQuery(sql, [
      params['title'],
      params['category_id'],
      params['image_url'],
      params['tag'],
      params['content'],
      params['edit_time'],
      params['state'],
      params['id']
    ])
  }
  /**
   * 删除文章
   * @param {*} params
   */
  delArticle(params) {
    var sql = 'delete from simplebase.article where id=?'
    return db.mysqlDB.execQuery(sql, [Number(params['id'])])
  }
}
