import React from "react";
import Layout from "../../components/layout/Layout";
import ProductHome  from "./ProductHome";
import  Slider from "./Slider";

const HomePage = () => {
  return (
    <Layout>
      <Slider/>
      <ProductHome />
      

    </Layout>
  );
};

export default HomePage;
