import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price); //it return an array of only price from the products array

    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice }, //IMPORTANT, is ...state.filters, NOT JUST ...filters
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;

    let tempProducts = [...filtered_products];

    switch (sort) {
      case "price-lowest":
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);

        break;
      case "price-highest":
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);

        break;
      case "name-a":
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      case "name-z":
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        break;
      default:
        return { ...state, filtered_products: tempProducts };
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } }; //this is just a brackets notatio for acces an object property
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, colors, price, shipping } = state.filters;

    let temProducts = [...all_products];

    if (text) {
      temProducts = temProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      temProducts = temProducts.filter((product) => {
        return product.category === category;
      });
    }
    if (company !== "all") {
      temProducts = temProducts.filter((product) => {
        return product.company === company;
      });
    }
    if (colors !== "all") {
      temProducts = temProducts.filter((product) => {
        return product.colors.find((c) => c === colors);
      });
    }
    //price
    temProducts = temProducts.filter((product) => product.price <= price);

    if (shipping) {
      temProducts = temProducts.filter((product) => product.shipping === true);
    }

    return { ...state, filtered_products: temProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        //back to default state
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        colors: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
