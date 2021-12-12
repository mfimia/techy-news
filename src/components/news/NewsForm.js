import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewsContext from "../../context/news/NewsContext";
import AlertContext from "../../context/alert/AlertContext";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  & label.Mui-focused,
  label {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset,
    fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: grey;
    }
  }
`;

const NewsForm = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);

  const { searchNews, news, loading } = newsContext;
  const { setAlert, clearAlert } = alertContext;

  const { hits } = news;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearAlert();
    value
      ? searchNews(value)
      : setAlert("Please write something!", "warning", true);
  };

  useEffect(() => {
    if (!hits && !loading) {
      setAlert("No results found. Please try something else", "error");
    }
    // eslint-disable-next-line
  }, [hits, searchNews]);

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      textColor="white"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0",
        textColor: "white",
      }}
    >
      <StyledTextField
        id="filled-search"
        label="Search news"
        variant="outlined"
        size="small"
        value={value}
        onChange={handleChange}
        sx={{
          input: {
            color: "white",
          },
          right: {
            xs: "10%",
            sm: "0",
          },
        }}
      />
      <Button
        variant="text"
        onClick={handleSubmit}
        sx={{ display: { xs: "none", sm: "inline-flex" } }}
      >
        <SearchIcon fontSize="medium" style={{ fill: "white" }} />
      </Button>
    </Box>
  );
};

export default NewsForm;
