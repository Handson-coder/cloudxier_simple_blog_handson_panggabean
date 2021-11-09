module.exports = function (err, req, res, next) {
  let code = err.code || 500
  let message = 'Internal Server Error'

  if (err.name === 'SequelizeUniqueConstraintError') {
      code = 400
      message = `${req.body.email} already registered`
  } else if (err.name === 'SequelizeValidationError') {
      let errors = err.errors.map(l => {
          return l.message
      })
      code = 400
      message = errors
  }
  res.status(code).json({ message })
}