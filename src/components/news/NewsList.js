import { useContext, useEffect, Fragment } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import NewsForm from "./NewsForm";
import Spinner from "../Spinner";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const { getNews, news, loading } = newsContext;

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {!loading && <NewsForm />}
      {loading ? (
        <Spinner />
      ) : (
        news.map((item) => <NewsItem key={item.objectID} entry={item} />)
      )}
    </Fragment>
  );
};

export default NewsList;
