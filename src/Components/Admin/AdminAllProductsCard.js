import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
const AdminAllProductsCard = () => {
    return (
        <div className="col-md-12 col-lg-3 mb-4 mt-4 mb-lg-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <div className="d-inline item-delete-edit">Sil</div>
            <div className="d-inline item-delete-edit">Değiştir</div>
          </div>
          <Link to="/products/:id" style={{ textDecoration: 'none' }}>
          <img src={prod1} className="card-img-top" alt="Laptop" />
          </Link>
          <div className="card-body">
            {/* <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
              <p className="small text-danger"><s>1099 TL</s></p>
            </div> */}
  
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">HP Notebook</h5>
              <h5 className="text-dark mb-0">999TL</h5>
            </div>
  
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0"><span className="fw-bold">4.5 </span></p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        // <Col xs="12" sm="6" md="5" lg="3" className="d-flex">
        //     <Card
        //         className="my-2"
        //         style={{
        //             width: "100%",
        //             height: "350px",
        //             borderRadius: "8px",
        //             border: "none",
        //             backgroundColor: "#FFFFFF",
        //         }}>
        //         <Row className="d-flex justify-content-center px-2">
        //             <Col className=" d-flex justify-content-between">
        //                 <div className="d-inline item-delete-edit">Sil</div>
        //                 <div className="d-inline item-delete-edit">Değiştir</div>
        //             </Col>
        //         </Row>
        //         <Link to="/products/:id" style={{ textDecoration: "none" }}>
        //             <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
        //             <Card.Body>
        //                 <Card.Title>
        //                     <div className="card-title">
        //                         açıklama
        //                     </div>
        //                 </Card.Title>
        //                 <Card.Text>
        //                     <div className="d-flex justify-content-between">
        //                         <div className="d-flex">
        //                             <div className="card-price">880 TL</div>
        //                             {/* <div className="card-currency mx-1">TL</div> */}
        //                         </div>
        //                         <div className="card-rate mt-1">4.5</div>

        //                     </div>
        //                 </Card.Text>
        //             </Card.Body>
        //         </Link>
        //     </Card>
        // </Col>
    )
}

export default AdminAllProductsCard
