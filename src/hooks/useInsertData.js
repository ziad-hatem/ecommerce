import baseUrl from "../Api/baeURL";
import axios from "axios";

//! post data with image
const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  console.log(res.status);
  return res;
};

//! post data without image
const useInsertData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};
const useUpdateData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.patch(url, params, config);
  return res;
};
const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.delete(url, config);
  return res;
};

const useGetData = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.get(url, config);
  return res;
};

export {
  useInsertData,
  useInsertDataWithImage,
  useGetData,
  useUpdateData,
  useDeleteData,
};

// import baseUrl from '../Api/baseURL'
// const useInsertDataWithImage = async (url, parmas) => {
//     const config = {
//         headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//     }
//     const res = await baseUrl.post(url, parmas, config);
//     return res;
// }

// const useInsertData = async (url, parmas) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//     }
//     const res = await baseUrl.post(url, parmas, config);
//     return res;
// }

// export { useInsertData, useInsertDataWithImage };
const getConfig = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getData = async (url) => {
  const config = getConfig();
  const response = await baseUrl.get(url, config);
  return response.data;
};

export const insertData = async (url, data) => {
  const config = getConfig();

  const response = await baseUrl.post(url, data, config);
  return response.data;
};

export const updateData = async (url, data) => {
  const config = getConfig();
  const response = await baseUrl.patch(url, data, config);
  return response.data;
};

export const deleteData = async (url) => {
  const config = getConfig();
  const response = await baseUrl.delete(url, config);
  return response.data;
};
