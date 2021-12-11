import { GET_NEWS, SEARCH_NEWS } from "../types";

const NewsReducer = (state, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default NewsReducer;
