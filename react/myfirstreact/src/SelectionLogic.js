import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function SelectionLogic(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    const name = event.target.value;
    props.onChange(name);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Cat</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.name}
          onChange={handleChange}
        >
          <MenuItem value="I'm sleepy...">Sleepy Cat</MenuItem>
          <MenuItem value="I'm curious...">Curious Cat</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
