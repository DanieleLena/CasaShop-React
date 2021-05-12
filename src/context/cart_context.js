import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";


//We first check if there is something in the local storage
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
    
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),  
  total_items: 0, //NOT n. of products
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
  
    dispatch({type: REMOVE_CART_ITEM, payload: {id}})
 
  };

  const toggleAmount = (id, value) => {
    dispatch({type: TOGGLE_CART_ITEM_AMOUNT, payload: {id,value}})
  };

  const clearCart = () => {
    dispatch({type: CLEAR_CART})
  };

  //LOCAL STORAGE
  //every time the cart change we overwrite the cart in the local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
