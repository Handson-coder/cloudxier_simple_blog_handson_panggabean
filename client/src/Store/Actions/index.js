import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  DELETE_MOVIE,
  CREATE_MOVIE,
} from "../keys";
import axios from 'axios'

// const baseUrl = 'https://handson-cloudxier.herokuapp.com'
const baseUrl = 'http://localhost:9000'

export const setMovies = (payload) => {
  return {
    type: FETCH_MOVIES,
    payload
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/movies`)
      .then(({ data }) => {
        dispatch(setMovies(data));
      })
      .catch((err) => console.log(err));
  };
};

export const setMovie = (payload) => {
  return {
    type: FETCH_MOVIE,
    payload
  };
};

export const fetchMovie = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/movies/${id}`)
      .then(({ data }) => {
        dispatch(setMovie(data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id,
  };
};

export const deletingMovie = (id) => {
  return (dispatch) => {
    axios
      .delete(`${baseUrl}/movies/${id}`)
      .then((_) => {
        dispatch(deleteMovie(id))
      })
      .catch((err) => console.log(err))
  };
};

export const setCreateMovie = (payload) => {
  return {
    type: CREATE_MOVIE,
    payload,
  };
};

export function createMovie(data) {
  return function (dispatch) {
    axios.post(`${baseUrl}/movies`, data)
      .then(({ data }) => {
        dispatch(setCreateMovie(data))
      })
      .catch((err) => console.log(err))
  };
}


