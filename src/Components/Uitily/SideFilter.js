import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
    return (
        <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">katagori</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Tüm</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Giyim</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Kırtasiye</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Çanta</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Ev yaşam</div>
            </div>
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Marka</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">Tüm</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">marka1</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">marka2</div>
            </div>
          </div>
  
          <div className="filter-title my-3">Fiyat</div>
          <div className="d-flex">
            <p className="filter-sub my-2"> min:</p>
            <input
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">max:</p>
            <input
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideFilter
