import React from 'react'
import { Col } from 'react-bootstrap'

const CategoryCard = ({ title }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-3 d-flex justify-content-around ">
            
                <p className="fw-bold" style={{color:"#1ececa"}}>{title}</p>
            
        </Col>
    )
}

export default CategoryCard
