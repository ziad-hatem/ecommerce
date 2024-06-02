// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../redux/actions/productsAction";
// import { getAllProductsPage } from "./../../redux/actions/productsAction";

// const ViewSearchProductsHook = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getAllProducts(12));
//     }, []);

//     const allProducts = useSelector((state) => state.allProducts.allProducts);

//     let items = [];
//     if (allProducts.data) items = allProducts.data;
//     else items = [];

//     let pagination = [];
//     if (allProducts.paginationResult)
//         pagination = allProducts.paginationResult.numberOfPages;
//     else pagination = [];

//     const onPress = async (page) => {
//         await dispatch(getAllProductsPage(page, 12));
//     };

//     return [items, pagination, onPress];
// };

// export default ViewSearchProductsHook;

//! yeni
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllProducts,
    getAllProductsSearch,
} from "../../redux/actions/productsAction";
import { getAllProductsPage } from "../../redux/actions/productsAction";

const ViewSearchProductsHook = () => {
    let limit = 12;
    const dispatch = useDispatch();

    const getProduct = async () => {
        let word = "";
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord");
        sortData();
        await dispatch(
            getAllProductsSearch(`sort=${sort}&limit=${limit}&search=${word}`)
        );
    };

    useEffect(() => {
        getProduct();
    }, []);

    const allProducts = useSelector((state) => state.allProducts.allProducts);

    let items = [];
    let pagination = [];
    let results = 0;

    try {
        if (allProducts.data) items = allProducts.data;
        else items = [];
    } catch (e) {}

    try {
        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else pagination = [];
    } catch (e) {}

    try {
        if (allProducts.data) results = allProducts.results;
        else results = 0;
    } catch (e) {}

    const onPress = async (page) => {
        let word = "";
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord");
        await dispatch(
            getAllProductsSearch(
                `sort=${sort}&limit=${limit}&page=${page}&search=${word}`
            )
        );
    };

    // return [items];

    let sortType = "",
        sort;
    // when user cchoose sort type
    const sortData = () => {
        if (localStorage.getItem("sortType") !== null) {
            sortType = localStorage.getItem("sortType");
        } else {
            sortType = "";
        }

        if (sortType === "السعر من الاقل للاعلي ") sort = "+price";
        else if (sortType === "السعر من الاعلي للاقل") sort = "-price";
        else if (sortType === "") sort = "";
        else if (sortType === "الاكثر مبيعا") sort = "-sold";
        else if (sortType === "الاعلي تقييما") sort = "-ratingsQuantity";
    };
    return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
