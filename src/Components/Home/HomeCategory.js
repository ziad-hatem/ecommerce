import React from "react";
import { Container, Row } from "react-bootstrap";
// import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from "./../Category/CategoryCard";
// import clothe from "../../images/clothe.png";
// import cat2 from "../../images/cat2.png";
// import labtop from "../../images/labtop.png";
// import sale from "../../images/sale.png";
// import pic from "../../images/pic.png";

const HomeCategory = () => {
  return (
    <Container style={{ background: "white" }}>
      {/* <SubTiltle title="Kategoriler" btntitle="Daha fazla" pathText="/allcategory" /> */}
      <Row className="my-2 d-flex justify-content-between mt-0 ">
        <CategoryCard title="Çanta" />
        <CategoryCard title="Giyim" />
        <CategoryCard title="Aksesuar" />
        <CategoryCard title="Ev yaşam" />
        <CategoryCard title="Kırtasiye" />
        <CategoryCard title="Giyim" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
