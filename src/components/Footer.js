import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav>
        <ul className="d-flex justify-content-around pt-2 list-unstyled">
          <li>
            <Link to="/" className="btn btn-light">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn btn-light">
              <i className="fas fa-search"></i>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn btn-light">
              <i className="fas fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn btn-light">
              <i className="fas fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
