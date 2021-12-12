import { useReducer } from "react";
import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import { GET_NEWS, LOAD, SEARCH_NEWS } from "../types";

const NewsState = (props) => {
  const initialState = {
    news: {},
    loading: true,
    input: "tags=front_page",
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Get news
  const getNews = async () => {
    try {
      const res = await fetch(
        "http://hn.algolia.com/api/v1/search?tags=front_page"
      );
      const newsData = await res.json();
      dispatch({
        type: GET_NEWS,
        payload: { news: newsData },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Search news
  const searchNews = async (input) => {
    dispatch({ type: LOAD });
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${input}&tags=story`
      );
      const searchData = await res.json();
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

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        input: state.input,
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
