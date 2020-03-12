const express = require("express")

const multerUpload = require('./helpers/multer')
const CORSmiddleware = require('./middlewares/CORSmiddleware')
const uploadController = require('./controllers/uploadController')
const videosListController = require('./controllers/videosListController')

const PORT = 5000

const app = express()

app.use(express.static('public'));
app.use(CORSmiddleware)

app.get('/videos', videosListController)

app.post('/upload', multerUpload.single("videoFile"), uploadController)

console.log(`listening on ${PORT}`)
app.listen(PORT)
