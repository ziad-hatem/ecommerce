import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetalis from "../../Components/Products/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";

const ProductDetalisPage = () => {
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
                    <div className="col-lg-12">
                      <div className="p-5">
                        {/* <hr className="my-4" /> */}
                        {/* Shopping items */}
                        {/* You can include the shopping items using Bootstrap grid system and classes */}
                        <CategoryHeader />
                        <Container>
                          <ProductDetalis />
                          <RateContainer />
                          <CardProductsContainer title="İlgini Çekebilecek Koleksiyonlar" />
                        </Container>
                      </div>
                    </div>
                    {/* <CartCheckout /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
    // <div style={{ minHeight: '670px' }}>
    //     <CategoryHeader />
    //     <Container>
    //         <ProductDetalis />
    //         <RateContainer />
    //         <CardProductsContainer title="İlgini Çekebilecek Koleksiyonlar" />
    //     </Container>
    // </div>
  );
};

export default ProductDetalisPage;
