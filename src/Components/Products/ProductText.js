import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/products/ViewProductDetailsHook";
import useCart from "../../hook/cart/useCart";
import { Alert, Button, Spinner } from "react-bootstrap";
import useWishList from "../../hook/wishlist/useWishList";

const ProductText = () => {
  const { id } = useParams();
  const [item, loading, errors] = ViewProductDetailsHook(id);
  const { postWishList } = useWishList();
  // console.log(item);
  //! bizim API'de direkt category'ye erisebiliyoruz, ekstra islemlere gerek yok :)
  const {
    cartItems,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    fetchCart,
    error,
    addLoading,
  } = useCart();
  const handleAddToWishlist = (productId) => {
    // Implement the logic to add the product to the wishlist
    postWishList({ productId });
  };
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  if (errors) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Alert variant="danger">{errors}</Alert>
      </div>
    );
  }
  return (
    <main className="col-lg-12">
      <div className="ps-lg-3">
        <h4 className="title text-dark">{item.name}</h4>
        <span className="h3">{item.price} TL</span>

        <div className="d-flex flex-row my-3">
          <div className="text-warning mb-1 me-2">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="ms-1">{item.ratingsAverage}</span>
          </div>
        </div>

        <p>{item.description}</p>

        <div className="row mb-4 d-flex justify-content-between align-items-center">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">katagori</h6>
            <h6 className="text-black mb-0">Çanta</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">Marka</h6>
            <h6 className="text-black mb-0">Reebook</h6>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">renkler</h6>
            <div className="d-flex justify-content-start">
              <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C" }}
              ></div>
              <div
                className="color ms-2 border "
                style={{ backgroundColor: "white" }}
              ></div>
              <div
                className="color ms-2 border"
                style={{ backgroundColor: "black" }}
              ></div>
            </div>
            {/* <h6 className="text-black mb-0">Reebook</h6> */}
          </div>

          <div className="col-md-1 col-lg-1 col-xl-1 d-grid gap-3 text-end">
            {/* <Link to="/user/edit-address" style={{ textDecoration: "none" }}>    */}
            {/* <a href="#!" className="text-muted"><i class="fas fa-pen"></i></a> */}
            {/* </Link> */}
          </div>
        </div>

        <hr className="my-4" />
        <div className="mb-3 d-grid">
          <button
            type="button"
            className="btn btn-lg"
            style={{ background: "#1ececa", color: "white" }}
            onClick={() => addToCart(id)}
            disabled={addLoading}
          >
            {addLoading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Sepete Ekle"
            )}
          </button>
        </div>
        <div className="mb-3 d-grid">
          <button
            type="button"
            className="btn btn-lg"
            style={{ background: "#ff4081", color: "white" }}
            onClick={() => handleAddToWishlist(id)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </main>
    //     <div>
    //   <Row className="mt-2">
    //     <div className="cat-text">Çanta</div>
    //   </Row>
    //   <Row>
    //     <Col md="8">
    //       <div className="cat-title d-inline">
    //         Ürün bilgileri
    //         <div className="cat-rate d-inline mx-3">4.5</div>
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md="8" className="mt-4">
    //       <div className="cat-text d-inline">markası:</div>
    //       <div className="barnd-text d-inline mx-1"> marka2 </div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md="8" className="mt-1 d-flex">
    //       <div
    //         className="color ms-2 border"
    //         style={{ backgroundColor: "#E52C2C" }}></div>
    //       <div
    //         className="color ms-2 border "
    //         style={{ backgroundColor: "white" }}></div>
    //       <div
    //         className="color ms-2 border"
    //         style={{ backgroundColor: "black" }}></div>
    //     </Col>
    //   </Row>

    //   <Row className="mt-4">
    //     <div className="cat-text">Ürün Özellikleri</div>
    //   </Row>
    //   <Row className="mt-2">
    //     <Col md="10">
    //       <div className="product-description d-inline">
    //         .....bilgiler....
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row className="mt-4">
    //     <Col md="12">
    //       <div className="product-price d-inline px-3 py-3 border">34000 TL</div>
    //       <div className="product-cart-add px-3 py-3 d-inline mx-3">Sepete Ekle</div>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default ProductText;
