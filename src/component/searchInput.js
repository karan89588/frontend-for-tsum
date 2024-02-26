import React from "react";

export default function SearchInput() {
  return (
    <form className="form-inline d-flex flex-row mx-2">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
