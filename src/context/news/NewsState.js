import { useReducer } from "react";
import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import {
  GET_NEWS,
  LOAD,
  SEARCH_NEWS,
  CHANGE_PAGE,
  CHANGE_INPUT,
} from "../types";

const NewsState = (props) => {
  const initialState = {
    news: {},
    loading: true,
    input: "tags=front_page",
    currentPage: 0,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Get news
  const getNews = async (page = state.currentPage) => {
    dispatch({ type: LOAD });
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?${state.input}&page=${page}`
      );
      const newsData = await res.json();
      console.log(newsData, state.input);
      dispatch({
        type: GET_NEWS,
        payload: { news: newsData },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Search news
  const searchNews = async (input, page = state.currentPage) => {
    dispatch({ type: LOAD });
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${input}&tags=story&page=${page}`
      );
      const searchData = await res.json();
      console.log(searchData, state.input);
      dispatch({
        type: SEARCH_NEWS,
        payload: {
          news: searchData,
          input: input,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Change input
  const changeInput = (input) => {
    dispatch({
      type: CHANGE_INPUT,
      payload: input,
    });
  };

  // Change page
  const changePage = (page) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };

  // Reset pages
  const resetPages = () => {
    dispatch({
      type: CHANGE_PAGE,
      payload: 0,
    });
  };

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        input: state.input,
        loading: state.loading,
        currentPage: state.currentPage,
        getNews,
        searchNews,
        changePage,
        resetPages,
        changeInput,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
