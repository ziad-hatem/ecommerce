import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const UserEditAddress = () => {
    return (
        <div>
                <div className="row">
      <div >
        <div className="card mb-4">
          <div className="card-body">
            <form>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example3">Yer</label>
                <input type="text" id="form7Example3" className="form-control" placeholder="Ev / iş" />
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example7">Adres</label>
                <textarea className="form-control" id="form7Example7" rows="4"></textarea>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example3">Telefon Numarası</label>
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
            {/* <Row className="justify-content-start ">
                <div className="admin-content-text pb-2"> Adresi Değiştir </div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        value="Ev"
                        placeholder="Ev/iş"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        value="istanbul"
                        placeholder="Adres"
                    />
                    <input
                        type="text"
                        value="01213621735"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Telefon Numarası "
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-start ">
                    <button className="btn-save d-inline mt-2 ">Kaydet</button>
                </Col>
            </Row> */}
        </div>
    )
}

export default UserEditAddress
