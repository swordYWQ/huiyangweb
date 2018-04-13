import { Router } from 'express'
const router = Router()
import Article from '../models/article'
import moment from 'moment'
import utils from '../utils/utils.js'
let articleModel = new Article()
/**
 * 获取分类
 */
router.get('/article/list', function(req, res, next) {
  articleModel
    .getArticleList()
    .then(rows => {
      res.json({ code: 200, message: '查询成功', result: rows })
    })
    .catch(err => {
      res.json({ code: 301, message: '查询失败', result: err })
    })
})
/**
 * 查找文章
 */
router.get('/article/get', function(req, res, next) {
  if (!('id' in req.query)) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    id: req.query['id']
  }
  articleModel
    .getArticle(params)
    .then(rows => {
      res.json({ code: 200, message: '查询成功', result: rows })
    })
    .catch(err => {
      res.json({ code: 301, message: '查询失败', result: err })
    })
})
/**
 * 添加文章
 */
router.get('/article/add', utils.checkUser, function(req, res, next) {
  if (
    !('title' in req.query) ||
    !('category_id' in req.query) ||
    !('content' in req.query)
  ) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    userId: req.session.user.id,
    title: req.query['title'],
    category_id: req.query['category_id'],
    image_url: req.query['image_url'] || '',
    tag: req.query['tag'] || '',
    content: req.query['content'],
    create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    edit_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    state: 0
  }
  articleModel
    .addArticle(params)
    .then(rows => {
      res.json({ code: 200, message: '添加成功', result: rows.insertId })
    })
    .catch(err => {
      res.json({ code: 301, message: '添加失败', result: err })
    })
})
/**
 * 修改文章
 */
router.get('/article/edit', utils.checkUser, function(req, res, next) {
  if (
    !('id' in req.query) ||
    !('title' in req.query) ||
    !('category_id' in req.query) ||
    !('content' in req.query) ||
    !('state' in req.query)
  ) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    id: req.query['id'],
    title: req.query['title'],
    category_id: req.query['category_id'],
    image_url: req.query['image_url'] || '',
    tag: req.query['tag'] || '',
    content: req.query['content'],
    edit_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    state: req.query['state']
  }
  articleModel
    .editArticle(params)
    .then(rows => {
      res.json({ code: 200, message: '修改成功', result: rows.changedRows })
    })
    .catch(err => {
      res.json({ code: 301, message: '修改失败', result: err })
    })
})
/**
 * 删除文章
 */
router.get('/article/del', utils.checkUser, function(req, res, next) {
  if (!('id' in req.query)) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    id: req.query['id']
  }
  articleModel
    .delArticle(params)
    .then(rows => {
      res.json({ code: 200, message: '删除成功', result: rows.affectedRows })
    })
    .catch(err => {
      res.json({ code: 301, message: '删除失败', result: err })
    })
})

export default router
