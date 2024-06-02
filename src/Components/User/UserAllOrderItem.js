import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = () => {
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
            <Row>
                <div className="text-black mb-5">Sipariş Numarası: #234556</div>
            </Row>
            <UserAllOrderCard />
            <UserAllOrderCard />
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div className='d-flex'>
                    <h6 className="text-black mb-0">Durum:</h6>
                    <h6 className="text-muted mx-1">Hazırlanıyor</h6>
                        
                        {/* <div className="d-inline">Durum</div>
                        <div className="d-inline mx-2 stat">Hazırlanıyor</div> */}
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div className="d-flex justify-content-between mb-5">
                          <h5>300,00 TL</h5>
                        </div>
                    
                </Col>
            </Row>
            <hr className="my-4"/>
        </div>
    )
}

export default UserAllOrderItem
