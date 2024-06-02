import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrder = () => {
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
           <UserAllOrderItem />
           <UserAllOrderItem />
           <UserAllOrderItem />
        </div>
    )
}

export default UserAllOrder
