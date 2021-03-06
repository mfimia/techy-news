import { useContext, useEffect, Fragment } from "react";
import NewsContext from "../../context/news/NewsContext";
import NewsItem from "./NewsItem";
import AlertMessage from "../layout/AlertMessage";
import { Pagination } from "@mui/material";
import AlertContext from "../../context/alert/AlertContext";
import RowRadioButtonsGroup from "../layout/RowRadioButtonsGroup";
import CircularIndeterminate from "../layout/CircularIndeterminate";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);

  const {
    getNews,
    news,
    loading,
    input,
    searchNews,
    currentPage,
    changePage,
    sort,
  } = newsContext;

  const { setAlert, clearAlert } = alertContext;

  const { hits, nbPages } = news;

  const handleChange = (event, value) => {
    changePage(value - 1);
  };

  useEffect(() => {
    input === "tags=front_page"
      ? getNews(currentPage, sort)
      : searchNews(input, currentPage, sort);
    !hits &&
      !loading &&
      setAlert("No results found. Please try something else", "error");
    // eslint-disable-next-line
  }, [currentPage, input, sort]);

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
      {!loading && hits.length !== 0 && (
        <Pagination
          variant="outlined"
          count={nbPages}
          page={currentPage + 1}
          onChange={handleChange}
          color="primary"
          size="medium"
          sx={{
            mt: 2,
            ml: 1.5,
            display: {
              xs: "none",
              md: "block",
            },
          }}
          style={{ position: "absolute" }}
        />
      )}
      {!loading && hits.length !== 0 && <RowRadioButtonsGroup />}
      {loading ? (
        <CircularIndeterminate />
      ) : (
        hits.map((hit) => <NewsItem key={hit.objectID} entry={hit} />)
      )}
      {!loading && hits.length !== 0 && (
        <Pagination
          variant="outlined"
          count={nbPages}
          page={currentPage + 1}
          onChange={handleChange}
          color="primary"
          sx={{
            pb: 4,
            mt: 1,
            ml: 2,
            size: {
              xs: "small",
              sm: "large",
            },
          }}
        />
      )}
    </Fragment>
  );
};

export default NewsList;
