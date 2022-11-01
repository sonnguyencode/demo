import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from '../../components/product/Product';


const MenClothing = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const renderApi = () => {
    return data.map((item,index) => <Product key={index} item={item} />);
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

export default MenClothing;
