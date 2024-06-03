import {
  LOAD_PRICE,
  CLEAR_FILTERS,
  GRID_VIEW,
  LIST_VIEW,
  UPDATE_SORT,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from "../type";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_Products: [...action.payload],
      filtered_Products: [...action.payload],
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_Products } = state;
    let tempProducts = [...filtered_Products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }

    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    }

    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_Products: [...tempProducts] };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_Products } = state;
    const { category, price } = state.filters;
    let tempProducts = [...all_Products];
    // filters
    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.categoryId === category;
      });
    }
    tempProducts = tempProducts.filter((product) => {
      return product.price <= price;
    });
    return { ...state, filtered_Products: [...tempProducts] };
  }
  if (action.type === LOAD_PRICE) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_Products: [...action.payload],
      filtered_Products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        category: "all",
        max_price: state.filters.max_price,
      },
    };
  }
};

export default filterReducer;
