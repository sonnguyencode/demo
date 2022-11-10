import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import "../../assets/style/header.scss";
import { mainNav } from "../constans/header";

const Header = () => {
  const location = useLocation();
  const { cartQuantity } = useSelector((state) => state.cart);
  // console.log("cartquantity",cartTotalQuantity);

  const renderLink = () => {
    return mainNav.map((item, i) => (
      <Link
        className={`nav ${location.pathname === item.path ? "active" : ""}`}
        to={item.path}
        key={i}
      >
        {item.display}
      </Link>
    ));
  };
  return (
    <div className="header">
      <div className="navbar">{renderLink()}</div>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="input-seach">
        <form>
          <div className="pseudo-search">
            <input type="text" placeholder="Tìm kiếm...."  />

            <button className="fa fa-search" type="submit"></button>
          </div>
        </form>
      </div>
      <div className="icon">
       
        <Link  className="login" to="/login">
          {" "}
          <i className="fa-solid fa-user"></i>
        </Link>

        <Link  to="/cart">
          <i className="fa-solid fa-cart-shopping">
            <div className="quantity-cart">
              <span className="cart-quantity">{cartQuantity}</span>
            </div>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
