import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RowRadioButtonsGroup = () => {
  return (
    <FormControl style={{ float: "right" }} sx={{ mt: 1 }} component="fieldset">
      <FormLabel
        sx={{ mr: 2 }}
        style={{ textAlign: "right" }}
        component="legend"
      >
        Sort by:
      </FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="points" control={<Radio />} label="Points" />
        <FormControlLabel
          value="comments"
          control={<Radio />}
          label="Comments"
        />
        <FormControlLabel value="date" control={<Radio />} label="Date" />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
