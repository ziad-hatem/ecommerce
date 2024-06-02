import React from "react";
import { Card, Button } from "react-bootstrap";

const WishListItem = ({ item, removeFromWishList, moveToCart }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
            className="me-3"
          />
          <div>
            <h5 className="mb-1">{item.name}</h5>
            <p className="mb-1">{item.price} TL</p>
          </div>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => moveToCart(item._id)}
            className="me-2"
          >
            Move to Cart
          </Button>
          <Button variant="danger" onClick={() => removeFromWishList(item._id)}>
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WishListItem;
