import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">Tüm</div>
            <div className="cat-text-header">Çanta</div>
            <div className="cat-text-header">Giyim</div>
            <div className="cat-text-header"> Kırtasiye</div>
            <div className="cat-text-header">Aksesuar</div>
            <div className="cat-text-header">Ev yaşam</div>
            <div className="cat-text-header">Ev yaşam</div>
            <div className="cat-text-header">Ev yaşam</div>
            <div className="cat-text-header">Ev yaşam</div>
            <div className="cat-text-header">Daha fazla</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
