import { Router } from 'express'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'
import uuid from 'node-uuid'
const router = Router()

router.post('/upload', (req, res) => {
  var form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    var old_path = files.file.path
    var file_ext = files.file.name.split('.').pop()
    var index = old_path.lastIndexOf('/') + 1
    var file_name = uuid() //+ file_ext//old_path.substr(index)
    var new_path = path.join(
      __dirname,
      '..',
      'uploads',
      file_name + '.' + file_ext
    )
    var dir = path.join(__dirname, '..', '..', 'uploads')
    console.log('dir:%s', dir)
    fs.exists(dir, function(exists) {
      console.log(exists ? '目录存在' : '目录不存在')
    })

    fs.readFile(old_path, (err, data) => {
      fs.writeFile(new_path, data, err => {
        fs.unlink(old_path, err => {
          if (err) {
            res.status(500)
            res.json({ success: false })
          } else {
            res.status(200)
            res.json({ success: true, path: new_path })
          }
        })
      })
    })
  })
})

export default router
