import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState, useContext } from "react";
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

  const { resetPages, changeInput } = newsContext;
  const { setAlert, clearAlert } = alertContext;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      resetPages();
      clearAlert();
      changeInput(value);
    } else {
      setAlert("Please write something!", "warning", true);
    }
  };

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
        }}
      />
    </Box>
  );
};

export default NewsForm;
