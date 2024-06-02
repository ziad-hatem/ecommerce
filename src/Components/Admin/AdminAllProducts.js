import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = () => {
    return (
        <div>
            {/* <div className='admin-content-text'>Tüm ürünleri yönet</div> */}
            <Row className='justify-content-start'>
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
