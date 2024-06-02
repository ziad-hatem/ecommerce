import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
// import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from "./../../Components/Home/Silder";
import DiscountSection from "./../../Components/Home/DiscountSection";
import ViewHomeProductsHook from "./../../hook/products/ViewHomeProductsHook";
import { Alert, Spinner } from "react-bootstrap";

// import BrandFeatured from '../../Components/Brand/BrandFeatured';
// import Footer from '../../Components/Uitily/Footer';
const HomePage = () => {
  const [items, loading, error] = ViewHomeProductsHook();

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

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <HomeCategory />
      <Silder />
      <DiscountSection />

      <CardProductsContainer
        products={items}
        title="En çok satanlar"
        btntitle="Daha fazla"
        pathText="/products"
      />
      {/* <DiscountSection /> */}
      <CardProductsContainer
        products={items}
        title="yeni ürünler"
        btntitle="Daha fazla"
        pathText="/products"
      />
      {/* <BrandFeatured title="markalar" btntitle="Daha fazla"  /> */}
    </div>
  );
};

export default HomePage;
