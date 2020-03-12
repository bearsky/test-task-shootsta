const multer = require('multer')

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename(req, file, cb) {
        cb(null, `${new Date().toISOString().split('.')[0]}-${file.originalname}`)
    },
})
const multerUpload = multer({ storage })

module.exports = multerUpload