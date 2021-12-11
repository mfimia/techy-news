import { useReducer } from "react";
import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import mockData from "../../data/hackernews.json";
import { GET_NEWS, SEARCH_NEWS } from "../types";

const NewsState = (props) => {
  const initialState = {
    news: null,
    error: null,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Get news
  const getNews = async () => {
    try {
      const res = await fetch("http://hn.algolia.com/api/v1/items/1");
      console.log(res);
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
        getNews,
        searchNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
