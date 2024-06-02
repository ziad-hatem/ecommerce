import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
const UserAddressCard = () => {
    return (
        <>
        <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">Ev</h6>
          <h6 className="text-black mb-0">varilen adres</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">Telefon Numarası</h6>
          <h6 className="text-black mb-0">0123456789</h6>
        </div>
       
        <div className="col-md-1 col-lg-1 col-xl-1 d-grid gap-3 text-end">
          <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
          <Link to="/user/edit-address" style={{ textDecoration: "none" }}>   
            <a href="#!" className="text-muted"><i class="fas fa-pen"></i></a>
          </Link>
        </div>
        
      </div>
      
      <hr className="my-4" />
      </>
        // <div className="user-address-card my-3 px-2">
        //     <Row className="d-flex justify-content-between  ">
        //         <Col xs="1">
        //             <div className="p-2">Ev</div>
        //         </Col>
        //         <Col xs="4" className="d-flex d-flex justify-content-end">
        //             <div className="d-flex p-2">
        //                 <div className="d-flex mx-2">
        //                     <img
        //                         alt=""
        //                         className="ms-1 mt-2"
        //                         src={deleteicon}
        //                         height="17px"
        //                         width="15px"
        //                     />
        //                     <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
        //                         <p className="item-delete-edit"> Değiştir</p>
        //                     </Link>
        //                 </div>
        //                 <div className="d-flex ">
        //                     <img
        //                         alt=""
        //                         className="ms-1 mt-2"
        //                         src={deleteicon}
        //                         height="17px"
        //                         width="15px"
        //                     />
        //                     <p className="item-delete-edit"> Sil</p>
        //                 </div>
        //             </div>
        //         </Col>
        //     </Row>

        //     <Row>
        //         <Col xs="12">
        //             <div
        //                 style={{
        //                     color: "#555550",
        //                     fontFamily: "Almarai",
        //                     fontSize: "14px",
        //                 }}>
        //                 varilen adres
        //             </div>
        //         </Col>
        //     </Row>

        //     <Row className="mt-3">
        //         <Col xs="12" className="d-flex">
        //             <div
        //                 style={{
        //                     color: "#555550",
        //                     fontFamily: "Almarai",
        //                     fontSize: "16px",
        //                 }}>
        //                 Telefon Numarası:
        //             </div>

        //             <div
        //                 style={{
        //                     color: "#979797",
        //                     fontFamily: "Almarai",
        //                     fontSize: "16px",
        //                 }}
        //                 className="mx-2">
        //                 0021313432423
        //             </div>
        //         </Col>
        //     </Row>
        // </div>
    )
}

export default UserAddressCard
