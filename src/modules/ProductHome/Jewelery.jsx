import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from '../../components/product/Product';


export const Jewelery = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get(
            "https://fakestoreapi.com/products/category/jewelery"
          );
          setData(response);
          console.log("jc", response);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);
    const renderApi = () => {
      return data.map((item) => (
        <Product item={item} />
      ));
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
