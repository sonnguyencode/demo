import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ item=[] }) => {
  return (
    <Link  to={`/product/${item.id}`} key={item.id} className="all-product" >
      <div className="img">
        <img className="image" src={item.image} alt="" />
        <div className="rate">
          <p className="rate-count">{item.rating.rate}</p>
          <i className="fa-solid fa-star"></i>
          <p className="rate-count">({item.rating.count})</p>
        </div>
        <Link to={`/product/${item.id}`} key={item.id} className="overlay">
          Mua hàng{" "}
        </Link>
      </div>
      <p className="title">{item.title}</p>
      <p className="price">{item.price}$</p>
    </Link>
  );
};
