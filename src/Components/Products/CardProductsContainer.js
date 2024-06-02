import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <Container
      className="py-4 p-5 mb-2"
      style={{ background: "white", borderRadius: "25px" }}
    >
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-4 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
