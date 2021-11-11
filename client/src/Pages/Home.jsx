import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchMovies } from "../Store/Actions";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const goToDetailMovie = (id) => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
      {movies?.map((movie) => {
        return (
          <div
            key={movie.id}
            className="pb-10 xs:pb-2 rounded overflow-hidden cursor-pointer"
            onClick={() => goToDetailMovie(movie.id)}
          >
            <img className="image" src={movie.imgUrl} alt="" />
            <div className="px-6 py-4 xs:px-2 xs:py-1 seperate">
              <div className="font-bold text-3xl xs:text-lg mb-2">{movie.title}</div>
              <div className="pt-1">
                <p className="text-gray-700 text-xl xs:text-sm">by: {movie.director}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
