const router = require('express').Router()
const routerMovie = require('./routerMovie')
const errorHandler = require('../middlewares/errorHandler')

router.use('/movies', routerMovie)

router.use(errorHandler)

module.exports = router