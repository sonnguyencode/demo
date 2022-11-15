import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import official from "../../assets/image/official.png";
import "../../assets/style/productDetail.scss";
import cartSlide, { getTotals } from "../redux/shopCart/cartItemSlide";

// import { Button } from "bootstrap";
import { colors } from "../constans/color";
// import cartItemSlide, { addToCart } from "../redux/shopCart/cartItemSlide";
const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();

  const [data, setData] = useState(null);

  const [color, setColor] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())

      .then((data) => setData(data));
  }, [id]);
  // console.log("----data", data);
  let navigate = useNavigate();
  const handleBackData = () => {
    navigate(-1);
  };
  const gotoCart = () => {
    if (check()) {
      dispatch(
        cartSlide.actions.addToCart({
          color: color,
          quantity: quantity,
          data: data,
          id: data.id,
        })
      );
      navigate("/cart");
    }
  };
  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    return true;
  };
  const handleAddToCart = (data) => {
    if (check()) {
      dispatch(
        cartSlide.actions.addToCart({
          color: color,
          quantity: quantity,
          data: data,
          id: data.id,
        })
      ) && dispatch(getTotals());

      alert("Success");
    } else {
      alert("Fail");
    }
  };

  function changeImage() {
    var container = document.getElementById("main-image");

    container.src = data.image;
  }

  function changeNewImage() {
    var container = document.getElementById("main-image");

    container.src = official;
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {" "}
                      {data && (
                        <img
                          id="main-image"
                          src={data.image}
                          alt="anhmau"
                          width="290"
                          height="350"
                        />
                      )}{" "}
                    </div>
                    <div className="thumbnail text-center">
                      {" "}
                      {data && (
                        <img
                          onClick={changeImage}
                          src={data.image}
                          width="70"
                        />
                      )}{" "}
                      <img
                        onClick={changeNewImage}
                        src={official}
                        width="70"
                      ></img>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        onClick={handleBackData}
                        className="d-flex align-items-center"
                      >
                        {" "}
                        <i className="fa fa-long-arrow-left"></i>{" "}
                        <span className="ml-1">Back</span>{" "}
                      </div>{" "}
                      <i className="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div className="mt-4 mb-3">
                      {" "}
                      <span className="text-uppercase text-muted brand">
                        Orianz
                      </span>
                      {data && <h5 className="text-uppercase">{data.title}</h5>}
                      <div className="price d-flex flex-row align-items-center">
                        {" "}
                        {data && (
                          <span className="act-price">{data.price}</span>
                        )}
                        <div className="ml-2">
                          {" "}
                          <small className="dis-price">$70</small>{" "}
                          <span>40% OFF</span>{" "}
                        </div>
                      </div>
                    </div>
                    {data && <p className="about">{data.description}</p>}

                    <div className="sizes mt-5">
                      <h6 className="text-uppercase">Color</h6>{" "}
                      <div className="product__info__item__list">
                        {colors.map((item, index) => (
                          <div
                            key={index}
                            className={`product__info__item__list__item ${
                              color === item.color ? "active" : ""
                            }`}
                            onClick={() => setColor(item.color)}
                          >
                            <div className={`circle bg-${item.color}`}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="quantity">Số lượng</p>
                    <div className="product__info__item__quantity">
                      <div
                        className="product__info__item__quantity__btn"
                        onClick={() => updateQuantity("minus")}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <div className="product__info__item__quantity__input">
                        {quantity}
                      </div>
                      <div
                        className="product__info__item__quantity__btn"
                        onClick={() => updateQuantity("plus")}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button
                        className="btn btn-danger text-uppercase mr-2 px-4"
                        onClick={gotoCart}
                      >
                        Add to cart
                      </button>{" "}
                      <button
                        className="btn btn-danger text-uppercase mr-2 px-4"
                        onClick={() => handleAddToCart(data)}
                      >
                        Thêm vào giỏ hàng
                      </button>{" "}
                      <i className="fa fa-heart text-muted"></i>{" "}
                      <i className="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
