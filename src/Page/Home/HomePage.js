import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
// import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from "./../../Components/Home/Silder";
import DiscountSection from "./../../Components/Home/DiscountSection";
import ViewHomeProductsHook from "./../../hook/products/ViewHomeProductsHook";

// import BrandFeatured from '../../Components/Brand/BrandFeatured';
// import Footer from '../../Components/Uitily/Footer';
const HomePage = () => {
  const [items] = ViewHomeProductsHook();
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
