import React from "react";
import { Card, Col } from "react-bootstrap";
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <div className="col-md-12 col-lg-3 mb-4 mb-3 mb-lg-0">
      <div className="card">
        {/* <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Combo Offer</p>
            <div className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{ width: "35px", height: "35px" }}>
              <p className="text-white mb-0 small">x4</p>
            </div>
          </div> */}
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <img src={prod1} className="card-img-top" alt="Laptop" />
        </Link>
        <div className="card-body">
          {/* <div className="d-flex justify-content-between">
              <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
              <p className="small text-danger"><s>1099 TL</s></p>
            </div> */}

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{item.name}</h5>
            <h5 className="text-dark mb-0">{item.price}</h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              <span className="fw-bold">{item.ratingsAverage}</span>
            </p>
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

    // <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

    //     <Card
    //         className="my-2"
    //         style={{
    //             width: "100%",
    //             height: "345px",
    //             borderRadius: "8px",
    //             border: "none",
    //             backgroundColor: "#FFFFFF",
    //             boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
    //         }}>
    //         <Link to="/products/:id" style={{ textDecoration: 'none' }}>
    //             <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
    //         </Link>
    //         <div className="d-flex justify-content-end mx-2">
    //             <img
    //                 src={favoff}
    //                 alt=""
    //                 className="text-center"
    //                 style={{
    //                     height: "24px",
    //                     width: "26px",
    //                 }}
    //             />
    //         </div>
    //         <Card.Body>
    //             <Card.Title>
    //                 <div className="card-title">
    //                     burda urunun adı yazılacak {" "}
    //                 </div>
    //             </Card.Title>
    //             <Card.Text>
    //                 <div className="d-flex justify-content-between ">
    //                     <div className="d-flex">
    //                         <img
    //                             className=""
    //                             src={rate}
    //                             alt=""
    //                             height="16px"
    //                             width="16px"
    //                         />
    //                         <div className="card-rate mx-2">4.5</div>
    //                     </div>
    //                     <div className="d-flex">
    //                         <div className="card-price">880</div>
    //                         <div className="card-currency mx-1">TL</div>
    //                     </div>
    //                 </div>
    //             </Card.Text>
    //         </Card.Body>
    //     </Card>
    // </Col>
  );
};

export default ProductCard;
