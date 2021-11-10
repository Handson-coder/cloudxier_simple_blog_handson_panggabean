const { Movie } = require('../models')

class ControllerMovie {
  static async findAllMovies(req, res, next) {
    try {
      const result = await Movie.findAll({
        order: [['id', 'DESC']]
      })
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }

  static async detailMovie(req, res, next) {
    const { id } = req.params
    try {
      const result = await Movie.findByPk(id)
      if (result) {
        res.status(200).json(result)
      }
      else {
        throw ({ name: 'Data not found' })
      }
    } catch (err) {
      next(err)
    }
  }

  static async createMovie(req, res, next) {
    const data = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      director: req.body.director,
      trailerUrl: req.body.trailerUrl,
      imgUrl: req.body.imgUrl,
    }
    try {
      const result = await Movie.create(data)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  static async editMovie(req, res, next) {
    const { id } = req.params
    const data = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      director: req.body.director,
      trailerUrl: req.body.trailerUrl,
      imgUrl: req.body.imgUrl,
    }
    try {
      const foundMovie = await Movie.findByPk(id)
      if (foundMovie) {
        const result = await Movie.update(data, { where: { id }, returning: true })
        res.status(200).json(result[1][0])
      } else {
        throw ({ name: 'Data not found' })
      }
    } catch (err) {
      next(err)
    }
  }

  static async deleteMovie(req, res, next) {
    const { id } = req.params
    try {
      const foundMovie = await Movie.findByPk(id)
      if (foundMovie) {
        await Movie.destroy({ where: { id: foundMovie.id } })
        res.status(200).json({ message: `Movie ${foundMovie.title} Successfully Deleted! ` })
      } else {
        throw ({ name: 'Data not found' })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerMovie