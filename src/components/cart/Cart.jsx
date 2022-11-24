import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Outlet, useNavigate } from "react-router-dom";
import "../../assets/style/shopcart.scss";
import Layout from "../layout/Layout";
import cartSlide, { changeProduct, getTotals } from "../redux/shopCart/cartItemSlide";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);


  let totalPrice = 0;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  

  const handleBackHome = () => {
    navigate("/");
  };
 

  
  useEffect(() => {
    dispatch(getTotals());
    // dispatch(changeProduct())
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
     setCartItems(cartItems)
    }
    console.log("set",cartItems);
    
   
  }, [cart]);

  // console.log("cart", cart);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(cartSlide.actions.removeProduct(item));
  };

  return (
    <Layout>
      <Outlet></Outlet>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p className="empty">Giỏ hàng của bạn đang trống</p>
            <div className="d-flex justify-content-between align-items-center empty">
              <div
                onClick={handleBackHome}
                className="d-flex align-items-center"
              >
                {" "}
                <i className="fa fa-long-arrow-left"></i>{" "}
                <span className="ml-1">Tiếp tục mua sắm</span>{" "}
              </div>{" "}
            </div>
          </div>
        ) : (
          <>
            <div className=" container-fluid my-5 ">
              <div className="row justify-content-center ">
                <div className="col-xl-10">
                  <div className="card shadow-lg ">
                    <div className="row justify-content-around">
                      <div className="col-md-5">
                        <div className="card border-0">
                          <div className="card-header pb-0">
                            <div className="d-flex justify-content-between align-items-center">
                              <div
                                onClick={handleBack}
                                className="d-flex align-items-center"
                              >
                                {" "}
                                <i className="fa fa-long-arrow-left"></i>{" "}
                                <span className="ml-1">Back</span>{" "}
                              </div>{" "}
                            </div>

                            <hr className="my-0" />
                          </div>
                          <div className="card-body">
                            <div className="row mt-4">
                              <div className="col">
                                <p className="card-text text-muted mt-md-4  mb-2 space">
                                  Thông tin vận chuyển
                                </p>
                                <hr className="mt-0" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label
                                for="NAME"
                                className="small text-muted mb-1"
                              ></label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                name="NAME"
                                id="NAME"
                                aria-describedby="helpId"
                                placeholder="Họ và tên"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                for="NAME"
                                className="small text-muted mb-1"
                              ></label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                name="NAME"
                                id="NAME"
                                aria-describedby="helpId"
                                placeholder="Số điện thoại"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                for="NAME"
                                className="small text-muted mb-1"
                              ></label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                name="NAME"
                                id="NAME"
                                aria-describedby="helpId"
                                placeholder="Địa chỉ(VD:145 Cổ nhuế,Phường Cổ Nhuế)"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                for="NAME"
                                className="small text-muted mb-1"
                              ></label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                name="NAME"
                                id="NAME"
                                aria-describedby="helpId"
                                placeholder="Ghi chú thêm (Thời gian giao hàng)"
                              />
                            </div>

                            <div className="colum">
                                <button
                                  type="button"
                                  name=""
                                  id=""
                                  className="btn  btn-lg btn-block "
                                >
                                  <span>LƯU</span>
                                  
                                </button>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="card border-0 ">
                          <div className="card-header card-2">
                            <p className="card-text text-muted mt-md-4  mb-2 space">
                              GIỎ HÀNG CỦA BẠN{" "}
                            </p>
                            <hr className="my-2" />
                          </div>
                          {cartItems?.map((item,id) => {
                            totalPrice += item.data.price * item.quantity;

                            return (
                              <div
                                className="card-body pt-0"
                                key={item.data.index}
                              >
                                <div className="row  justify-content-between">
                                  <div className="col-auto col-md-7">
                                    <div className="media flex-column flex-sm-row">
                                      <img
                                        className=" img-fluid"
                                        src={item.data.image}
                                        width="40"
                                        height="40"
                                      />
                                      <div className="media-body  my-auto">
                                        <div className="row ">
                                          <div className="col-auto">
                                            <p className="mb-0">
                                              <b>{item.data.title}</b>
                                            </p>
                                            <small className="text-muted">
                                              Color: {item.color}
                                            </small>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <div className="product__info__item__quantity">
                                {/* <div
                                  className="product__info__item__quantity__btn"
                                  onClick={() => updateQuantity("minus")}
                                >
                                  <i className="fa-solid fa-minus"></i>
                                </div>
                                <div className="product__info__item__quantity__input">
                                  {item.cartQuantity}
                                </div>
                                <div
                                  className="product__info__item__quantity__btn"
                                  onClick={() => updateQuantity("plus")}
                                >
                                  <i className="fa-solid fa-plus"></i>
                                </div> */}

                                  <div className=" pl-0 flex-sm-col col-auto  my-auto">
                                    {" "}
                                    <p className="boxed-1">
                                      {item.quantity}
                                    </p>
                                  </div>
                                  <div className=" pl-0 flex-sm-col col-auto  my-auto ">
                                    <p>
                                      <b>
                                        ${item.data.price * item.quantity}
                                      </b>
                                    </p>
                                    <i
                                      onClick={() => handleRemove(item)}
                                      className="fa-solid fa-trash-can"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          <div className="row ">
                            <div>
                              <div className="row justify-content-between">
                                <div className="col-4">
                                  <p>
                                    <b>Total</b>
                                  </p>
                                </div>
                                <div className="flex-sm-col col-auto">
                                  <p className="mb-1">
                                    <b>${totalPrice}</b>
                                  </p>{" "}
                                </div>
                              </div>
                              <div className="colum">
                                <button
                                  type="button"
                                  name=""
                                  id=""
                                  className="btn  btn-lg btn-block "
                                >
                                  THANH TOÁN
                                </button>
                              </div>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
export default Cart;
