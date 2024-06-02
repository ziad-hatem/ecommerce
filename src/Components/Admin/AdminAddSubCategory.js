import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AdminAddSubCategory = () => {
    return (
        <div>
        <div className="row">
<div >
  <div className="card mb-4">
    <div className="card-body">
      <form>
        
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">Alt kategorinin adı</label>
          <input type="text" id="form7Example3" className="form-control" />
        </div>
        <select name="languages" id="lang" className="select px-2 " style={{border:'1px solid #ced4da', borderRadius:'5px'}}>
            <option value="val">Birinci</option>
            <option value="val2">İkinci</option>
            <option value="val2">Üçüncü</option>
            <option value="val2">Dördüncü</option>
        </select>
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
        //         {/* <div className="admin-content-text pb-4">Yeni bir alt kategori ekle</div> */}
        //         <Col sm="8">
        //             <input
        //                 type="text"
        //                 className="input-form d-block mt-3 px-3"
        //                 placeholder="alt kategorinin adi"
        //             />
        //             <select name="languages" id="lang" className="select mt-3 px-2 ">
        //                 <option value="val">Birinci</option>
        //                 <option value="val2">İkinci</option>
        //                 <option value="val2">Üçüncü</option>
        //                 <option value="val2">Dördüncü</option>
        //             </select>
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

export default AdminAddSubCategory
