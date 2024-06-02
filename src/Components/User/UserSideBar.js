import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
    return (
     <div className="col-lg-4 bg-grey">
        <div className="p-5">
          <h3 className="fw-bold mb-5 mt-2 pt-1">Menu</h3>
          <hr className="my-4" />
          <ul className="list-group list-group-light">          
            <li className="list-group-item">
                <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                         Siparişlerim
                     </div>
                 </Link>
            </li>
            <li className="list-group-item"><Link to="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                     Favorilerim
                     </div>
                 </Link></li>
            <li className="list-group-item">
            <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Adres
                     </div>
                 </Link>
            </li>
            <li className="list-group-item">
            <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Profil
                     </div>
                 </Link>
            </li>
          </ul>
        </div>
      </div>
        
  
        // <div className="sidebar">
        //     <div className="d-flex flex-column">
        //         <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
        //                 Siparişlerim
        //             </div>
        //         </Link>
        //         <Link to="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //             Favorilerim
        //             </div>
        //         </Link>
        //         <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //                 Adres
        //             </div>
        //         </Link>

        //         <Link to="/user/profile" style={{ textDecoration: 'none' }}>
        //             <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //                 Profil
        //             </div>
        //         </Link>


        //     </div>
        // </div>
    )
}
export default UserSideBar
