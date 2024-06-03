import React, { useEffect, useReducer } from 'react';
import filterReducer from '../redux/reducers/filterReducer';
import { LOAD_PRICE, CLEAR_FILTERS, UPDATE_SORT, LOAD_PRODUCTS, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS } from '../redux/type';
import ViewAllProducts from '../hook/products/ViewAllProducts';
import { Alert, Spinner } from 'react-bootstrap';

const initialFilters = {
  filtered_Products: [],
  all_Products: [],
  sort: 'price-highest',
  filters: {
    category: 'all',
    min_price: 0,
    max_price: 0,
  }
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
const [items, loading, error] = ViewAllProducts();
  const [state, dispatch] = useReducer(filterReducer, initialFilters);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: items });
  }, [items]);

    useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
  }, [items, state.filters])

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.value;
    }
    if (name === 'price') {
    
      value = Number(value)
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  useEffect(() => {
    if (items.length > 0) {
      dispatch({ type: LOAD_PRICE, payload: items });
    }
  }, [items]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const clearFilters = () => dispatch({ type: CLEAR_FILTERS });

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "670px" }}
      >
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <FilterContext.Provider value={{ ...state, updateSort, updateFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => React.useContext(FilterContext);

export default useFilterContext;