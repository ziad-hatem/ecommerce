import { useState, useEffect } from "react";
import axios from "axios";
import {
  deleteData,
  getData,
  insertData,
  updateData,
} from "../../hooks/useInsertData";
import { toast } from "react-toastify";
const useOrder = () => {
  const [orders, setorders] = useState([]);
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
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await getData(`api/v1/orders`, config);
      const data = Array.isArray(response.data) ? response.data : [];
      setorders(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrder = async (id) => {
    try {
      setLoading(true);
      const response = await getData(`api/v1/orders/${id}`, config);
      const data = Array.isArray(response.data) ? response.data : [];
      console.log(data);
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    fetchOrders,
    fetchOrder,
    orders,
  };
};

export default useOrder;
