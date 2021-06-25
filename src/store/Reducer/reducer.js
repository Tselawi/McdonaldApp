import { ADD_TO_CART } from "../constant";

const initialState = {
  cardData: [],
};

const CardItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { data: action.data }];
    default:
      return state;
  }
};

export default CardItems;
