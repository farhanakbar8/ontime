import React from "react";
import moment from "moment";

function Header({ page }) {
  return (
    <header className="backdrop-blur-sm z-50 flex w-wmobile bg-gradient-to-b from-black/40 to-black/0 justify-between items-center text-white p-5 fixed">
      <div className="">
        {page === "Home" ? (
          <>
            <h1 className="text-xl font-black">For Today</h1>
            <p className="text-sm">{moment().format("Do MMMM YYYY")}</p>
          </>
        ) : (
          <h1 className="text-xl font-medium">{page}</h1>
        )}
      </div>
      <button>
        <svg
          width="29"
          height="23"
          viewBox="0 0 29 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.31134e-07"
            y1="1.5"
            x2="29"
            y2="1.5"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="-1.31134e-07"
            y1="21.5"
            x2="29"
            y2="21.5"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="-1.31134e-07"
            y1="11.5"
            x2="29"
            y2="11.5"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
