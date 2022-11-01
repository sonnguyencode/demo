import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from '../../components/product/Product';


export const Women = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const getProducts = (count) => {
    const max = data.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return data.slice(start, start + count);
  };
  const productData = { getProducts };
  const renderApi = () => {
    return productData.getProducts(4).map((item, i) => <Product item={item} />);
  };
  return (
    <div className="product">
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="container-product">
          <div className="list-product">{renderApi()} </div>
        </div>
      )}
    </div>
  );
};
