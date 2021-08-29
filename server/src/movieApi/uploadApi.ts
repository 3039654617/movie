import Express from 'express'
import multer from 'multer'
import path from 'path'
const Router = Express.Router();

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../assets'),
    filename: function (req, file, cb) {
      const extname = path.extname(file.originalname)
      cb(null, `${Date.now()}${extname}`)
    }
})

const allowImg = [".jpg", ".png", ".gif", ".bmp", ".jiff"]

const upload = multer({
    storage,
    fileFilter(req, file, cb) { 

        // 这个函数应该调用 `cb` 用boolean值来
        // 指示是否应接受该文件
      
        // 拒绝这个文件，使用`false`，像这样:
        const ext = path.extname(file.originalname)
        if(allowImg.includes(ext)){
              // 接受这个文件，使用`true`，像这样:
              cb(null, true)
        }
         else {
             // 如果有问题，你可以总是这样发送一个错误:
             cb(new Error('I don\'t have a clue!'))
        }
    },
    limits: {
        fieldSize: 1024*1024,
        files: 5
    }
}).single('imgfile')

Router.post('/', (req, res, cb) => {
    upload(req, res, e => {
        if(e instanceof multer.MulterError) {
            res.send(e)
        } else {
            const url = '/api/download/' + req.file?.filename
            res.send(url)
        }
    }) 
})

export default Router;