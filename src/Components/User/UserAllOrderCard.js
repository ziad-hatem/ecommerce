import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
const UserAllOrderCard = () => {
    return (
        <>
        
      <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img src={mobile} className="img-fluid rounded-3" alt="Cotton T-shirt" />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">Shirt</h6>
        <h6 className="text-black mb-0">Cotton T-shirt</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2">
          <i className="fas fa-minus" style={{color:'#1ececa'}}></i>
        </button>
        <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-control form-control-sm" />
        <button className="btn btn-link px-2">
          <i className="fas fa-plus" style={{color:'#1ececa'}}></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">4.5</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
      </div>
      
    </div>
    

    <hr className="my-4" />
    </>
        // <div>
        //     <Row className="d-flex mb-2">
        //         <Col xs="3" md="2" className="d-flex justify-content-start">
        //             <img width="93px" height="120px" src={mobile} alt="" />
        //         </Col>
        //         <Col xs="8" md="6">
        //             <div className="d-inline pt-2 cat-title">
        //                 ürün açıklaması
        //             </div>
        //             <div className="d-inline pt-2 cat-rate me-2">4.5</div>
        //             <div className="rate-count d-inline p-1 pt-2">(160 değerlendirme)</div>
        //             <div className="mt-3">
        //                 <div className="cat-text  d-inline">Adet</div>
        //                 <input
        //                     className="mx-2 "
        //                     type="number"
        //                     style={{ width: "40px", height: "25px" }}
        //                 />
        //             </div>
        //         </Col>
        //     </Row>
        // </div>
    )
}

export default UserAllOrderCard
