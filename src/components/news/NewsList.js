import { useContext, useEffect, Fragment } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import AlertMessage from "../layout/AlertMessage";
import { Pagination } from "@mui/material";

const NewsList = () => {
  const newsContext = useContext(NewsContext);

  const { getNews, news, loading, input, searchNews, currentPage, changePage } =
    newsContext;

  const { hits, nbPages } = news;

  const handleChange = (event, value) => {
    changePage(value - 1);
  };

  useEffect(() => {
    input === "tags=front_page"
      ? getNews(currentPage)
      : searchNews(input, currentPage);
    // eslint-disable-next-line
  }, [currentPage, input]);

  return (
    <Fragment>
      <AlertMessage />
      {loading ? (
        <Spinner />
      ) : (
        hits.map((hit) => <NewsItem key={hit.objectID} entry={hit} />)
      )}
      {!loading && (
        <Pagination
          count={nbPages}
          page={currentPage + 1}
          onChange={handleChange}
          color="primary"
        />
      )}
    </Fragment>
  );
};

export default NewsList;
