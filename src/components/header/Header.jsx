import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import avatar from "../../assets/image/avatar.png";
import logo from "../../assets/image/logo.webp";
import "../../assets/style/header.scss";
import { mainNav } from "../constans/header";
import loginSlice from "../redux/login/loginSlice";

const Header = () => {
  const location = useLocation();
  let [key, setKey] = useState("");
  const [data, setData] = useState([]);
  const [none, setNone] = useState(false);
  const [nav, setNav] = useState(false);
  const { cartQuantity } = useSelector((state) => state.cart);
  let search = document.querySelectorAll(".container-search");

  const navigate = useNavigate();

  let isLogin = useSelector((state) => state.isLogin);
  let userName = localStorage.getItem("Name");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://fakestoreapi.com/products`
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //search//
  function handleChange(event) {
    setKey(event.target.value);
  }
  function handleUser() {
    none ? setNone(false) : setNone(true);
  }
  //navbar

  function handleNav() {
    // nav ? setNav(false):setNav (true)
    let bar = document.querySelectorAll(".navbar");
    bar[0].style.display = "block";
  }

  //logout//
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(loginSlice.actions.handleLogout());
    let box = document.querySelectorAll(".box");

    box[0].style.display = "none";
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

  return (
    <>
      <div className="header">
        <i onClick={handleNav} className="fa-solid fa-bars"></i>

        <div className="navbar">{renderLink()} </div>

        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="input-seach">
          <form className="search-fill">
            <div className="pseudo-search">
              <input
                onChange={handleChange}
                onFocus={() => (search[0].style.display = "block")}
                type="search"
                placeholder="Tìm kiếm...."
              />

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
              <img
                onClick={() => handleUser()}
                className="avatar-user"
                src={avatar}
                alt=""
              />
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
        {none ? (
          <div className="box">
            <div className="flex">
              <img className="avatar-user" src={avatar} alt="" />
              <p className="name">{userName}</p>
            </div>

            <div className="none">
              <p className="info">Tài khoản của tôi</p>
              <div onClick={handleLogout} className="out">
                <p className="logout">Đăng xuất</p>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container-search">
          {data
            .filter((item) => {
              return key.toLowerCase() === ""
                ? ""
                : item.title.toLowerCase().includes(key);
            })
            .map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate(
                    `/product/${item.id}`,
                    (search[0].style.display = "none")
                  )
                }
                className="search-data"
              >
                <img className="img-search" src={item.image} alt="" />
                <div className="title">
                  <p>{item.title}</p>
                  <p className="s-price">Price: ${item.price}</p>
                </div>
              </div>
            ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Header;
