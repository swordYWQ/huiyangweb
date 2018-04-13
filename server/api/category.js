import { Router } from 'express'
const router = Router()
import Category from '../models/category'
import utils from '../utils/utils.js'
let categoryModel = new Category()
/**
 * 获取分类列表
 */
router.get('/category/list', function(req, res, next) {
  categoryModel
    .getCategoryList()
    .then(rows => {
      res.json({ code: 200, message: '查询成功', result: rows })
    })
    .catch(err => {
      res.json({ code: 301, message: '查询失败', result: err })
    })
})
/**
 * 获取分类
 */
router.get('/category/get', function(req, res, next) {
  if (!('id' in req.query)) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  categoryModel
    .getCategory({ id: req.query['id'] })
    .then(rows => {
      res.json({ code: 200, message: '查询成功', result: rows })
    })
    .catch(err => {
      res.json({ code: 301, message: '查询失败', result: err })
    })
})
/**
 * 添加分类
 */
router.get('/category/add', utils.checkUser, function(req, res, next) {
  if (
    !('name' in req.query) ||
    !('description' in req.query) ||
    !('sort' in req.query)
  ) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    name: req.query['name'],
    description: req.query['description'],
    sort: req.query['sort']
  }
  categoryModel
    .addCategory(params)
    .then(rows => {
      res.json({ code: 200, message: '添加成功', result: rows.insertId })
    })
    .catch(err => {
      res.json({ code: 301, message: '添加失败', result: err })
    })
})
/**
 * 修改分类
 */
router.get('/category/edit', utils.checkUser, function(req, res, next) {
  if (
    !('id' in req.query) ||
    !('name' in req.query) ||
    !('description' in req.query) ||
    !('sort' in req.query)
  ) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    id: req.query['id'],
    name: req.query['name'],
    description: req.query['description'],
    sort: req.query['sort']
  }
  categoryModel
    .editCategory(params)
    .then(rows => {
      res.json({ code: 200, message: '修改成功', result: rows.changedRows })
    })
    .catch(err => {
      res.json({ code: 301, message: '修改失败', result: err })
    })
})
/**
 * 删除分类
 */
router.get('/category/del', utils.checkUser, function(req, res, next) {
  if (!('id' in req.query)) {
    res.json({ code: 401, message: '参数错误' })
    return
  }
  var params = {
    id: req.query['id']
  }
  categoryModel
    .delCategory(params)
    .then(rows => {
      res.json({ code: 200, message: '删除成功', result: rows.affectedRows })
    })
    .catch(err => {
      res.json({ code: 301, message: '删除失败', result: err })
    })
})

export default router
