import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";
import { getAllProductsPage } from "./../../redux/actions/productsAction";

const ViewProductAdminHook = () => {
    // const limit = 10;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(12));
    }, []);

    const allProducts = useSelector((state) => state.allProducts.allProducts);

    let items = [];
    if (allProducts.data) items = allProducts.data;
    else items = [];

    let pagination = [];
    if (allProducts.paginationResult)
        pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 12));
    };

    return [items, pagination, onPress];
    // return [items, pagination];
};

export default ViewProductAdminHook;
