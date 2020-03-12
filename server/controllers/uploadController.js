module.exports = (req, res) => {
    res.status(200).send({ path: req.file.path })
}