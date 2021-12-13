import { useContext, useEffect, Fragment } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import AlertMessage from "../layout/AlertMessage";
import { Pagination } from "@mui/material";
import AlertContext from "../../context/alert/AlertContext";
import RowRadioButtonsGroup from "../layout/RowRadioButtonsGroup";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);

  const { getNews, news, loading, input, searchNews, currentPage, changePage } =
    newsContext;
  const { setAlert, clearAlert } = alertContext;

  const { hits, nbPages } = news;

  const handleChange = (event, value) => {
    changePage(value - 1);
  };

  useEffect(() => {
    input === "tags=front_page"
      ? getNews(currentPage)
      : searchNews(input, currentPage);
    !hits &&
      !loading &&
      setAlert("No results found. Please try something else", "error");
    // eslint-disable-next-line
  }, [currentPage, input]);

  useEffect(() => {
    if (!loading && hits.length === 0) {
      setAlert("No results found. Please try something else", "error");
    }
    if (loading) {
      clearAlert();
    }
    // eslint-disable-next-line
  }, [searchNews]);

  return (
    <Fragment>
      <AlertMessage />
      {!loading && hits.length !== 0 && <RowRadioButtonsGroup />}
      {loading ? (
        <Spinner />
      ) : (
        hits.map((hit) => <NewsItem key={hit.objectID} entry={hit} />)
      )}
      {!loading && hits.length !== 0 && (
        <Pagination
          count={nbPages}
          page={currentPage + 1}
          onChange={handleChange}
          color="primary"
          size="large"
          sx={{ mb: 6, mt: 2 }}
        />
      )}
    </Fragment>
  );
};

export default NewsList;
