import { useState, useEffect } from "react";
import axios from "axios";
import { getData } from "../../hooks/useInsertData";
import baseUrl from "../../Api/baeURL";

const ViewAllProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await baseUrl.get("/api/v1/products");
        setItems(response.data.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return [items, loading, error];
};

export default ViewAllProducts;
