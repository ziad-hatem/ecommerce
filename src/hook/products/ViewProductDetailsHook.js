import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  const oneProducts = useSelector((state) => state.allProducts.oneProduct);
  // if (oneProducts.data) console.log(oneProducts.data);
  //! to show products item
  //! bu bilgileri degiskende saklamam lazim
  let item = [];
  if (oneProducts.data) item = oneProducts.data;
  else item = [];

  //! to view images gallery
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ origin: `${mobile}` }];
  }

  //! to show category item
  //     let cat = [];
  //     if (oneCategory.data) item = oneCategory.data;
  //     else item = [];

  return [item, images];
};

export default ViewProductDetailsHook;
