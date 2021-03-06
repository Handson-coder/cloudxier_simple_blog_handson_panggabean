import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchMovie, deletingMovie } from "../Store/Actions";
import Swal from "sweetalert2";

export default function DetailMovie() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(id)); // eslint-disable-next-line
  }, [dispatch]);

  const deleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deletingMovie(id));
          Swal.fire("Deleted!", "Movie has been deleted.", "success");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something Went Wrong`,
        });
      });
  };

  return (
    <div className="parent flex justify-center items-center pt-3 pb-16 pr-38rem pl-38rem xs:pb-5 xs:pt-1">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="image-detail" src={movie?.imgUrl} alt="" />
        <div className="px-6 py-4">
          <div className="flex pt-1 pb-10 seperate">
            <div className="font-bold text-3xl mb-2">{movie?.title}</div>
            <div className="pt-1">
              <p className="text-gray-700 text-xl">by: {movie?.director}</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg">{movie?.synopsis}</p>
        </div>
        <div className="px-6 pt-4 pb-2 seperate">
          <div className="button-detail">
            <Link
              to={`/form-update/${movie.id}`}
              className="btn btn-bg-neutral rounded-xl detail-update"
            >
              Update
            </Link>
          </div>
          <div className="button-detail">
            <button
              onClick={() => deleteButton(movie.id)}
              className="btn btn-warning rounded-xl"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
