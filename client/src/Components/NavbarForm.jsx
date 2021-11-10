import React from "react";
import { Link } from "react-router-dom";

export default function NavbarForm() {
  return (
    <div className="navbar mb-2 bg-neutral-content text-neutral rounded-box">
      <div className="flex-none bigger">
        <Link to="/" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-20 h-15 stroke-current text-neutral"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
