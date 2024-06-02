import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartCheckout = ({ total }) => {
  return (
    <div className="col-lg-4 bg-grey">
      <div className="p-5">
        <h3 className="fw-bold mb-5 mt-2 pt-1">Sepet Özeti</h3>
        <hr className="my-4" />
        <h5 className="text-uppercase mb-3">İNDİRİM KODU GİR</h5>

        <div className="mb-5">
          <div className="form-outline">
            <input
              type="text"
              id="form3Examplea2"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Examplea2">
              Enter your code
            </label>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-5">
          <h5 className="text-uppercase">Toplam</h5>
          <h5>{total} TL</h5>
        </div>

        <Link to="/order/paymethoud">
          <button
            type="button"
            className="btn btn-dark btn-block btn-lg"
            style={{ backgroundColor: "#1ececa", border: "none" }}
          >
            Sepeti Onayla
          </button>
        </Link>
      </div>
    </div>
    // <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
    //     <Col xs="12" className="d-flex  flex-column  ">
    //         <div className="d-flex  ">
    //             <input
    //                 className="copon-input d-inline text-center "
    //                 placeholder="indirim kodu"
    //             />
    //             <button className="copon-btn d-inline ">Uygula</button>
    //         </div>
    //         <div className="product-price d-inline w-100 my-3  border">34000 TL</div>
    //         <Link
    //             to="/order/paymethoud"
    //             style={{ textDecoration: "none" }}
    //             className="product-cart-add  d-inline ">
    //             <button className="product-cart-add w-100 px-2"> SipariŞi Tamamla </button>
    //         </Link>
    //     </Col>
    // </Row>
  );
};

export default CartCheckout;
