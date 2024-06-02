import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="col-lg-4 bg-grey">
        <div className="p-5">
          <h3 className="fw-bold mb-5 mt-2 pt-1">Menu</h3>
          <hr className="my-4" />
          <ul className="list-group list-group-light">          
            <li className="list-group-item">
            <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text mt-1 border-bottom p-2 mx-auto text-center">
                     Sipariş yönetimi
                     </div>
                 </Link>
            </li>
            <li className="list-group-item">
            <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                     Ürün Yönetimi
                     </div>
                 </Link>
                 </li>
            <li className="list-group-item">
            <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Marka Ekle
                     </div>
                 </Link>
            </li>
            <li className="list-group-item">
            
                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Kategori Ekle
                    </div>
                </Link>
            </li>
            <li className="list-group-item">
            <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Alt kategori ekle
                     </div>
                 </Link>
            </li>
            <li className="list-group-item">
            <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Ürün Ekle
                    </div>
                </Link>
            </li>
            
          </ul>
        </div>
      </div>
        // <div className="sidebar">
        //     <div className="d-flex flex-column">
        //         <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text mt-1 border-bottom p-2 mx-auto text-center">
        //             Sipariş yönetimi
        //             </div>
        //         </Link>
        //         <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //             Ürün Yönetimi
        //             </div>
        //         </Link>
        //         <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //                 Marka Ekle
        //             </div>
        //         </Link>

        //         <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //                 Kategori Ekle
        //             </div>
        //         </Link>

        //         <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //                 Alt kategori ekle
        //             </div>
        //         </Link>
        //         <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //                 Ürün Ekle
        //             </div>
        //         </Link>

        //     </div>
        // </div>
    )
}

export default AdminSideBar
