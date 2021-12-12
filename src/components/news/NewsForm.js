import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewsContext from "../../context/news/NewsContext";
import AlertContext from "../../context/alert/AlertContext";

const NewsForm = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);
  const { searchNews } = newsContext;
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    value
      ? searchNews(value)
      : alertContext.setAlert("Please write something!");
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <TextField
        id="filled-search"
        label="Search news"
        type="search"
        variant="outlined"
        size="small"
        value={value}
        onChange={handleChange}
      />
      <Button variant="text" onClick={handleSubmit}>
        <SearchIcon fontSize="medium" color="action" />
      </Button>
    </Box>
  );
};

export default NewsForm;
