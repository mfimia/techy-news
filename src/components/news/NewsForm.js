import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NewsForm = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
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
