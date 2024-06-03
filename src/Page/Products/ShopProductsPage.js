import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import ViewSearchProductsHook from "../../hook/products/ViewSearchProductsHook";
import useFilterContext from "../../context/filter_Context";

const ShopProductsPage = () => {
  const { filtered_Products } = useFilterContext();
  // if (pagination) var pageCount = pagination;
  // else pageCount = 0;

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
                        <SearchCountResult title="Arama sonucu" />

                        <Container>
                          <div>
                            <Row>
                              <Col lg="2" className="py-5">
                                <SideFilter />
                              </Col>

                              <Col lg="10">
                                <CardProductsContainer
                                  products={filtered_Products}
                                  title=""
                                  btntitle=""
                                />
                              </Col>
                            </Row>
                          </div>
                        </Container>
                      </div>
                    </div>
                    {/* <CartCheckout /> */}
                  </div>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
    //     <Container style={{ minHeight: '670px' }}>
    //     <section className="h-100 h-custom">
    //     <div className="container py-5 h-100">
    //       <div className="row justify-content-center align-items-center h-100">
    //         <div className="col-12">
    //           <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
    //             <div className="card-body p-0">
    //               <div className="row g-0">
    //                 <div className="col-lg-12">
    //                   <div className="p-5">
    //                   <CategoryHeader />
    //                     <div className="d-flex justify-content-between align-items-center mb-5">
    //                       {/* <h1 className="fw-bold mb-0 text-black">Yeni katagori ekle</h1> */}
    //                       <SearchCountResult title="Arama sonucu" />

    //                     </div>
    //                     <hr className="my-4" />
    //                     {/* Shopping items */}
    //                     {/* You can include the shopping items using Bootstrap grid system and classes */}
    //                     <CardProductsContainer title="" btntitle=""/>
    //                     <SideFilter />
    //                   </div>

    //                 </div>

    //                 <Pagination />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </section>
    //   </Container>

    // <div style={{ minHeight: '670px' }}>
    //     <CategoryHeader />
    //     <Container>
    //         <SearchCountResult title="Arama sonucu" />
    //         <Row className='d-flex flex-row'>
    //             <Col sm="2" xs="2" md="1" className='d-flex'>
    //                 <SideFilter />
    //             </Col>
    //             <Col sm="10" xs="10" md="11">
    //                  <CardProductsContainer title="" btntitle=""/>
    //             </Col>
    //         </Row>
    //             <Pagination />
    //     </Container>
    // </div>
  );
};

export default ShopProductsPage;
