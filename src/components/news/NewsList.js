import { useContext, useEffect, Fragment } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import AlertMessage from "../layout/AlertMessage";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const { getNews, news, loading, searchNews } = newsContext;

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <AlertMessage />
      {loading ? (
        <Spinner />
      ) : (
        news.map((item) => <NewsItem key={item.objectID} entry={item} />)
      )}
    </Fragment>
  );
};

export default NewsList;
