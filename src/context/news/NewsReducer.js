import { GET_NEWS, SEARCH_NEWS, LOAD, CHANGE_PAGE, RESET_PAGE } from "../types";

const NewsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        news: action.payload.news,
        loading: false,
        input: action.payload.input,
        reset: false,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        reset: false,
      };
    case RESET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        reset: true,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload.news,
        loading: false,
        reset: false,
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
