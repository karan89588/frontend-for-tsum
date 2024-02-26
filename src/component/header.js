import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import SearchInput from "./searchInput";
export default function Header() {
  return (
    <>
      <div className="header text-center">
        <i class="fa-solid fa-magnet"></i>
        <span className="navbar-brand-text">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Multi-Source Summarizer
          </Link>
        </span>
      </div>
    </>
  );
}
