const fs = require('fs')

module.exports = (req, res) => {
    const files = fs.readdirSync('public/uploads')
    const filesList = files.map(file => {
        return {
            name: file,
            path: `/uploads/${file}`,
        }
    })
    res.status(200).send(filesList)
}