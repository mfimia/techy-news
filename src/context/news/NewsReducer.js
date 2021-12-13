import {
  GET_NEWS,
  SEARCH_NEWS,
  LOAD,
  CHANGE_PAGE,
  CHANGE_INPUT,
  CHANGE_SORT,
} from "../types";

const NewsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        news: action.payload.news,
        loading: false,
        input: action.payload.input,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload.news,
        loading: false,
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
