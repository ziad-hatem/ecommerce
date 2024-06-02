import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import baseUrl from "../../Api/baeURL";

const ViewProductDetailsHook = (id) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await baseUrl.get(`/api/v1/products/${id}`);
        setItem(response.data.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  return [item, loading, errors];
};

export default ViewProductDetailsHook;

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getOneProduct(id));
// }, []);

// const oneProducts = useSelector((state) => state.allProducts.oneProduct);
// const loading = useSelector((state) => state.loading);
// if (oneProducts.data) console.log(oneProducts.data);
//! to show products item
//! bu bilgileri degiskende saklamam lazim
// let item = [];
// if (oneProducts.data) item = oneProducts.data;
// else item = [];

//! to view images gallery
// let images = [];
// if (item.images)
//   images = item.images.map((img) => {
//     return { original: img };
//   });
// else {
//   images = [{ origin: `${mobile}` }];
// }

//! to show category item
//     let cat = [];
//     if (oneCategory.data) item = oneCategory.data;
//     else item = [];

// return [item, images];
