import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import "../../assets/style/header.scss";
import { mainNav } from "../constans/header";

const Header = () => {
  const location = useLocation();
  

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
      <div className="input-seach"><input  type="text" placeholder="Tìm kiếm sản phẩm" className="input"/></div>
      <div className="icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        <Link className="login" to="/login">  <i className="fa-solid fa-user"></i></Link>
        {/* <i className="fa-solid fa-user"></i> */}
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
    
    
  );
};

export default Header;
