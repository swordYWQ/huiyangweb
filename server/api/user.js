import { Router } from 'express'
const router = Router()
import User from '../models/user'

let userModel = new User()
/**
 * 用户登录
 */
router.get('/user/login', function (req, res, next) {
  if (req.query['username'] && req.query['password']) {
    let params = {
      username: req.query['username'],
      password: req.query['password']
    }
    userModel.loginIn(params).then((rows) => {
      if (rows.length > 0) {
        var user = {
          id: rows[0].id,
          username: rows[0].username,
          nickname: rows[0].nickname,
          sex: 0,
          user_icon: null
        }
        req.session.user = user;
        res.json({ code: 200, message: '登录成功' })
      } else {
        res.json({ code: 401, message: '用户名或密码错误' })
      }
    }).catch((err) => {
      res.json({ code: 301, message: '登陆异常', result: err })
    })
  } else {
    res.json({ code: 401, message: '参数错误' })
  }
})
/**
 * 用户登出
 */
router.get('/user/logout', function (req, res, next) {
  req.session.destroy();
  res.end(apiUtil.success('', '登出成功'))
})

const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]
/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
