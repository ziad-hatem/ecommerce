import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ViewHomeProductsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const allProducts = useSelector((state) => state.allProducts.allProducts);
    // if (allProducts && allProducts.data) console.log("test" + allProducts.data);
    //! bu bilgileri degiskende saklamam lazim
    let items = [];
    if (allProducts && allProducts.data) items = allProducts.data.slice(0, 4);
    else items = [];

    return [items];
};

export default ViewHomeProductsHook;
