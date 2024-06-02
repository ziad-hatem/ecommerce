import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
const AdminAllOrdersItem = ({ order }) => {
  console.log(order);
  return (
    <>
      <Link to="/admin/orders/23" style={{ textDecoration: "none" }}>
        <div className="row mb-4 d-flex justify-content-between align-items-center">
          <h6 className="text-muted mb-4">Sipariş numarası #2321</h6>
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={mobile}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">Shirt</h6>
            <h6 className="text-black mb-0">Cotton T-shirt</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button className="btn btn-link px-2">
              <i className="fas fa-minus" style={{ color: "#1ececa" }}></i>
            </button>
            <input
              id="form1"
              min="0"
              name="quantity"
              defaultValue="1"
              type="number"
              className="form-control form-control-sm"
            />
            <button className="btn btn-link px-2">
              <i className="fas fa-plus" style={{ color: "#1ececa" }}></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 className="text-black mb-0">400,00 TL</h6>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" className="text-muted">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
      </Link>

      <hr className="my-4" />
    </>
    // <Col sm="12">
    //     <Link
    //         to="/admin/orders/23"
    //         className="cart-item-body my-2 px-1 d-flex"
    //         style={{ textDecoration: "none" }}>
    //         <img width="160px" height="197px" src={mobile} alt="" />
    //         <div className="w-100">
    //             <Row className="justify-content-between">
    //                 <Col sm="12" className=" d-flex flex-row justify-content-between">
    //                     <div className="d-inline pt-2 cat-text">Sipariş numarası #2321</div>
    //                     <div className="d-inline pt-2 cat-text mx-2">Sil</div>
    //                 </Col>
    //             </Row>
    //             <Row className="justify-content-center mt-2">
    //                 <Col sm="12" className=" d-flex flex-row justify-content-start">
    //                     <div className="d-inline pt-2 cat-title">
    //                         açıklama
    //                     </div>
    //                     {/* <div className="d-inline pt-2 cat-rate mx-2">4.5</div> */}
    //                 </Col>
    //             </Row>
    //             {/* <Row>
    //                 <Col sm="12" className=" d-flex">
    //                     <div className="mt-2  cat-text d-inline">Markası:</div>
    //                     <div className="mt-1 barnd-text d-inline mx-1">Marka 1 </div>
    //                     <div
    //                         className="color  me-1 border"
    //                         style={{ backgroundColor: "#E52C2C" }}></div>
    //                 </Col>
    //             </Row> */}

    //             <Row className="justify-content-between">
    //                 <Col sm="12" className=" d-flex flex-row justify-content-between">
    //                     <div className="d-inline pt-2 d-flex">
    //                         {/* <div className="cat-text pt-1 d-inline">Adet</div> */}
    //                         <button style={{border: "none", borderRadius: "5px 0px 0px 5px"}}>-</button>
    //                         <input
    //                             // className="mx-2 mt-1"
    //                             type="number"
    //                             min="1"
    //                             step="1"
    //                             style={{ width: "40px", height: "30px", border:"none" }}
    //                         />
    //                         <button style={{border: "none", borderRadius: "0px 5px 5px 0px"}}>+</button>
    //                     </div>
    //                     <div className="d-inline pt-2 barnd-text mx-2">3000TL</div>
    //                 </Col>
    //             </Row>
    //         </div>
    //     </Link>
    // </Col>
  );
};

export default AdminAllOrdersItem;
