import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../components/product/Product";

export const Electronic = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get(
            "https://fakestoreapi.com/products/category/electronics"
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
      return productData.getProducts(4).map((item, i) => <Product key={i} item={item} />);
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
}
