import { useContext } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import NewsContext from "../../context/news/NewsContext";

const RowRadioButtonsGroup = () => {
  const newsContext = useContext(NewsContext);
  const { changeSort, sort } = newsContext;

  const handleChange = (e) => {
    changeSort(e.target.value);
  };

  return (
    <FormControl style={{ float: "right" }} sx={{ mt: 1 }} component="fieldset">
      <FormLabel
        sx={{
          mr: 2,
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        style={{
          textAlign: "right",
          position: "absolute",
          transform: "translate(-130%, -50%)",
          top: "50%",
        }}
        component="legend"
      >
        Sort by:
      </FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        value={sort}
        onChange={handleChange}
      >
        <FormControlLabel value="search" control={<Radio />} label="Points" />
        <FormControlLabel
          value="search_by_date"
          control={<Radio />}
          label="Newest"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
