import React from 'react'
import { Row, Col } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
const UserProfile = () => {
    return (
        <div>
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
       
        <div className="col-md-1 col-lg-1 col-xl-1 d-grid gap-3 text-end">
          {/* <Link to="/user/edit-address" style={{ textDecoration: "none" }}>    */}
            <a href="#!" className="text-muted"><i class="fas fa-pen"></i></a>
          {/* </Link> */}
        </div>
        
      </div>
      
      <hr className="my-4" />
      <div className="row">
      <div >
        <div className="card mb-4">
          <div className="card-body">
          <div className="card-header py-3 mb-4">
            <h5 className="mb-0">Şifreyi Değiştir</h5>
          </div>
            <form>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example3">Şifre</label>
                <input type="text" id="form7Example3" className="form-control" /> 
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example3">Yeni Şifre</label>
                <input type="text" id="form7Example3" className="form-control" />
              </div>
              <div className="text-center text-lg-start mt-2 pt-2">
                <button
                  type="button"
                  className="btn btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', background:'#1ececa', color: 'white'}}
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

      
            {/* <div className="admin-content-text">Hesap Ayarları</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">Ad: </div>
                        <div className="p-1 item-delete-edit">Kullanıcı adı</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit">Düzenle</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Telefon Numarası:</div>
                        <div className="p-1 item-delete-edit">0122314324</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">E-posta: </div>
                        <div className="p-1 item-delete-edit">ahmed@gmail.com</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">Şifreyi Değiştir</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Eski Şifre"
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Yeni Şifre"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-start ">
                        <button className="btn-save d-inline mt-2 ">Kaydet</button>
                    </Col>
                </Row>
            </div> */}
        </div>
    )
}

export default UserProfile
