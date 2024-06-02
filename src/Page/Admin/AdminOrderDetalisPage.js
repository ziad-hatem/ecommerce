import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitily/Pagination";
import AdminOrderDetalis from "../../Components/Admin/AdminOrderDetalis";
const AdminOrderDetalisPage = () => {
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
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            #55 Numaralı Sipariş ayrıntıları
                          </h1>
                        </div>
                        <hr className="my-4" />
                        {/* Shopping items */}
                        {/* You can include the shopping items using Bootstrap grid system and classes */}
                        <AdminOrderDetalis />
                      </div>
                    </div>
                    <AdminSideBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
    // <Container >
    //     <Row className='py-3'>
    //         <Col sm="3" xs="2" md="2">
    //             <AdminSideBar />
    //         </Col>

    //         <Col sm="9" xs="10" md="10">
    //             <AdminOrderDetalis />
    //         </Col>
    //     </Row>
    // </Container>
  );
};

export default AdminOrderDetalisPage;
