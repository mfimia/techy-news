import { useContext, useEffect, Fragment, useState } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import AlertMessage from "../layout/AlertMessage";
import { Pagination } from "@mui/material";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const { getNews, news, loading } = newsContext;
  const { hits, nbPages } = news;

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(page);
  };

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
        hits.map((hit) => <NewsItem key={hit.objectID} entry={hit} />)
      )}
      <Pagination
        count={nbPages}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Fragment>
  );
};

export default NewsList;
