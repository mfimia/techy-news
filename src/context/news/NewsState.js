import { useReducer } from "react";
import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import { GET_NEWS, SEARCH_NEWS } from "../types";

const NewsState = (props) => {
  const initialState = {
    news: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Get news
  const getNews = async () => {
    try {
      const res = await fetch(
        "http://hn.algolia.com/api/v1/search_by_date?tags=story"
      );
      const newsData = await res.json();
      dispatch({
        type: GET_NEWS,
        payload: newsData.hits,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Search news
  const searchNews = () => {
    console.log("search news function");
  };

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        error: state.error,
        loading: state.loading,
        getNews,
        searchNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
