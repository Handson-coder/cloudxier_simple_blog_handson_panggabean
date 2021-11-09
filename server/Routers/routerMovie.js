const router = require('express').Router()
const ControllerMovie = require('../Controllers/ControllerMovie')
const upload = require('../middlewares/Multer.js')
const multerMiddlewareImageMovie = upload.single('imgUrl')
const imageKit = require('../middlewares/ImageKit')

router.get('/', ControllerMovie.findAllMovies)
router.get('/:id', ControllerMovie.detailMovie)
router.post('/', multerMiddlewareImageMovie, imageKit, ControllerMovie.createMovie)
router.put('/:id', multerMiddlewareImageMovie, imageKit, ControllerMovie.editMovie)
router.delete('/:id', ControllerMovie.deleteMovie)

module.exports = router