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

const useRates = () => {
  const [rates, setRates] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);
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

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await getData(`api/v1/users/getCurrentUserData`, config);
      setUser(response.data.user);
    } catch (e) {
      console.log(e);
      setError(e.message);
      toast.error("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRates = async (id) => {
    try {
      setLoading(true);
      const response = await getData(`api/v1/products/${id}/reviews`, config);
      setRates(response.data);
    } catch (e) {
      console.log(e);
      setError(e.message);
      toast.error("Failed to fetch rates.");
    } finally {
      setLoading(false);
    }
  };

  const postRate = async (comment, rating, productId) => {
    const data = {
      review: comment,
      rating: rating,
    };
    try {
      setAddLoading(true);
      const response = await insertData(
        `api/v1/products/${productId}/reviews`,
        data,
        config
      );
      setRates((prev) => [...prev, response.data]);
      toast.success("Review added successfully!");
      return window.location.reload();
    } catch (error) {
      console.log(error);
      setError(error.message);
      toast.error("Failed to add review.");
    } finally {
      setAddLoading(false);
    }
  };

  return {
    fetchRates,
    postRate,
    rates,
    fetchUser,
    user,
    loading,
    error,
    addLoading,
  };
};

export default useRates;
