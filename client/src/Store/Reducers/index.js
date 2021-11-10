import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  DELETE_MOVIE,
  CREATE_MOVIE,
} from "../keys";

let initialState = {
  movies: [],
  movie: {},
};

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_MOVIES:
      return { ...state, movies: payload }
    case FETCH_MOVIE:
      return { ...state, movie: payload }
    case DELETE_MOVIE:
      return { ...state, movies: state.movies.filter((L) => L.id !== payload) }
    case CREATE_MOVIE:
      return { ...state, movies: [...state.movies, payload] }
    default:
      return state
  }
}

export default reducer