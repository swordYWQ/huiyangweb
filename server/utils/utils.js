const checkUser = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.json({ code: 303, message: '用户未登录' })
  }
}
module.exports = {
  checkUser
}
