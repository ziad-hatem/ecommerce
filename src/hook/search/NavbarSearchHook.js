// import React, { useState, useEffect } from "react";
// import ViewSearchProductsHook from "./../products/viewSearchProductsHook";

// const NavbarSearchHook = () => {
//     const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
//     const [searchWord, setSearchWord] = useState("");
//     //when user type search word
//     const OnChangeSearch = (e) => {
//         localStorage.setItem("searchWord", e.target.value);
//         setSearchWord(e.target.value);
//         const path = window.location.pathname;
//         if (path != "/products") {
//             window.location.href = "/products";
//         }
//     };
//     useEffect(() => {
//         setTimeout(() => {
//             getProduct();
//         }, 1000);
//     }, [searchWord]);
//     return [OnChangeSearch, searchWord];
// };

// export default NavbarSearchHook;

// import React, { useState, useEffect } from "react";
// import ViewSearchProductsHook from "./../products/ViewSearchProductsHook";
// const NavbarSearchHook = () => {
//     const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
//     const [searchWord, setSearchWord] = useState("");
//     // when user type search word
//     const OnChangeSearch = (e) => {
//         localStorage.setItem("searchWord", e.target.value);
//         // console.log(e.target.value);
//         setSearchWord(e.target.value);
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             getProduct();
//         }, 1000);
//     }, [searchWord]);

//     return [OnChangeSearch, searchWord];
// };

// export default NavbarSearchHook;

//! yeni
import React, { useState, useEffect } from "react";
import ViewSearchProductsHook from "../products/ViewSearchProductsHook";
const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
    const [searchWord, setSearchWord] = useState("");
    // when user type search word
    const OnChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value);
        // console.log(e.target.value);
        setSearchWord(e.target.value);
    };

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [searchWord]);

    return [OnChangeSearch, searchWord];
};

export default NavbarSearchHook;
