import { useState, useEffect } from "react";
import axios from "axios";
import {
  deleteData,
  getData,
  insertData,
  updateData,
} from "../../hooks/useInsertData";
import { toast } from "react-toastify";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
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

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await getData(`api/v1/cart`, config);
      const items = Array.isArray(response.data.products)
        ? response.data.products
        : [];
      setCartItems(items);
      calculateTotal(items);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (id, size) => {
    try {
      setAddLoading(true);
      const response = await insertData(
        `api/v1/cart`,
        { productId: id, productSize: size || "XS" },
        config
      );
      const newItem = response.data;
      const updatedItems = [...cartItems, newItem];
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
      toast.success("Item added to cart successfully!");
    } catch (e) {
      console.log(e);
      setError(e.message);
      toast.error("Failed to add item to cart.");
    } finally {
      setAddLoading(false);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      const response = await updateData(
        `api/v1/cart/${itemId}`,
        { count: quantity },
        config
      );
      const updatedItems = cartItems.map((item) =>
        item.product._id === itemId ? { ...item, count: quantity } : item
      );

      setCartItems(updatedItems);
      calculateTotal(updatedItems);
      // console.log(updatedItems);
      // console.log(total);
    } catch (e) {
      setError(e.message);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      console.log(itemId);
      await deleteData(`api/v1/cart/${itemId}`, config);
      const updatedItems = cartItems.filter(
        (item) => item.product._id !== itemId
      );
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
      return window.location.reload();
    } catch (e) {
      setError(e.message);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotal(total);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cartItems,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    fetchCart,
    loading,
    error,
  };
};

export default useCart;
