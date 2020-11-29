import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/products/jackets" className="item">
        Jackets
      </Link>
      <Link to="/products/shirts" className="item">
        Shirts
      </Link>
      <Link to="/products/accessories" className="item">
        Accessories
      </Link>
    </div>
  );
};

export default Header;
