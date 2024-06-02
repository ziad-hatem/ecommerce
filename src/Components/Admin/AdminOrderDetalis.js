import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import useOrder from "../../hook/order/useOrder";

const AdminOrderDetalis = () => {
  return (
    <div>
      {/* <div className='admin-content-text mb-3'>#55 Numaralı Sipariş ayrıntıları</div> */}
      {/* <CartItem />
      <CartItem />
      <CartItem /> */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="card-header py-3 mb-4">
            <h5 className="mb-0">Müşteri ayrıntıları</h5>
          </div>
          <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">Ad</h6>
              <h6 className="text-black mb-0">Kullanıcı adı</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">Telefon Numarası</h6>
              <h6 className="text-black mb-0">0123456789</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">E-Posta</h6>
              <h6 className="text-black mb-0">kullanici@imu.com</h6>
            </div>
            {/* <hr className=" mt-3" /> */}
          </div>
          {/* <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div className='d-flex'>
                    <h5 className="text-muted mx-1">Toplam:</h5>

                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div className="d-flex justify-content-between mb-5">
                          <h5>300,00 TL</h5>
                        </div>
                    
                </Col>
            </Row> */}

          <hr className="my-4" />
          <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">Toplam</h6>
              <h6 className="text-black mb-0">300,00 TL</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <select
                name="languages"
                id="lang"
                className="select input-form-area mt-1 text-center px-2"
              >
                <option value="val">Durum</option>
                <option value="val2">Hazırlanıyor</option>
                <option value="val2">Teslim edildi</option>
                <option value="val2">iptal edildi</option>
              </select>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  background: "#1ececa",
                  color: "white",
                }}
              >
                Kaydet
              </button>
            </div>
          </div>

          {/* <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val">Durum</option>
                        <option value="val2">Hazırlanıyor</option>
                        <option value="val2">Teslim edildi</option>
                        <option value="val2">iptal edildi</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">Kaydet </button>
                </div>
           */}
        </div>
      </div>

      {/* <div className="card-header py-3 mb-4">
            <h5 className="mb-0">Müşteri ayrıntıları</h5>
          </div>
            <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">Ad</h6>
          <h6 className="text-black mb-0">Kullanıcı adı</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">Telefon Numarası</h6>
          <h6 className="text-black mb-0">0123456789</h6>
        </div>
       
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">E-Posta</h6>
          <h6 className="text-black mb-0">kullanici@imu.com</h6>
        </div>
       

        <div className=" d-inline px-4 border text-center pt-2">
                    Toplam 4000 TL
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val">Durum</option>
                        <option value="val2">Hazırlanıyor</option>
                        <option value="val2">Teslim edildi</option>
                        <option value="val2">iptal edildi</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">Kaydet </button>
                </div>
        
        
      </div> */}

      {/* <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">Müşteri ayrıntıları</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Ad soyad
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        Müşteri adı
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Telefon Numarası
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        E-posta:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        ahmed@gmail.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    Toplam 4000 TL
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val">Durum</option>
                        <option value="val2">Hazırlanıyor</option>
                        <option value="val2">Teslim edildi</option>
                        <option value="val2">iptal edildi</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">Kaydet </button>
                </div>
            </Row> */}
    </div>
  );
};

export default AdminOrderDetalis;
