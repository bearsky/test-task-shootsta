module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Accept, Authorization, Content-Type, Origin, X-Requested-With, Cache-Control'
    )
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, PATCH, DELETE'
        )
        return res.status(200).json({})
    }
    next()
}