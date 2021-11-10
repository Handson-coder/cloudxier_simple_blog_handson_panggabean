module.exports = function (err, req, res, next) {
    console.log(err);
    let code = err.code || 500
    let message = 'Internal Server Error'

    if (err.name === 'SequelizeValidationError') {
        let errors = err.errors.map(l => {
            return l.message
        })
        code = 400
        message = errors
    } else if (err.name === 'Image is required') {
        code = 400
        message = 'Image is required'
    }
    res.status(code).json({ message })
}