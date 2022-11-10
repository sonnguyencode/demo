import React from "react";
import sale from "../../assets/image/sale.webp";
import "../../assets/style/producthome.scss";
import useFetchData from "../../components/header/FechData";
import { Loading } from "../../components/loading/Loading";
import { Product } from "../../components/product/Product";
const ProductHome = () => {
  const { data, loading } = useFetchData();
  
  const getProducts = (count) => {
    const max = data.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return data.slice(start, start + count);
  };
  const productData = { getProducts };

  const renderApi = () => {
    return productData.getProducts(4).map((item) => <Product key={item.id} item={item} />);
  };
  const newProduct = () => {
    return productData.getProducts(8).map((item) => <Product key={item.id} item={item} />);
  };
  return (
    <div className="product">
      <h2 className="title-product">Sản phẩm bán chạy trong tuần</h2>
      {loading && <div><Loading/></div> }
      {loading ?  <div><Loading/></div> : (
        <div className="container-product">
          <div className="list-product">{renderApi()} </div>
        </div>
      )}
      <h2 className="title-product">Sản phẩm mới</h2>
      {loading && <div>Loading....</div>}
      {!loading && (
        <div className="container-product">
          <div className="list-product">{newProduct()} </div>
        </div>
      )}
      <img className="banner" src={sale} alt="" />
      <h3 className="title-product">Sản phẩm phổ biến</h3>
      {loading && <div>Loading....</div>}
      {!loading && (
        <div className="container-product">
          <div className="list-product">{newProduct()} </div>
        </div>
      )}
    </div>
  );
};

export default ProductHome;
