import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
const AdminAddProducts = () => {

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "التصنيف الاول", id: 1 },
        { name: "التصنيف الثاني", id: 2 },
    ];

    return (
        <div>
        <div className="row">
<div >
  <div className="card mb-4">
    <div className="card-body">
      <form>
        <div className="form-outline mb-4 d-grid">
        <label className="form-label mb-3" htmlFor="form7Example7">Ürünün Resmi</label>
        <img src={avatar} alt="" height="100px" width="120px" />
          {/* <textarea className="form-control" id="form7Example7" rows="4"></textarea> */}
        </div>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">Ürünün Adı</label>
          <input type="text" id="form7Example3" className="form-control" />
        </div>
        <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form7Example7">Ürünün açıkalaması</label>
                <textarea className="form-control" id="form7Example7" rows="4"></textarea>
        </div>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">indirimden önceki fiyati</label>
          <input type="text" id="form7Example3" className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">fiyat</label>
          <input type="text" id="form7Example3" className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">Ana sınıflandırma</label>
        <select name="languages" id="lang" className="select px-2 " style={{border:'1px solid #ced4da', borderRadius:'5px'}}>
            <option value="val">Birinci</option>
            <option value="val2">İkinci</option>
            <option value="val2">Üçüncü</option>
            <option value="val2">Dördüncü</option>
        </select>
        </div>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">Alt sınıflandırma</label>
        <select name="languages" id="lang" className="select px-2 " style={{border:'1px solid #ced4da', borderRadius:'5px'}}>
            <option value="val">Birinci</option>
            <option value="val2">İkinci</option>
            <option value="val2">Üçüncü</option>
            <option value="val2">Dördüncü</option>
        </select>
        </div >
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">Markası</label>
        <select name="languages" id="lang" className="select px-2 " style={{border:'1px solid #ced4da', borderRadius:'5px'}}>
            <option value="val">Birinci</option>
            <option value="val2">İkinci</option>
            <option value="val2">Üçüncü</option>
            <option value="val2">Dördüncü</option>
        </select>
        </div>
        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form7Example3">Ürünün mevcut renkleri</label>
            <div className="mt-1 d-flex">
                <div
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: "#E52C2C" }}></div>
                <div
                    className="color ms-2 border mt-1 "
                    style={{ backgroundColor: "white" }}></div>
                <div
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: "black" }}></div>
                <img src={add} alt="" width="30px" height="35px" className="" />
            </div>
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
        //         <div className="admin-content-text pb-4 mb-2"> Yeni ürün ekle</div>
        //         <Col sm="8">
        //             <div className="text-form pb-2"> ürünün Resmi</div>
        //             <img src={avatar} alt="" height="100px" width="120px" />
        //             <input
        //                 type="text"
        //                 className="input-form d-block mt-3 px-3"
        //                 placeholder="ürünün adı"
        //             />
        //             <textarea
        //                 className="input-form-area p-2 mt-3"
        //                 rows="4"
        //                 cols="50"
        //                 placeholder="ürün açıklaması"
        //             />
        //             <input
        //                 type="number"
        //                 className="input-form d-block mt-3 px-3"
        //                 placeholder="İndirimden önceki fiyat"
        //             />
        //             <input
        //                 type="number"
        //                 className="input-form d-block mt-3 px-3"
        //                 placeholder="ürün fiyati"
        //             />
        //             <select
        //                 name="languages"
        //                 id="lang"
        //                 className="select input-form-area mt-3 px-2 ">
        //                 <option value="val">Ana sınıflandırma</option>
        //                 <option value="val">Birinci</option>
        //                 <option value="val2">İkinci</option>
        //                 <option value="val2">Üçüncü</option>
        //                 <option value="val2">Dördüncü</option>
        //             </select>

        //             <Multiselect
        //                 className="mt-2 text-start"
        //                 placeholder="Alt sınıflandırma"
        //                 options={options}
        //                 onSelect={onSelect}
        //                 onRemove={onRemove}
        //                 displayValue="name"
        //                 style={{ color: "red" }}
        //             />
        //             <select
        //                 name="brand"
        //                 id="brand"
        //                 className="select input-form-area mt-3 px-2 ">
        //                 <option value="val">Markası</option>
        //                 <option value="val2">Birinci</option>
        //                 <option value="val2">İkinci</option>
        //                 <option value="val2">Üçüncü</option>
        //             </select>
        //             <div className="text-form mt-3 "> Ürünün mevcut renkleri</div>
        //             <div className="mt-1 d-flex">
        //                 <div
        //                     className="color ms-2 border  mt-1"
        //                     style={{ backgroundColor: "#E52C2C" }}></div>
        //                 <div
        //                     className="color ms-2 border mt-1 "
        //                     style={{ backgroundColor: "white" }}></div>
        //                 <div
        //                     className="color ms-2 border  mt-1"
        //                     style={{ backgroundColor: "black" }}></div>
        //                 <img src={add} alt="" width="30px" height="35px" className="" />
        //             </div>
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

export default AdminAddProducts
