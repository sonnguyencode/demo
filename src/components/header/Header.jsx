import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/image/avatar.png";
import logo from "../../assets/image/logo.webp";
import "../../assets/style/header.scss";
import { mainNav } from "../constans/header";
import loginSlice from "../redux/login/loginSlice";


const Header = () => {
  const location = useLocation();
  const { cartQuantity } = useSelector((state) => state.cart);

  let isLogin = useSelector((state) => state.isLogin);
  let userName = localStorage.getItem("Name");
  function handleUser (){
    let box=document.querySelectorAll('.box')
    
    box[0].style.display='block'
    

  }
  const dispatch = useDispatch();
  function handleLogout (){
    dispatch(loginSlice.actions.handleLogout());
    let box=document.querySelectorAll('.box')
    
    box[0].style.display='none'
  }


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
  console.log("test", isLogin.isLogin);
  return (
    <>
      <div className="header">
        <div className="navbar">{renderLink()}</div>
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="input-seach">
          <form>
            <div className="pseudo-search">
              <input type="text" placeholder="Tìm kiếm...." />

              <button className="fa fa-search" type="submit"></button>
            </div>
          </form>
        </div>
        <div className="icon">
          {!isLogin.isLogin ? (
            <Link className="login" to="/login">
              <i className="fa-solid fa-user"></i>
            </Link>
          ) : (
            <div className="avatar">
              <img  onClick={()=> handleUser()} className="avatar-user" src={avatar} alt="" />
            </div>
          )}

          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping">
              <div className="quantity-cart">
                <span className="cart-quantity">{cartQuantity}</span>
              </div>
            </i>
          </Link>
        </div>
        <div className="box">
          <div className="flex">
            <img className="avatar-user" src={avatar} alt="" />
            <p className="name">{userName}</p>
          </div>
          <p className="info">Tài khoản của tôi</p>
          <div onClick={handleLogout} className="out">
            <p className="logout">Đăng xuất</p>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
