import React, { useState } from "react";
import mobile from "../../images/mobile.png";

const CartItem = ({
  item,
  product,
  updateQuantity,
  removeFromCart,
  setRefresh,
  refresh,
}) => {
  const [quantity, setQuantity] = useState(item.count);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);

    setQuantity(newQuantity);
    updateQuantity(item.product._id, newQuantity);
  };

  const handleRemoveItem = () => {
    removeFromCart(item.product._id);
  };

  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={mobile}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">{item.name}</h6>
          <h6 className="text-black mb-0">Cotton T-shirt</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className="btn btn-link px-2"
            onClick={() => {
              const newQuantity = quantity - 1;
              setQuantity(newQuantity);
              updateQuantity(item.product._id, newQuantity);
            }}
          >
            <i className="fas fa-minus" style={{ color: "#1ececa" }}></i>
          </button>
          <input
            id="form1"
            value={quantity}
            onChange={handleQuantityChange}
            type="number"
            className="form-control form-control-sm"
          />
          <button
            className="btn btn-link px-2"
            onClick={() => {
              const newQuantity = quantity + 1;
              setQuantity(newQuantity);
              updateQuantity(item.product._id, newQuantity);
            }}
          >
            <i className="fas fa-plus" style={{ color: "#1ececa" }}></i>
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">{item.price} TL</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <div
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={handleRemoveItem}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
};

export default CartItem;
