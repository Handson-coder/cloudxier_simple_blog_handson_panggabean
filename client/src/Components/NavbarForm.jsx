import React from "react";
import { Link } from "react-router-dom";

export default function NavbarForm() {
  return (
    <div className="navbar xs:mb-1 mb-2 bg-neutral-content xs:bg-neutral-content xs:text-neutral text-neutral xs:rounded-box rounded-box">
      <div className="flex-none">
        <Link to="/" className="btn btn-square btn-ghost xs:btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-20 h-15 xs:w-10 xs:h-8 stroke-current xs:text-natural text-neutral"
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
