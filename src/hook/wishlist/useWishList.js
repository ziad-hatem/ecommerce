import { useState, useEffect } from "react";
import axios from "axios";
import {
  deleteData,
  getData,
  insertData,
  updateData,
} from "../../hooks/useInsertData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCart from "../cart/useCart";

const useWishList = () => {
  const { addToCart } = useCart();
  const [wishLists, setWishList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addLoading, setAddLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const fetchWishLists = async () => {
    try {
      setLoading(true);
      const response = await getData(`api/v1/wishlist`, config);
      setWishList(response.data);
      toast.success("Wishlist fetched successfully!");
    } catch (e) {
      setError(e.message);
      toast.error("Failed to fetch wishlist.");
    } finally {
      setLoading(false);
    }
  };

  const postWishList = async (id) => {
    try {
      setAddLoading(true);
      const response = await insertData(`api/v1/wishlist`, id, config);
      setWishList((prev) => [...prev, response.data]);
      toast.success("Item added to wishlist successfully!");
    } catch (e) {
      setError(e.message);
      toast.error("Failed to add item to wishlist.");
    } finally {
      setAddLoading(false);
    }
  };

  const removeFromWishList = async (id) => {
    console.log(id);
    try {
      setLoading(true);
      await deleteData(`api/v1/wishlist/${id}`, config);
      toast.success("Item removed from wishlist successfully!");
      setWishList((prev) => prev.filter((item) => item._id !== id));
    } catch (e) {
      setError(e.message);
      toast.error("Failed to remove item from wishlist.");
    } finally {
      setLoading(false);
    }
  };

  const moveToCart = async (id, size) => {
    console.log(id);
    try {
      setLoading(true);
      await removeFromWishList(id);
      await insertData(
        `api/v1/cart`,
        { productId: id, productSize: size || "XS" },
        config
      );

      toast.success("Item moved to cart successfully!");
    } catch (e) {
      setError(e.message);
      toast.error("Failed to move item to cart.");
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchWishLists,
    postWishList,
    removeFromWishList,
    moveToCart,
    wishLists,
    loading,
    error,
    addLoading,
  };
};

export default useWishList;
