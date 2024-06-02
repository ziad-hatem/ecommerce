import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'

const UserAllAddress = () => {
    return (
        <div>
            <UserAddressCard />
            <UserAddressCard />
            <UserAddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                    <div className="text-center text-lg-start mt-2 pt-2">
                <button
                  type="button"
                  className="btn btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', background:'#1ececa', color: 'white'}}
                >
                  Yeni Adres Ekle
                </button>
              </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
