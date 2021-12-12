import { useContext, useEffect, Fragment } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const { getNews, news, loading, searchNews } = newsContext;

  useEffect(() => {
    getNews();
    searchNews();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        news.map((item) => <NewsItem key={item.objectID} entry={item} />)
      )}
    </Fragment>
  );
};

export default NewsList;
