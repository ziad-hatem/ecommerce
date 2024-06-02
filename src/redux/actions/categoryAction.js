import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from "../type";
// import baseUrl from "./../../Api/baeURL";
// import { createCategory } from './../../../../server/src/controllers/categoryController';

//! Get all category
export const getAllcategory = () => async (dispatch) => {
    try {
        //! bunun yernie costom hook yaptim
        const response = await useGetData("api/v1/categories");
        console.log(response.data.data);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e,
        });
    }
};

//! post category
export const createCategory = (name, token) => async (dispatch) => {
    try {
        // const response = await axios.post('https://example.com/api/data', { text }, {
        //     headers: { Authorization: `Bearer ${token}` },
        //   });
        const response = await useInsertData("api/v1/categories", name);
        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading: true,
        });
    } catch (error) {
        dispatch({
            typeof: GET_ERROR,
            payload: "Error" + error,
        });
    }
};
