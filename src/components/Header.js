import React from "react";
import { Link } from "react-router-dom";
import macdonalLogo from "../assets/mcdonalds.svg";

const Header = (props) => {
  return (
    <div>
      <div>
        <img width="60px;" src={macdonalLogo} alt="mcdonals" />
      </div>
      <div className="cart">
        <Link to="/order" className="btn-carts text-decoration-none">
          <i className="fas fa-shopping-cart"></i>
          <sup className="text-danger fw-bold text-num">
            {props.cardData.CardItems.length}
          </sup>
        </Link>
      </div>
    </div>
  );
};

export default Header;
