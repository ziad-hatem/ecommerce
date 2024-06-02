import React, { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import CartCheckout from "../../Components/Cart/CartCheckout";
import useCart from "../../hook/cart/useCart";
import CartItem from "../../Components/Cart/CartItem";
import { ToastContainer } from "react-toastify";
import useWishList from "../../hook/wishlist/useWishList";
import WishListItem from "../../Components/WishList/WishListItem";

const WishList = () => {
  const {
    fetchWishLists,
    wishLists,
    loading,
    error,
    removeFromWishList,
    moveToCart,
  } = useWishList();

  useEffect(async () => {
    fetchWishLists();
  }, []);
  console.log(wishLists);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container style={{ minHeight: "670px" }}>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Sepet</h1>
                        </div>
                        <hr className="my-4" />
                        {wishLists.map((item, index) => {
                          return (
                            <WishListItem
                              key={item._id}
                              item={item}
                              removeFromWishList={removeFromWishList}
                              moveToCart={moveToCart}
                            />
                          );
                        })}
                        {/* {cartItems.map((item) => (
                          <CartItem
                            key={item._id}
                            item={item}
                            product={item}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                          />
                        ))} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WishList;
