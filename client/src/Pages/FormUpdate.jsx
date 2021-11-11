import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, updateMovie } from "../Store/Actions/index";
import Swal from "sweetalert2";

export default function FormUpdate() {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie);
  const history = useHistory();
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState({});
  const [payload, setPayload] = useState({
    title: "",
    director: "",
    synopsis: "",
    trailerUrl: "",
  });

  useEffect(() => {
    fillPayload(); // eslint-disable-next-line
  }, [dispatch]);

  const fillPayload = () => {
    dispatch(fetchMovie(id));
    setPayload({
      title: movie.title,
      director: movie.director,
      synopsis: movie.synopsis,
      trailerUrl: movie.trailerUrl,
    });
  };

  const updateButton = (e) => {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: `Updating Movie`,
      text: "Please Wait ...",
      showConfirmButton: false,
      timer: 1500,
    });
    e.preventDefault();
    const form = new FormData();
    form.append("title", payload.title);
    form.append("director", payload.director);
    form.append("trailerUrl", payload.trailerUrl);
    form.append("synopsis", payload.synopsis);
    form.append("imgUrl", imgUrl);
    dispatch(updateMovie(id, form))
      .then(({ data }) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Movie ${data.title} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        setPayload({
          title: "",
          director: "",
          synopsis: "",
          trailerUrl: "",
        });
        history.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data.message}`,
        });
      });
  };

  const inputValue = (e, key) => {
    const newPayload = { ...payload };
    newPayload[key] = e.target.value;
    setPayload(newPayload);
  };

  const changeInputImage = (e) => {
    setImgUrl(e.target.files[0]);
  };

  const goBackToDetailMovie = (id) => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className="form-parent">
      <div className="form-container">
        <div className="text-center justify-center hero-content lg:text-left text-error">
          <h1 className="mb-4 mt-4 xs:mb-1 xs:mt-1 text-4xl xs:text-xl font-bold italic text-neutral-focus uppercase">
            Form Update
          </h1>
        </div>
        <div className="bg-base-100">
          <div className="flex-col justify-center hero-content lg:flex-row">
            <div className="card flex-shrink-0 shadow-2xl bg-base-200">
              <div className="card-body form-nya">
                <div className="form-control">
                  <label className="label">
                    <span className="font-bold">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input border-neutral-focus input-bordered "
                    onChange={(e) => inputValue(e, "title")}
                    value={
                      payload.title ? payload.title : "" ? movie.title : ""
                    }
                  />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="font-bold">Director</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Director"
                    className="input border-neutral-focus input-bordered"
                    onChange={(e) => inputValue(e, "director")}
                    value={
                      payload.director
                        ? payload.director
                        : ""
                        ? movie.director
                        : ""
                    }
                  />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="font-bold">Trailer URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Trailer URL"
                    className="input border-neutral-focus input-bordered"
                    onChange={(e) => inputValue(e, "trailerUrl")}
                    value={
                      payload.trailerUrl
                        ? payload.trailerUrl
                        : ""
                        ? movie.trailerUrl
                        : ""
                    }
                  />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="font-bold">Synopsis</span>
                  </label>
                  <textarea
                    className="textarea h-24 textarea-bordered border-neutral-focus"
                    placeholder="Synopsis"
                    onChange={(e) => inputValue(e, "synopsis")}
                    value={
                      payload.synopsis
                        ? payload.synopsis
                        : ""
                        ? movie.synopsis
                        : ""
                    }
                  ></textarea>
                </div>
                <div className="flex w-96 h-48 items-center justify-center bg-grey-lighter">
                  <label className="label pr-10 xs:pr-20">
                    <span className="font-bold">Image</span>
                  </label>
                  <label className="w-full xs:w-52 h-auto flex flex-col items-center bg-base-300 text-center rounded-lg shadow-lg tracking-wide border border-neutral-focus cursor-pointer hover:bg-neutral hover:text-secondary-content">
                    <svg
                      className="w-8 h-8 xs:w-6 xs:h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-1 text-xs leading-normal">
                      {imgUrl.name ? imgUrl.name : <h1>Select a file</h1>}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={changeInputImage}
                    />
                  </label>
                </div>
                <div className="mt-1 seperate">
                  <div className="button-cancel">
                    <button
                      type="button"
                      onClick={() => goBackToDetailMovie(movie.id)}
                      className="btn btn-neutral rounded-xl"
                      aria-pressed="true"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="button-update-create">
                    <button
                      type="button"
                      className="btn btn-warning rounded-xl"
                      aria-pressed="true"
                      onClick={(e) => updateButton(e)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
