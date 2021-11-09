'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Title is required' },
        notNull: { msg: 'Title is required' }
      }
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Synopsis is required' },
        notNull: { msg: 'Synopsis is required' }
      }
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Director is required' },
        notNull: { msg: 'Director is required' }
      }
    },
    trailerUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'URL Trailer is required' },
        notNull: { msg: 'URL Trailer is required' }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Image is required' },
        notNull: { msg: 'Image is required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};