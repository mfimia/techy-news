import { GET_NEWS, SEARCH_NEWS, LOAD } from "../types";

const NewsReducer = (state, action) => {
  switch (action.type) {
    case GET_NEWS:
    case SEARCH_NEWS:
      return {
        ...state,
        news: action.payload.news,
        loading: false,
        input: action.payload.input,
      };
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default NewsReducer;
