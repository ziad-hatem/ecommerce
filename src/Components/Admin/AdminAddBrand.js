import React from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
const AdminAddBrand = () => {
    return (
                <div>
              <div className="row">
      <div >
        <div className="card mb-4">
          <div className="card-body">
            <form>
              <div className="form-outline mb-4 d-grid">
              <label className="form-label mb-3" htmlFor="form7Example7">Markanın Resmi</label>
              <img src={avatar} alt="" height="100px" width="120px" />
                {/* <textarea className="form-control" id="form7Example7" rows="4"></textarea> */}
              </div>
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example3">Markanın Adı</label>
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
    </div>
        // <div>
        //     <Row className="justify-content-start ">
        //         <div className="admin-content-text pb-4">Yeni marka ekle</div>
        //         <Col sm="8">
        //             <div className="text-form pb-2">markanın Resmi</div>
        //             <img src={avatar} alt="" height="100px" width="120px" />
        //             <input
        //                 type="text"
        //                 className="input-form d-block mt-3 px-3"
        //                 placeholder="markanın adı"
        //             />
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col sm="8" className="d-flex justify-content-end ">
        //             <button className="btn-save d-inline mt-2 ">Kaydet</button>
        //         </Col>
        //     </Row>
        // </div>
    )
}

export default AdminAddBrand
