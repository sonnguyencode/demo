import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "../../assets/style/productpage.scss";
import Layout from "../../components/layout/Layout";
import navProduct from "../../components/constans/navProduct"

export default function ProductPage() {
  const location = useLocation();
  console.log(("location"),location);

  const renderProduct = () => {
    
  

    return navProduct.map((item, i) => (
      <Link
        className={`nav-product ${
          location.pathname === item.path ? "active" : ""
        }`}
        to={item.path}
        key={i}
      >
        <span>{item.display}</span>
      </Link>
    ));
  };
  return (
    <>
      <Layout>
       
       <div className="container"> {renderProduct()}</div>
        <Outlet />
      </Layout>
    </>
  );
}
