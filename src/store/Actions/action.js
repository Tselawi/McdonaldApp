import { ADD_TO_CART } from "../constant";

const addtoCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export default addtoCart;
