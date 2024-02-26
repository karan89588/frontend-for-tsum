import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer text-center">
      <h5>Copyright &copy; karan</h5>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/policy">Policy</Link>
        </li>
      </ul>
    </div>
  );
}
